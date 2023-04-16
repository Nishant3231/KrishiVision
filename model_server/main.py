import tensorflow as tf
from flask import Flask, jsonify, request
import numpy as np
import cv2
import pickle
from joblib import load

app = Flask(__name__)


# define the classes
classes = [
    "Apple Apple_scab",
    "Apple Black_rot",
    "Apple Cedar_apple_rust",
    "Apple healthy",
    "Blueberry healthy",
    "Cherry (including_sour)_ Powdery mildew",
    "Cherry (including sour)_ healthy",
    "Corn (maize)_ Cercospora_leaf_spot Gray_leaf_spot",
    "Corn_(maize) Common_rust_",
    "Corn (maize) Northern_Leaf_Blight",
    "Corn (maize), healthy",
    "Grape _Black_rot",
    "Grape Esca (Black_Measles)",
    "Grape Leaf blight_(Isariopsis_Leaf_Spot)",
    "Grape healthy",
    "Orange Haunglongbing (Citrus_greening)",
    "Peach Bacterial spot",
    "Peach healthy",
    "Pepper, bell Bacterial_spot",
    "Pepper, bell healthy",
    "Potato Early_blight",
    "Potato Late_blight",
    "Potato healthy",
    "Raspberry___healthy",
    "Soybean healthy",
    "Squash Powdery mildew",
    "Strawberry Leaf_scorch",
    "Strawberry healthy",
    "Tomato Bacterial_spot",
    "Tomato Early_blight",
    "Tomato Late_blight",
    "Tomato Leaf_Mold",
    "Tomato Septoria_leaf_spot",
    "Tomato Spider_mites Two-spotted spider_mite",
    "Tomato Target_Spot",
    "Tomato Tomato_Yellow_Leaf_Curl_Virus",
    "Tomato Tomato_mosaic_virus",
    "Tomato healthy",
]


# define a function to preprocess the image
def preprocess_image(img):
    img = cv2.resize(img, (224, 224))
    img = img.astype("float32") / 255.0
    img = np.expand_dims(img, axis=0)
    return img


# crop recommendation endpoint
@app.route("/predict/crop-recommendation", methods=["POST"])
def predictCropRecommendation():
    # crop recommendation model
    modelCropRec = load("../models/crop_recommendation_model.pkl")
    print(type(modelCropRec))

    data = request.get_json(force=True)
    input_data = [
        data["k"],
        data["n"],
        data["p"],
        data["humidity"],
        data["ph"],
        data["rainfall"],
        data["temp"],
    ]
    print(input_data)
    prediction = modelCropRec.predict([input_data])
    return jsonify({"prediction": prediction[0]})


# disease prediction endpoint
@app.route("/predict/disease", methods=["POST"])
def predictDisease():
    # load the model
    model = tf.keras.models.load_model("../models/RESNET50_PLANT_DISEASE.h5")

    # get the image from the request
    img_file = request.files["image"]
    img = cv2.imdecode(np.frombuffer(
        img_file.read(), np.uint8), cv2.IMREAD_COLOR)
    # preprocess the image
    img = preprocess_image(img)

    # make a prediction
    prediction = model.predict(img)

    # get the predicted class
    predicted_class = classes[np.argmax(prediction)]

    # return the predicted class as a string
    return jsonify({"prediction": predicted_class})


@app.route("/")
def hello_world():
    return "Hello, World!"


if __name__ == "__main__":
    app.run(debug=True)
