const apiKey = '2d4e2b93'; // 主要key 2d4e2b93 ;備用key bd7bed2b
const categories = {
  '首頁': [],
  '科幻': [
    'Inception', 'Interstellar', 'The Matrix', 'The Matrix Resurrections', 'Tenet',
    'Blade Runner', 'Blade Runner 2049', 'Dune', 'Dune: Part Two', 'Arrival',
    '2001: A Space Odyssey', 'Ad Astra', 'Gravity', 'The Martian', 'Edge of Tomorrow',
    'Ready Player One', 'Minority Report', 'Oblivion', 'Elysium', 'District 9',
    'Ex Machina', 'Annihilation', 'The Fifth Element', 'Ghost in the Shell', 'I, Robot',
    'AI: Artificial Intelligence', 'Her', 'Looper', 'Snowpiercer', 'Passengers',
    'Sunshine', 'Contact', 'War of the Worlds', 'Independence Day', 'Star Trek',
    'Star Trek Into Darkness', 'Star Trek Beyond', 'Avatar', 'Avatar: The Way of Water',
    'Guardians of the Galaxy', 'Ant-Man and the Wasp: Quantumania', 'The Tomorrow War', 'Ender\'s Game',
    'Love and Monsters', 'Chaos Walking', 'Moon', 'The Prestige', 'Dark City', 'The Island'
  ],
  '動作': [
    'Mad Max: Fury Road', 'John Wick', 'John Wick: Chapter 2', 'John Wick: Chapter 3', 'John Wick: Chapter 4',
    'The Dark Knight', 'Inception', 'The Matrix', 'The Matrix Reloaded', 'The Matrix Revolutions',
    'Tenet', 'Interstellar', 'The Batman', 'Avengers: Endgame', 'Avengers: Infinity War',
    'Captain America: Civil War', 'Iron Man', 'Iron Man 2', 'Iron Man 3', 'Thor: Ragnarok',
    'Guardians of the Galaxy', 'Black Panther', 'Doctor Strange', 'Shang-Chi', 'The Marvels',
    'The Equalizer', 'The Equalizer 2', 'The Equalizer 3', 'Taken', 'Taken 2', 'Taken 3',
    'Skyfall', 'No Time to Die', 'Casino Royale', 'Quantum of Solace', 'Spectre',
    'Fast & Furious', 'Furious 7', 'Fast Five', 'Hobbs & Shaw', 'Mission: Impossible – Fallout',
    'Mission: Impossible – Dead Reckoning', 'Top Gun: Maverick', 'Edge of Tomorrow',
    'Transformers', 'Transformers: Dark of the Moon', 'Bumblebee', 'The Bourne Identity', 'The Bourne Ultimatum'
  ],
  '動畫': [
    'Spirited Away', 'Howl\'s Moving Castle', 'My Neighbor Totoro',
    'Kiki\'s Delivery Service', 'Ponyo', 'The Wind Rises', 'Weathering with You', 'The Tale of the Princess Kaguya',
    'Akira', 'Ghost in the Shell', 'Nausicaä of the Valley of the Wind', 'Grave of the Fireflies', 'Paprika',
    'The Garden of Words', '5 Centimeters per Second', 'Perfect Blue', 'Tokyo Godfathers',
    'The Boy and the Beast', 'Summer Wars', 'Wolf Children', 'The Girl Who Leapt Through Time',
    'In This Corner of the World', 'Redline', 'The Secret World of Arrietty', 'When Marnie Was There', 'Big Hero 6',
    'Zootopia', 'Frozen', 'Frozen II', 'Encanto', 'Tangled', 'Moana', 'Raya and the Last Dragon', 'Luca', 'Turning Red',
    'Coco', 'Soul', 'Inside Out', 'Brave', 'Finding Nemo', 'Finding Dory', 'Wall-E', 'Up', 'Toy Story', 'Toy Story 2',
    'Toy Story 3', 'Toy Story 4'
  ],
  '愛情': [
    'The Notebook', 'La La Land', 'Pride and Prejudice', 'Titanic', 'Before Sunrise',
    'Before Sunset', 'Before Midnight', '500 Days of Summer', 'The Fault in Our Stars', 'Call Me by Your Name',
    'Eternal Sunshine of the Spotless Mind', 'Notting Hill', 'Love Actually', 'The Holiday', 'Me Before You',
    'To All the Boys I\'ve Loved Before', 'The Vow', 'Dear John', 'Safe Haven', 'The Lucky One',
    'A Walk to Remember', 'The Age of Adaline', 'About Time', 'Brooklyn', 'The Spectacular Now',
    'Blue Valentine', 'Carol', 'Her', 'The Theory of Everything', 'Midnight in Paris',
    'One Day', 'Crazy Rich Asians', 'Silver Linings Playbook', 'Begin Again', 'Emma',
    'Little Women', 'Anna Karenina', 'The Time Traveler\'s Wife', 'Jane Eyre', 'Becoming Jane',
    'The Great Gatsby', 'Romeo + Juliet', 'Letters to Juliet', 'Love, Rosie', 'The Longest Ride',
    'Water for Elephants', 'Endless Love', 'The Best of Me', 'If I Stay', 'The Last Song'
  ],
  '喜劇': [
    'Superbad', 'The Hangover', 'The Hangover Part II', 'The Hangover Part III', 'Step Brothers',
    'Anchorman', 'Anchorman 2', 'Dumb and Dumber', 'Tropic Thunder', 'Bridesmaids',
    'Mean Girls', 'Clueless', 'Pitch Perfect', '21 Jump Street', '22 Jump Street',
    'Zombieland', 'Zombieland: Double Tap', 'Deadpool', 'Deadpool 2', 'Free Guy',
    'The Nice Guys', 'Game Night', 'Crazy Rich Asians', 'The Grand Budapest Hotel', 'The French Dispatch',
    'The Intern', 'The Proposal', 'Yes Man', 'Liar Liar', 'The Mask',
    'Shaun of the Dead', 'Hot Fuzz', 'Scott Pilgrim vs. The World', 'Palm Springs', 'Eurovision Song Contest',
    'Night at the Museum', 'Night at the Museum: Battle of the Smithsonian', 'School of Rock', 'The 40-Year-Old Virgin',
    'Forgetting Sarah Marshall', 'Knives Out', 'Glass Onion', 'Juno', 'Napoleon Dynamite',
    'Ferris Bueller\'s Day Off', 'The Breakfast Club', 'Super Troopers', 'White Chicks', 'Get Smart'
  ],
  '驚悚': [
    'The Conjuring', 'The Conjuring 2', 'The Conjuring: The Devil Made Me Do It', 'Annabelle', 'Annabelle: Creation',
    'Annabelle Comes Home', 'The Nun', 'The Nun II', 'Insidious', 'Insidious: Chapter 2',
    'Insidious: The Red Door', 'Sinister', 'The Exorcist', 'The Exorcist: Believer', 'Hereditary',
    'Midsommar', 'The Babadook', 'The Witch', 'It Follows', 'The Ring',
    'The Grudge', 'It', 'It Chapter Two', 'A Quiet Place', 'A Quiet Place Part II',
    'The Boogeyman', 'Smile', 'Barbarian', 'X', 'Pearl',
    'Texas Chainsaw Massacre', 'Halloween', 'Halloween Kills', 'Halloween Ends', 'Scream',
    'Scream VI', 'Scream 4', 'The Cabin in the Woods', 'Don\'t Breathe', 'Us',
    'Get Out', 'Nope', 'The Visit', 'The Others', 'The Mist',
    '1408', 'The Shining', 'Doctor Sleep', 'Final Destination', 'The Orphan'
  ]
    };
  
const allMovies = [...new Set(Object.values(categories).flat())];


const feedEl = document.getElementById('feed');
const spinnerEl = document.getElementById('spinner');
const searchInput = document.getElementById('searchInput');

let searchQuery = '';
let currentPage = 1;
let totalPages = 1;
let isLoading = false;
let currentMovies = []; // 儲存目前類別的所有電影資料

function resetSearch() {
  searchQuery = '';
  searchInput.value = '';
  currentPage = 1;
  totalPages = 1;
}

function showSpinner() {
  spinnerEl.style.display = 'block';
}

function hideSpinner() {
  const spinner = document.getElementById('spinner');
  if (spinner) {
    spinner.style.display = 'none';
  }
}

// 主要：渲染分類用，並儲存資料供排序
async function renderCategory(cat) {
  feedEl.innerHTML = '';
  showSpinner();
  currentMovies = [];

  const movieDataList = await Promise.all(
    categories[cat].map(title => fetchMovieData(title))
  );

  currentMovies = movieDataList.filter(movie => movie);
  renderMovies(currentMovies);
  hideSpinner();
}

// 獲取電影資料但不渲染（提供排序使用）
async function fetchMovieData(title) {
  try {
    const res = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(title)}&plot=short`);
    const data = await res.json();
    return data.Response === 'True' ? data : null;
  } catch (e) {
    console.error(e);
    return null;
  }
}

// 統一渲染所有卡片
function renderMovies(movies) {
  feedEl.innerHTML = '';
  movies.forEach(data => appendCard(data));
}

// 搜尋
async function searchMovies(query, page = 1) {
  if (isLoading) return;
  isLoading = true;
  showSpinner();
  try {
    const res = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(query)}&page=${page}`);
    const data = await res.json();
    if (data.Response === 'True') {
      const resultArray = []; // 🔸補上宣告

      for (const item of data.Search.slice(0, 3)) {
        await new Promise(resolve => setTimeout(resolve, 500));
        const resDetail = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${item.imdbID}&plot=short`);
        const detail = await resDetail.json();
        if (detail.Response === 'True') {
          resultArray.push(detail); // 收集資料
        }
      }

      currentMovies = resultArray; // 儲存到全域變數
      renderMovies(currentMovies); // 渲染畫面

      const total = parseInt(data.totalResults, 10);
      totalPages = Math.ceil(total / 10);
      currentPage = page;
    } else {
      feedEl.innerHTML = `<p style="color:red">${data.Error}</p>`;
    }
  } catch (e) {
    console.error(e);
  }
  hideSpinner();
  isLoading = false;
}


// 搜尋欄事件
searchInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    const q = searchInput.value.trim();
    if (!q) return;
    resetSearch();
    feedEl.innerHTML = '';
    searchQuery = q;
    searchMovies(q, 1);
  }
});

// 滾動載入搜尋結果
window.addEventListener('scroll', () => {
  if (searchQuery && !isLoading && currentPage < totalPages) {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 50) {
      searchMovies(searchQuery, currentPage + 1);
    }
  }
});

// 隨機推薦（首頁）
function renderHome() {
  feedEl.innerHTML = '';
  const randomCount = 30;
  const shuffled = allMovies.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, randomCount);
  showSpinner();
  Promise.all(selected.map(title => fetchCategoryMovie(title, '推薦電影'))).then(hideSpinner);
}

// fetchCategoryMovie 支援首頁快速渲染
async function fetchCategoryMovie(title, category) {
  try {
    const res = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(title)}&plot=short`);
    const data = await res.json();
    if (data.Response === 'True') appendCard(data, category);
  } catch (e) {
    console.error(e);
  }
}

// 詳細卡片關閉
document.getElementById('closeDetail').addEventListener('click', function () {
  document.getElementById('movieDetail').style.display = 'none';
});

// 顯示詳細資料
function showMovieDetail(title, plot, posterUrl, director, actors, rating) {
  document.getElementById('movieDetail').style.display = 'flex';
  document.getElementById('detailTitle').innerText = title;
  document.getElementById('detailPlot').innerText = plot;
  document.getElementById('detailPoster').src = posterUrl;
  document.getElementById('detailDirector').innerText = `導演: ${director}`;
  document.getElementById('detailActors').innerText = `演員: ${actors}`;
  document.getElementById('detailRating').innerText = `⭐ IMDb 評分: ${rating ?? 'N/A'}`;
}

// 渲染卡片並綁定點擊事件
function appendCard(data, category = '') {
  const card = document.createElement('div');
  card.className = 'movie-card';
  card.innerHTML = `
    <img src="${data.Poster !== 'N/A' ? data.Poster : 'https://via.placeholder.com/600x900?text=No+Image'}" alt="${data.Title}">
    <div class="info">
      ${category ? `<div class="category-tag">@${category}</div>` : ''}
      <div class="title">${data.Title}</div>
      <div class="year">${data.Year}</div>
      <div class="rating">⭐ IMDb: ${data.imdbRating ?? 'N/A'}</div>
      <div class="plot">${data.Plot && data.Plot !== 'N/A' ? data.Plot : '（無電影簡介）'}</div>
    </div>
  `;
  card.addEventListener('click', () => {
    showMovieDetail(data.Title, data.Plot, data.Poster, data.Director, data.Actors, data.imdbRating);
  });
  feedEl.appendChild(card);
}

// 新增排序選單邏輯
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('searchInput');
  input.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
      const q = input.value.trim();
      if (!q) return;
      console.log('搜尋:', q);
      searchMovies(q);
    }
  });

  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      const sortValue = sortSelect.value;
      const sorted = [...currentMovies]; // 確保 currentMovies 是一個已渲染過的電影陣列

      if (sortValue === 'title') {
        sorted.sort((a, b) => a.Title.localeCompare(b.Title));
      } else if (sortValue === 'rating') {
        sorted.sort((a, b) => parseFloat(b.imdbRating || 0) - parseFloat(a.imdbRating || 0));
      } else if (sortValue === 'year') {
        sorted.sort((a, b) => parseInt(b.Year || 0) - parseInt(a.Year || 0)); // 最新在前
      }

      renderMovies(sorted); // 重新渲染畫面
    });
  }
});


