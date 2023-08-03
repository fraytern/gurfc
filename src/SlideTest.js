import xmas from './Xmas7s.JPG';
import xmas1 from './Xmas7s1.JPG';
import bucknellGame from './bucknellgame.JPG';
import './slideshow.scss';

function SlideTest(){
return(
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10">
      <img src={xmas} class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item" data-bs-interval="10">
      <img src={xmas1} class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item" data-bs-interval="10">
      <img src={bucknellGame} class="d-block w-100" alt="..."></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
)};

export default SlideTest;