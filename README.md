# react-GicoMing-Button
***버튼 애니메이션과 코드 간략화는 계속적으로 업데이트할 예정합니다.***



## [2020.3.27] Updated


1. 환경
 
	1. react 16.12.0
 
 	2. jquery 3.4.1
 
	3. react-dom 16.12.0



2. 사용법
	1. **Button.js**와 **styles.css**파일을 다운로드 합니다.
	
	2. 쓰고자하는 컴포넌트에서 **Button 컴포넌트**를 **import**하여 사용합니다.
	
	3. 버튼 태그에서 **name**은 버튼의 **고유한 이름**입니다.(다 달라야 합니다.)
	
	4. animation="**TopDowning**"의 경우,**DowningColor**를 설정해야합니다.(rgba가능)
	
	

3. 구현된 애니메이션 목록
	1. hover : hover상태.
	
	2. TopDowning : 마우스를 올리면 원하는 색이 위에서 내려온다. DowningColor를 지정할 것.
	
	3. invert : 마우스를 올리면 서로의 색으로 변경(글자 <-> 배경색).
	
	
4. 속성
	1. name : 버튼의 고유 이름(버튼 별로 다 달라야합니다.)
	
	2. title : 원하는 문구를 입력하시오
	
	3. lineColor : 원하는 박스선색을 입력하세요
	
	4. backgroundColor : 원하는 박스배경색을 입력하세요
	
	5. gradient : 버튼 배경색을 그라데이션 하고 싶다면 입력하세요(왼쪽시작색, 오른쪽끝색)
	
	6. animation : 원하는 마우스 애니메이션을 입력하세요
	
	***DowningColor : 애니메이션이 TopDowning인 경우에 DowningColor를 지정할 것.***



```javascript
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
        
	//2. 원하는 글자색을 입력하세요(rgb도 가능합니다)
        color="white"
        
 	//3. 원하는 박스선색을 입력하세요
        lineColor="red"
        
 	//4. 원하는 박스배경색을 입력하세요
        backgroundColor="red"
        
	//5. 버튼 배경색을 그라데이션 하고 싶다면 입력하세요(왼쪽시작색, 오른쪽끝색)
        gradient="red,yellow"
        
	//6.원하는 마우스 애니메이션을 입력하세요
        animation="TopDowning"
        
	DowningColor="blue"   
      />
    </div>
  );
}
```
	
