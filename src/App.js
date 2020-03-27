import React from "react";
import "./styles.css";
import Button from "./Button";

export default function App() {
  return (
    <div>
      <Button
        //0. 버튼의 고유 이름(버튼 별로 다 달라야합니다.)
        name="btn1"
        //1. 원하는 문구를 입력하시오
        title="버튼을 클릭스클륵시흐바아아아"
        //
        //2. 원하는 글자색을 입력하세요(rgb도 가능합니다)
        color="white"
        //
        //3. 원하는 박스선색을 입력하세요
        lineColor="red"
        //
        //4. 원하는 박스배경색을 입력하세요
        //만약 event=basic에서 마우스가 올라갔을 때의 색을 변경하고 싶다면 배경색을 변경해주세요
        backgroundColor="red"
        //
        //5. 버튼 배경색을 그라데이션 하고 싶다면 입력하세요(왼쪽시작색, 오른쪽끝색)
        // gradient="red,yellow "
        //
        //6.원하는 마우스 애니메이션을 입력하세요d
        animation="TopDowning"
        DowningColor="blue" //"rgba(120,120,120,0.5)"가능
        //현재 구현된 애니메이션
        //hover : hover상태
        //TopDowning : 마우스를 올리면 원하는 색이 위에서 내려온다.DowinfColor를 지정할 것
        //invert : 마우스를 올리면 서로의 색으로 변경(글자 <-> 배경색) -

        //구현예정 애니메이션
        //Shaking : 버튼이 흔들
        //textChange = "변경시키고 싶은 글자"(이때 글자가 두개가 겹치면서 변경)
      />
    </div>
  );
}
