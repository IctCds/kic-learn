import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import './profile.css';

const PerformanceCards = ({stats}) => {
  let {name, highScore, avgScore} = stats;

  let scoreGrade = "";
  let textColor = "";
  let trailColor = "";
  let aScoreGrade = "";
  let aTextColor = "";
  let aTrailColor = "";

  if (highScore >= 75 && highScore <= 100){
    scoreGrade = `A1 | ${highScore}`;
    textColor = '#23A97C';
    trailColor = '#CFFCED';
  } else if (highScore >= 70 && highScore <= 74){
    scoreGrade = `B2 | ${highScore}`;
    textColor = '#23A97C';
    trailColor = '#CFFCED';
  } else if (highScore >= 65 && highScore <= 69){
    scoreGrade = `B3 | ${highScore}`;
    textColor = '#E5A84C';
    trailColor = '#FCEACF';
  } else if (highScore >= 60 && highScore <= 64){
    scoreGrade = `C4 | ${highScore}`;
    textColor = '#E5A84C';
    trailColor = '#FCEACF';
  } else if (highScore >= 55 && highScore <= 59){
    scoreGrade = `C5 | ${highScore}`;
    textColor = '#E5A84C';
    trailColor = '#FCEACF';
  } else if (highScore >= 50 && highScore <= 54){
    scoreGrade = `C6 | ${highScore}`;
    textColor = '#E5A84C';
    trailColor = '#FCEACF';
  } else if (highScore >= 45 && highScore <= 49){
    scoreGrade = `D7 | ${highScore}`;
    textColor = '#E54C4C';
    trailColor = '#FCCFCF';
  } else if (highScore >= 40 && highScore <= 44){
    scoreGrade = `E8 | ${highScore}`;
    textColor = '#E54C4C';
    trailColor = '#FCCFCF';
  } else if (highScore >= 0 && highScore <= 39){
    scoreGrade = `F9 | ${highScore}`;
    textColor = '#E54C4C';
    trailColor = '#FCCFCF';
  }


  if (avgScore >= 75 && avgScore <= 100){
    aScoreGrade = `A1 | ${avgScore}`;
    aTextColor = '#23A97C';
    aTrailColor = '#CFFCED';
  } else if (avgScore >= 70 && avgScore <= 74){
    aScoreGrade = `B2 | ${avgScore}`;
    aTextColor = '#23A97C';
    aTrailColor = '#CFFCED';
  } else if (avgScore >= 65 && avgScore <= 69){
    aScoreGrade = `B3 | ${avgScore}`;
    aTextColor = '#E5A84C';
    aTrailColor = '#FCEACF';
  } else if (avgScore >= 60 && avgScore <= 64){
    aScoreGrade = `C4 | ${avgScore}`;
    aTextColor = '#E5A84C';
    aTrailColor = '#FCEACF';
  } else if (avgScore >= 55 && avgScore <= 59){
    aScoreGrade = `C5 | ${avgScore}`;
    aTextColor = '#E5A84C';
    aTrailColor = '#FCEACF';
  } else if (avgScore >= 50 && avgScore <= 54){
    aScoreGrade = `C6 | ${avgScore}`;
    aTextColor = '#E5A84C';
    aTrailColor = '#FCEACF';
  } else if (avgScore >= 45 && avgScore <= 49){
    aScoreGrade = `D7 | ${avgScore}`;
    aTextColor = '#E54C4C';
    aTrailColor = '#FCCFCF';
  } else if (avgScore >= 40 && avgScore <= 44){
    aScoreGrade = `E8 | ${avgScore}`;
    aTextColor = '#E54C4C';
    aTrailColor = '#FCCFCF';
  } else if (avgScore >= 0 && avgScore <= 39){
    aScoreGrade = `F9 | ${avgScore}`;
    aTextColor = '#E54C4C';
    aTrailColor = '#FCCFCF'
  }

  return (
    <div className = "card-4">
          <div className = "frame-8">
            <div className = "text-wrapper-15">{name}</div>
            {highScore >= 90? 
            <div className = "frame-9">
              <div className = "text-wrapper-16">BEST SUBJECT</div>
            </div>
            : null}
          </div>
          <div className = "stats">
            <div className = "frame-10">
              <div className = "pie-stats">
                <div className = "" data-progress="90">
                  <CircularProgressbar value ={highScore} text ={scoreGrade} 
                        styles = {{
                          root: { width: '78px' },
                          path: {
                            stroke: `${textColor}`, // Change this color to green
                            strokeWidth: '6px',
                            transition: 'stroke-dashoffset 0.5s ease 0s',
                            transform: 'rotate(60deg)', // Rotate the progressbar anticlockwise
                            transformOrigin: 'center',
                          },
                          trail: { stroke: `${trailColor}` },
                          text: {
                            fill: `${textColor}`, // Change this color to green
                            fontSize: '20px',
                            fontWeight: 'bold',
                            fontFamily: 'Inter',
                            fontStyle: 'normal',
                            lineHeight: '24px',
                            letterSpacing: '-0.16px',
                          },
                        }}/>
                </div>
              </div>
              <div className = "text-wrapper-18">Highest grade</div>
            </div>
            <div className = "frame-10">
              <div className = "overlap-group-wrapper">
                <div className = "overlap-group">
                  <CircularProgressbar value ={avgScore} text = {aScoreGrade} 
                      styles = {{
                        root: { width: '78px' },
                        path: {
                          stroke: `${aTextColor}`, // Change this color to green
                          strokeWidth: '6px',
                          transition: 'stroke-dashoffset 0.5s ease 0s',
                          transform: 'rotate(80deg)', // Rotate the progressbar anticlockwise
                          transformOrigin: 'center',
                        },
                        trail: { stroke: `${aTrailColor}` },
                        text: {
                          fill: `${aTextColor}`, // Change this color to green
                          fontSize: '20px',
                          fontWeight: 'bold',
                          fontFamily: 'Inter',
                          fontStyle: 'normal',
                          lineHeight: '24px',
                          letterSpacing: '-0.16px',
                        },
                      }}/>
                </div>
              </div>
              <div className = "text-wrapper-18">Average grade</div>
            </div>
          </div>
        </div>
  )
}

export default PerformanceCards