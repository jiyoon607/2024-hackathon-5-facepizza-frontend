import React, { useRef, useState, useEffect } from "react";
import FaceExpression from "./FaceExpression";

const emotionMap = {
  happy: '행복',
  sad: '슬픔',
  angry: '분노',
  surprised: '놀람',
};

const TakePicture = ({ onPhotoTaken, ExpressionType, TakePhoto, isModalOpen, setDetectionStatus }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [capturing, setCapturing] = useState(false);

  useEffect(() => {
    if (capturing) {
      console.log("촬영이 진행되고있습니다.");
      const timer = setTimeout(() => {
        if (videoRef.current && canvasRef.current) {
          canvasRef.current.width = videoRef.current.videoWidth;
          canvasRef.current.height = videoRef.current.videoHeight;

          const context = canvasRef.current.getContext("2d");
          context.drawImage(
            videoRef.current,
            0,
            0,
            videoRef.current.videoWidth,
            videoRef.current.videoHeight
          );
          const imageSrc = canvasRef.current.toDataURL("image/jpeg");
          setImageSrc(imageSrc);
          onPhotoTaken(imageSrc);
        } else {
          console.error("Video or canvas reference is null.");
        }
      }, 500); // 0.5초 후 캡처
      return () => clearTimeout(timer);
    }
  }, [ExpressionType, TakePhoto, capturing]);

  useEffect(() => {
    setCapturing(false);
    setDetectionStatus(false); // 초기화 시 탐지 상태를 false로 설정
  }, [isModalOpen]);

  const handleExpressions = (expressions) => {
    const { maxKey, maxValue } = expressions;
    const emotionTranslate = emotionMap[maxKey];
    console.log('현재 표정 :', emotionTranslate); //현재 감지되고 있는 표정 출력
    if (emotionTranslate === ExpressionType && maxValue > 0.5) {
      if (!capturing) {
        setCapturing(true);   //얼굴이 맞는 경우 capturing 상태를 true로 설정
      }
      setDetectionStatus(true); // 탐지 진행 중
    } else {
      if (capturing) {
        setCapturing(false);  //얼굴이 맞지 않는 경우 capturing 상태를 false로 설정
      }
      setDetectionStatus(false); //탐지 중지
    }
    console.log("캡쳐 진행 상태:", capturing);
  };

  return (
    <>
      <FaceExpression videoRef={videoRef} onExpressions={handleExpressions} />
      <canvas ref={canvasRef} style={{ display: "none" }} />
    </>
  );
};

export default TakePicture;
