// 캐릭터 데이터
const characters = {
  sky_wind: {
    name: '🪁 하늘바람 연장인',
    title: '하늘바람 연장인',
    image: 'image/sky_wind.png', // 이미지 경로
    desc: '전생에 바람을 읽는 재주가 있어 마을의 연을 가장 높이 날리던 장인. 소원을 바람에 실어 보내던 따뜻한 마음의 소유자.',
    programs: ['지평선 연날리기', '종이비거', '글라이더']
  },
  balance: {
    name: '🎪 균형의 달인',
    title: '균형의 달인',
    image: 'image/balance.png',
    desc: '작은 줄 위에서도 중심을 잃지 않던 명인. 인내심과 집중력으로 모두를 놀라게 했던 전설적인 인물.',
    programs: ['지평선 줄타기', '줄다리기 대회']
  },
  harvest: {
    name: '🌾 풍년의 수호자',
    title: '풍년의 수호자',
    image: 'image/harvest.png',
    desc: '밭마다 풍년을 기원하며 농사를 도왔던 전생. 풍요와 행운의 기운을 전하는 사람.',
    programs: ['싸리콩이 게임', '대박터트리기', '가래떡 대장정']
  },
  artist: {
    name: '🎨 들녘의 화공',
    title: '들녘의 화공',
    image: 'image/artist.png',
    desc: '지평선 너머로 펼쳐진 풍경을 화폭에 담던 예술가. 자연과 함께 살아온 감성인.',
    programs: ['농촌 풍경 그림그리기 대회']
  },
  musician: {
    name: '🎶 흥겨운 가락꾼',
    title: '흥겨운 가락꾼',
    image: 'image/musician.png',
    desc: '마을의 잔치마다 북과 장구로 흥을 더하던 전생. 즐거움을 나누는 사람.',
    programs: ['우리가락', '국악대전', '가요공연', '콘서트']
  },
  chef: {
    name: '🍙 마을 잔치 요리사',
    title: '마을 잔치 요리사',
    image: 'image/chef.png',
    desc: '모두가 함께 먹을 수 있는 음식을 나누던 전생. 정과 나눔을 소중히 여긴 인심 넉넉한 인물.',
    programs: ['김밥 만들기', '가족요리 경연대회', '가래떡 대장정']
  },
  guardian: {
    name: '🐉 벽골제의 지킴이',
    title: '벽골제의 지킴이',
    image: 'image/guardian.png',
    desc: '하늘과 땅을 잇는 벽골제의 물길을 보살피던 신성한 수호자. 공동체와 전통을 지키는 상징.',
    programs: ['벽골제 제향', '쌍룡놀이']
  },
  hero: {
    name: '💪 단결의 영웅',
    title: '단결의 영웅',
    image: 'image/hero.png',
    desc: '힘을 모아 함께하는 걸 가장 좋아하던 전생. 마을 줄다리기의 리더로 모두를 하나로 모았던 사람.',
    programs: ['전국 줄다리기 대회', '입석 줄다리기']
  }
};

// 질문 데이터
const questions = [
  {
    q: '200년 전, 마을에 처음 도착한 나. 가장 먼저 끌린 곳은?',
    options: [
      { text: '넓게 펼쳐진 들판, 바람이 불어오는 곳', scores: { sky_wind: 2, artist: 2, harvest: 1 } },
      { text: '사람들이 모여 웃고 떠드는 광장', scores: { musician: 2, hero: 2, balance: 1 } },
      { text: '고즈넉한 제방, 물이 흐르는 벽골제', scores: { guardian: 2, chef: 1, harvest: 1 } }
    ]
  },
  {
    q: '마을 축제 준비를 돕게 되었다. 나는 어떤 역할을 맡았을까?',
    options: [
      { text: '하늘 높이 연을 날리며 소원을 모으는 일', scores: { sky_wind: 2, artist: 1, harvest: 1 } },
      { text: '사람들과 함께 줄다리기를 이끄는 일', scores: { hero: 2, balance: 2, musician: 1 } },
      { text: '마을 잔치 음식을 준비하고 나누는 일', scores: { chef: 2, harvest: 1, guardian: 1 } }
    ]
  },
  {
    q: '갑자기 큰 비가 내려 마을에 문제가 생겼다. 나는?',
    options: [
      { text: '침착하게 물길을 살피며 해결책을 찾는다', scores: { guardian: 2, balance: 2, sky_wind: 1 } },
      { text: '모두를 모아 힘을 합쳐 위기를 넘긴다', scores: { hero: 2, musician: 1, balance: 1 } },
      { text: '피해 입은 이웃에게 따뜻한 음식을 나눈다', scores: { chef: 2, harvest: 2, artist: 1 } }
    ]
  },
  {
    q: '마을 사람들이 힘든 일을 겪고 있다. 나는 어떻게 위로할까?',
    options: [
      { text: '들판을 함께 걸으며 조용히 이야기를 들어준다', scores: { sky_wind: 2, artist: 2, harvest: 1 } },
      { text: '북과 장구를 울리며 흥겨운 가락으로 마음을 풀어준다', scores: { musician: 2, hero: 1, balance: 1 } },
      { text: '정성껏 음식을 만들어 함께 나눠 먹는다', scores: { chef: 2, guardian: 1, harvest: 1 } }
    ]
  },
  {
    q: '200년이 흘러 현대로 돌아왔다. 내가 마을에 남긴 것은?',
    options: [
      { text: '하늘을 나는 연처럼, 자유롭고 아름다운 정신', scores: { sky_wind: 2, artist: 2, balance: 1 } },
      { text: '함께 줄을 당기며 만든, 단결과 협동의 전통', scores: { hero: 2, musician: 2, guardian: 1 } },
      { text: '풍요로운 들판처럼, 나눔과 풍년의 마음', scores: { harvest: 2, chef: 2, guardian: 1 } }
    ]
  }
];

// 전역 변수
let currentQuestion = 0;
let scores = {};
let resultCharacter = null;

// DOM 요소
const screens = {
  intro: document.getElementById('intro-screen'),
  quiz: document.getElementById('quiz-screen'),
  result: document.getElementById('result-screen')
};

// 화면 전환 함수
function showScreen(screenName) {
  Object.values(screens).forEach(screen => screen.classList.remove('active'));
  screens[screenName].classList.add('active');
}

// 테스트 시작
document.getElementById('start-btn').addEventListener('click', () => {
  currentQuestion = 0;
  scores = {};
  showScreen('quiz');
  loadQuestion();
});

// 질문 로드
function loadQuestion() {
  const question = questions[currentQuestion];
  
  // 진행도 업데이트
  document.getElementById('progress-text').textContent = `질문 ${currentQuestion + 1} / ${questions.length}`;
  document.getElementById('progress-fill').style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
  
  // 질문 텍스트
  document.getElementById('question-text').textContent = question.q;
  
  // 선택지 생성
  const optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = '';
  
  question.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.className = 'option-btn';
    button.textContent = option.text;
    button.addEventListener('click', () => selectAnswer(option.scores));
    optionsContainer.appendChild(button);
  });
}

// 답변 선택
function selectAnswer(optionScores) {
  // 점수 추가
  Object.entries(optionScores).forEach(([char, point]) => {
    scores[char] = (scores[char] || 0) + point;
  });
  
  // 다음 질문 또는 결과 화면
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    loadQuestion();
  } else {
    showResult();
  }
}

// 결과 표시
function showResult() {
  // 최고 점수 캐릭터 찾기
  const maxScore = Math.max(...Object.values(scores));
  const resultKey = Object.keys(scores).find(key => scores[key] === maxScore);
  resultCharacter = characters[resultKey];
  
  // 결과 화면 업데이트
  document.getElementById('character-image').src = resultCharacter.image;
  document.getElementById('character-image').alt = resultCharacter.title;
  document.getElementById('character-name').textContent = resultCharacter.title;
  document.getElementById('character-desc').textContent = resultCharacter.desc;
  
  // 프로그램 목록
  const programsList = document.getElementById('programs-list');
  programsList.innerHTML = '';
  resultCharacter.programs.forEach(program => {
    const tag = document.createElement('span');
    tag.className = 'program-tag';
    tag.textContent = program;
    programsList.appendChild(tag);
  });
  
  showScreen('result');
}

// 다시 시작
document.getElementById('restart-btn').addEventListener('click', () => {
  showScreen('intro');
});

// 공유 모달
const shareModal = document.getElementById('share-modal');
const shareBtn = document.getElementById('share-btn');
const modalClose = document.querySelector('.modal-close');

shareBtn.addEventListener('click', () => {
  shareModal.classList.add('active');
});

modalClose.addEventListener('click', () => {
  shareModal.classList.remove('active');
});

shareModal.addEventListener('click', (e) => {
  if (e.target === shareModal) {
    shareModal.classList.remove('active');
  }
});

// 링크 복사
document.getElementById('copy-link-btn').addEventListener('click', () => {
  const url = window.location.href;
  
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(() => {
      showCopyMessage();
    });
  } else {
    // 구형 브라우저 대응
    const textarea = document.createElement('textarea');
    textarea.value = url;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showCopyMessage();
  }
});

function showCopyMessage() {
  const message = document.getElementById('copy-message');
  message.classList.add('show');
  setTimeout(() => {
    message.classList.remove('show');
  }, 2000);
}
