## Todo
- DB 생성 및 연결
- 앱을 시작할 때 
- 회원 가입시(**CREATE**)
  * userDB에 아이디, 비밀번호, 이름, 닉네임 
- 회원정보 수정 (**UPDATE**)
  * mypage에서 수정
- 로그인 했을 때(**READ**)
  * **MyPage**
    - userDB 정보 조회 후 출력
  * **Weather**
    - `자세한 날씨 정보와 메시지` 구역
        * 받아온 날씨정보(description ex.clearsky)를 adviceDB에서 조회하여, 날씨 정보에 맞는 data 가져오기 
    - `누적된 날씨기록?(메시지 포함할지?)` 구역
        * logDB에 로그인한 유저아이디를 조회하여 , 로그인한 날짜, 날씨정보, (메시지?) 조회? (메시지는 날씨정보와 메시지 구역에 있기 때문에 굳이 안넣어줘도 되지 않나? 생각)
- 미리 세팅 되어있어야 하는 테이블 
    - Advices (seeds까지)
    - logs, users 는 뼈대만 
    - cmarket client server 다시 보기 