import React, {useState, useEffect, useRef} from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Platform,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import {Image} from "expo-image";
import {Ionicons} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./styles";
import {TEST_STRINGS, TEST_QUESTIONS} from "../../../utils/strings";

// Define types
type QuestionType = "radio" | "image-select";

interface Option {
  id: string;
  text: string;
  imageUrl?: string;
}

interface Question {
  id: string;
  title: string;
  type: QuestionType;
  category: string;
  icon: string;
  options: Option[];
}

const TestScreen = ({navigation}) => {
  // Use the questions data from constants
  const questions: Question[] = TEST_QUESTIONS;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [progress, setProgress] = useState(0);

  // Load saved answers from AsyncStorage when component mounts
  useEffect(() => {
    const loadSavedAnswers = async () => {
      try {
        const savedAnswers = await AsyncStorage.getItem("hairTestAnswers");
        if (savedAnswers) {
          const parsedAnswers = JSON.parse(savedAnswers);
          setAnswers(parsedAnswers);

          // Find the last answered question to set the current index
          const answeredQuestionIds = Object.keys(parsedAnswers);
          if (answeredQuestionIds.length > 0) {
            // Find the index of the last answered question
            const lastAnsweredId =
              answeredQuestionIds[answeredQuestionIds.length - 1];
            const lastAnsweredIndex = questions.findIndex(
              (q) => q.id === lastAnsweredId
            );

            // Set current index to the next unanswered question
            if (lastAnsweredIndex < questions.length - 1) {
              setCurrentQuestionIndex(lastAnsweredIndex + 1);
            }
          }
        }
      } catch (error) {
        console.error("Error loading saved answers:", error);
      }
    };

    loadSavedAnswers();
  }, []);

  // Update progress whenever currentQuestionIndex changes
  useEffect(() => {
    setProgress((currentQuestionIndex + 1) / questions.length);
  }, [currentQuestionIndex, questions.length]);

  const handleTestCompletion = async () => {
    // Save the completed test
    try {
      await AsyncStorage.setItem("hairTestCompleted", "true");
      // Clear the in-progress test data
      await AsyncStorage.removeItem("hairTestAnswers");

      // Navigate to results
      navigation.navigate("TestResults", {answers});
    } catch (error) {
      console.error("Error completing test:", error);
    }
  };

  const handleAnswer = (questionId, optionId) => {
    // Update answers
    const newAnswers = {...answers, [questionId]: optionId};
    setAnswers(newAnswers);

    // Move to next question if not at the end
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleTestCompletion();
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      // Move to previous question
      setCurrentQuestionIndex(currentQuestionIndex - 1);

      // Remove the answer for the current question if going back
      const currentQuestionId = questions[currentQuestionIndex].id;
      const newAnswers = {...answers};
      delete newAnswers[currentQuestionId];
      setAnswers(newAnswers);
    } else {
      navigation.goBack();
    }
  };

  const handleClose = async () => {
    // Save current progress before closing
    try {
      await AsyncStorage.setItem("hairTestAnswers", JSON.stringify(answers));
    } catch (error) {
      console.error("Error saving progress:", error);
    }

    navigation.goBack();
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={handleBack} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
            <Ionicons name="close" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Progress Bar */}
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBar, {width: `${progress * 100}%`}]} />
        </View>

        {/* Logo and Title - Dynamic based on current question */}
        <View style={styles.logoContainer}>
          <Ionicons name={currentQuestion.icon} size={50} color="#ccc" />
          <Text style={styles.titleText}>{currentQuestion.category}</Text>
          <View style={styles.divider} />
        </View>

        {/* Question */}
        <ScrollView style={styles.questionContainer}>
          <Text style={styles.questionTitle}>{currentQuestion.title}</Text>

          {/* Options */}
          <View style={styles.optionsContainer}>
            {currentQuestion.type === "radio" &&
              currentQuestion.options.map((option) => (
                <TouchableOpacity
                  key={option.id}
                  style={[
                    styles.radioOption,
                    answers[currentQuestion.id] === option.id &&
                      styles.selectedOption,
                  ]}
                  onPress={() => handleAnswer(currentQuestion.id, option.id)}
                >
                  <View style={styles.radioCircle}>
                    {answers[currentQuestion.id] === option.id && (
                      <View style={styles.selectedCircle} />
                    )}
                  </View>
                  <Text style={styles.optionText}>{option.text}</Text>
                </TouchableOpacity>
              ))}

            {currentQuestion.type === "image-select" &&
              currentQuestion.options.map((option) => (
                <TouchableOpacity
                  key={option.id}
                  style={[
                    styles.imageOption,
                    answers[currentQuestion.id] === option.id &&
                      styles.selectedImageOption,
                  ]}
                  onPress={() => handleAnswer(currentQuestion.id, option.id)}
                >
                  <View style={styles.radioCircle}>
                    {answers[currentQuestion.id] === option.id && (
                      <View style={styles.selectedCircle} />
                    )}
                  </View>
                  <Text style={styles.optionText}>{option.text}</Text>
                  <View style={styles.imageContainer}>
                    <Image
                      source={{uri: option.imageUrl}}
                      style={styles.optionImage}
                      contentFit="cover"
                      placeholder={{blurhash: "L3C00000"}}
                      transition={1000}
                    />
                  </View>
                </TouchableOpacity>
              ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default TestScreen;
