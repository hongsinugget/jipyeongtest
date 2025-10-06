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
    q: '200년 전, 마을에 처음 도착한 나, 제일 먼저 한 일은?',
    options: [
      { text: '음… 이 마을 풍경과 공기를 좀 느껴봐야지', scores: { sky_wind: 2, artist: 2, harvest: 1 } },
      { text: '와, 잔치 한판 벌어졌네! 바로 달려가야지', scores: { musician: 2, hero: 2, balance: 1 } },
      { text: '누구한테 배워서 돈이나 벌어볼까?', scores: { chef: 2, harvest: 1, guardian: 1 } }
    ]
  },
  {
    q: '마을 사람들이 모여있는 광장에서 나는?',
    options: [
      { text: '하늘 높이 연을 날리며 소원을 빌어야지!', scores: { sky_wind: 2, artist: 1, harvest: 1 } },
      { text: '오~ 다 같이 춤추고 북 치면서 신나게 놀아야지', scores: { musician: 2, hero: 1, balance: 1 } },
      { text: '오늘은 맛있는 걸 만들어서 모두에게 나눠주자', scores: { chef: 2, harvest: 1, guardian: 1 } }
    ]
  },
  {
    q: '전생 내 하루를 마치며 나는?',
    options: [
      { text: '오늘은 들판을 걷고 구름을 느꼈다, 평화로운 하루', scores: { sky_wind: 2, artist: 2, harvest: 1 } },
      { text: '오늘 마을 사람들이 다 같이 웃었네, 흥 폭발 성공!', scores: { musician: 2, hero: 1, balance: 1 } },
      { text: '오늘 만든 음식이 모두에게 행복을 줬다, 마음이 풍족해', scores: { chef: 2, harvest: 1, guardian: 1 } }
    ]
  },
  {
    q: '마을 축제가 한창, 나는 무엇을 가장 신나게 즐겼을까?',
    options: [
      { text: '하늘 높이 연을 띄우며 바람과 함께 날아가는 기분!', scores: { sky_wind: 2, artist: 1, harvest: 1 } },
      { text: '모두와 함께 음악과 춤으로 흥을 폭발시키기!', scores: { musician: 2, hero: 2, balance: 1 } },
      { text: '맛있는 음식을 만들고 나누며 모두를 행복하게!', scores: { chef: 2, harvest: 1, guardian: 1 } }
    ]
  },
  {
    q: '현대로 돌아온 나, 내가 남긴 것은?',
    options: [
      { text: '하늘을 올려다보며 남긴 그림과 기록', scores: { sky_wind: 2, artist: 2, harvest: 1 } },
      { text: '함께 즐기던 흥겨운 추억과 웃음', scores: { musician: 2, hero: 2, balance: 1 } },
      { text: '맛있는 음식과 풍요로운 나눔의 흔적', scores: { chef: 2, harvest: 1, guardian: 1 } }
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

// 이미지로 저장
document.getElementById('download-image-btn').addEventListener('click', () => {
  generateResultImage();
});

function generateResultImage() {
  const canvas = document.getElementById('result-canvas');
  const ctx = canvas.getContext('2d');
  
  // 캔버스 크기 설정 (Instagram 정사각형 비율)
  canvas.width = 1080;
  canvas.height = 1080;
  
  // 배경 그라데이션
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, '#fef3c7');
  gradient.addColorStop(0.5, '#fed7aa');
  gradient.addColorStop(1, '#fef08a');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // 흰색 카드 배경
  ctx.fillStyle = 'white';
  ctx.roundRect(80, 150, 920, 780, 40);
  ctx.fill();
  
  // 제목
  ctx.fillStyle = '#78350f';
  ctx.font = 'bold 48px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('🌾 지평선 축제 전생테스트 🌾', canvas.width / 2, 100);
  
  // 결과 타이틀
  ctx.font = 'bold 40px sans-serif';
  ctx.fillText('나의 전생은...', canvas.width / 2, 240);
  
  // 캐릭터 이미지 로드 및 그리기
  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.onload = function() {
    // 이미지를 원형으로 자르기
    ctx.save();
    ctx.beginPath();
    ctx.arc(canvas.width / 2, 380, 100, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();
    ctx.drawImage(img, canvas.width / 2 - 100, 280, 200, 200);
    ctx.restore();
    
    // 캐릭터 이름
    ctx.fillStyle = '#92400e';
    ctx.font = 'bold 52px sans-serif';
    ctx.fillText(resultCharacter.title, canvas.width / 2, 530);
    
    // 설명 (여러 줄)
    ctx.fillStyle = '#374151';
    ctx.font = '28px sans-serif';
    const desc = resultCharacter.desc;
    const maxWidth = 800;
    const lineHeight = 40;
    const words = desc.split(' ');
    let line = '';
    let y = 600;
    
    for (let i = 0; i < words.length; i++) {
      const testLine = line + words[i] + ' ';
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && i > 0) {
        ctx.fillText(line, canvas.width / 2, y);
        line = words[i] + ' ';
        y += lineHeight;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, canvas.width / 2, y);
    
    // 프로그램 태그
    ctx.fillStyle = '#d97706';
    ctx.font = 'bold 32px sans-serif';
    ctx.fillText('🎪 추천 프로그램', canvas.width / 2, y + 80);
    
    // 프로그램 목록
    ctx.fillStyle = '#92400e';
    ctx.font = '26px sans-serif';
    const programsText = resultCharacter.programs.join(' • ');
    ctx.fillText(programsText, canvas.width / 2, y + 130);
    
    // URL
    ctx.fillStyle = '#6b7280';
    ctx.font = '24px sans-serif';
    ctx.fillText('festival.gimje.go.kr', canvas.width / 2, 1000);
    
    // 이미지 다운로드
    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `지평선축제_전생테스트_${resultCharacter.title}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
  };
  
  img.onerror = function() {
    // 이미지 로드 실패시 텍스트로 대체
    ctx.font = '120px sans-serif';
    ctx.fillText(resultCharacter.name.split(' ')[0], canvas.width / 2, 400);
    
    // 캐릭터 이름
    ctx.fillStyle = '#92400e';
    ctx.font = 'bold 52px sans-serif';
    ctx.fillText(resultCharacter.title, canvas.width / 2, 500);
    
    // 나머지 그리기 계속...
    continueDrawing(ctx);
  };
  
  img.src = resultCharacter.image;
}

function continueDrawing(ctx) {
  // 설명 (여러 줄)
  ctx.fillStyle = '#374151';
  ctx.font = '28px sans-serif';
  const desc = resultCharacter.desc;
  const maxWidth = 800;
  const lineHeight = 40;
  const words = desc.split(' ');
  let line = '';
  let y = 580;
  
  for (let i = 0; i < words.length; i++) {
    const testLine = line + words[i] + ' ';
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && i > 0) {
      ctx.fillText(line, canvas.width / 2, y);
      line = words[i] + ' ';
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, canvas.width / 2, y);
  
  // 프로그램 태그
  ctx.fillStyle = '#d97706';
  ctx.font = 'bold 32px sans-serif';
  ctx.fillText('🎪 추천 프로그램', canvas.width / 2, y + 80);
  
  // 프로그램 목록
  ctx.fillStyle = '#92400e';
  ctx.font = '26px sans-serif';
  const programsText = resultCharacter.programs.join(' • ');
  ctx.fillText(programsText, canvas.width / 2, y + 130);
  
  // URL
  ctx.fillStyle = '#6b7280';
  ctx.font = '24px sans-serif';
  ctx.fillText('festival.gimje.go.kr', canvas.width / 2, 1000);
  
  // 이미지 다운로드
  const canvas = document.getElementById('result-canvas');
  canvas.toBlob((blob) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `지평선축제_전생테스트_${resultCharacter.title}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });
}

// roundRect polyfill for older browsers
if (!CanvasRenderingContext2D.prototype.roundRect) {
  CanvasRenderingContext2D.prototype.roundRect = function(x, y, width, height, radius) {
    this.beginPath();
    this.moveTo(x + radius, y);
    this.lineTo(x + width - radius, y);
    this.quadraticCurveTo(x + width, y, x + width, y + radius);
    this.lineTo(x + width, y + height - radius);
    this.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    this.lineTo(x + radius, y + height);
    this.quadraticCurveTo(x, y + height, x, y + height - radius);
    this.lineTo(x, y + radius);
    this.quadraticCurveTo(x, y, x + radius, y);
    this.closePath();
  };
}