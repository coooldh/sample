# 목차
- Backend  요구사항 구현
- 서버 환경 설정
- Frontend 요구사항 구현
- 미구현 사항
- 회고

# Backend  요구사항 구현
- QNA 리스트 구현
- QNA 상세 구현
- QNA 작성 구현
- QNA 삭제 구현
- QNA 수정 구현
- QNA 3rdParty Export 구현
- QNA cvs  형식 출력 구현
- Redis cache  구현

# 서버 환경 설정
- web server (nginx)
- mysql + redis
- node.js (pm2 로 데몬 설정 하려 했으나 ubuntu 환경이 익숙치 않고 시간제약으로 nohup으로 일단 처리)

# Frontend 요구사항 구현
- Gulp 설정
- Angular2 구조 설정(Component, Router, Service)
- 화면 마크업 진행
- Backend  서버와 통신 진행
- 게시물 목록 불러오기 구현
- 게시물 작성 구현

# 미구현 사항
- Backend 에러 코드에 따른 처리
- Backend redis cache  고도화
- Backend 소스 고도화
- 서버 운영상 여러 서비스들을 compile 설치를 하려고 했으나 시간상 apt-get 으로 처리
- Frontend 게시물 상세, 수정등 마크업 및 연동

# 회고
- 주말에 아기와 장인어른 러시 때문에 작업이 힘듬;;
- Angular2 를 스터디 후 직접 적용하는 것이 처음이라 작업보다는 Gulp 및 구조잡는데 시간이 더 걸림
- Typescript  가 손에 익지 않아서 찾아가며 하느라 시간이 걸림
- 마크업까지 제대로 하려고 했으나 시간 제약상 몇몇부분만 반응형 고려
- 크로스브라우징 고려 못함
- 처음 받은 과제로 할 걸 후회
- 모두 완료 못해 죄송합니다~
