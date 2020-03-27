import React, { useEffect } from "react";
import "./styles.css";
import $ from "jquery";
window.$ = $;
//자바스크립트로 이벤트 작성 -> props로 받은 값에 따라 -> 원하는 클래스를 이름을 지정

const Button = props => {
  useEffect(() => {
    //글자색<->배경색반전
    $("." + props.name + "invert").mouseenter(function() {
      $("." + props.name + "invert").css("color", props.backgroundColor);
      $("." + props.name + "invert").css("backgroundColor", props.color);
    });
    $("." + props.name + "invert").mouseleave(function() {
      $("." + props.name + "invert").css("color", props.color);
      $("." + props.name + "invert").css(
        "backgroundColor",
        props.backgroundColor
      );
    });

    //기본 hover 배경색이 연해짐
    //hover효과는 마우스를 올렸을 때 투명도 속성을 적용하여 낮추는 방식으로 한다.
    $("." + props.name + "hover").mouseenter(function() {
      $("." + props.name + "hover").animate({ opacity: "0.75" }, 1);
    });
    $("." + props.name + "hover").mouseleave(function() {
      $("." + props.name + "hover").animate({ opacity: "1" }, 30);
    });

    // TopDowning
    $("." + props.name + "TopDowning").mouseenter(function() {
      $("." + props.name + "TopDowning").css({
        background:
          "linear-gradient( to top," +
          props.backgroundColor +
          " 5%," +
          props.DowningColor +
          ") "
      });
    });

    // transition: background .5s ease-in-out;

    $("." + props.name + "TopDowning").mouseleave(function() {
      $("." + props.name + "TopDowning").css(
        "background",
        "linear-gradient( to top," +
          props.backgroundColor +
          "," +
          props.backgroundColor +
          ")"
      );
    });

    console.log("최초 렌더링 완료");
  });

  return (
    <div>
      <button
        className={props.name + props.animation}
        style={{
          color: props.color,
          backgroundColor: props.backgroundColor,
          borderColor: props.lineColor,
          fontSize: "1rem",
          padding: ".375rem .75rem",
          border: "1px solid",
          borderRadius: ".27rem",
          background: "linear-gradient( 45deg," + props.gradient + ") "
          //1. 만약 basic이면 className이 ""비어있다가 -> hover가 있는 클래스를 선택하기()
        }}
      >
        {props.title}
      </button>
    </div>
  );
};

export default Button;
//default : hover상태
//textShaking : 글자 하나씩 흔들
//Shaking : 버튼이 흔들
//invert : 마우스를 올리면 서로의 색으로 변경(글자 <-> 배경색)
//bound : 마우스를 올리면 마우스가 바운딩한다.
//textChange = "변경시키고 싶은 글자"
//http://rwdb.kr/button_10/
