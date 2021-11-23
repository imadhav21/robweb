const video = document.getElementById("videogame");
const sources = document.getElementById("videosource");

document.querySelector("#load_game").addEventListener("click", function() {
    video.play();
    document.getElementById("start_game_p").classList.remove('remove');
    document.getElementById("start_game").classList.remove('remove');
    document.getElementById("load_game").classList.add('remove');
    document.getElementById("start_game_p_inverse").classList.add('remove');
});

document.querySelector("#start_game").addEventListener("click", function() {
    sources.src = "../media/11-22-2021_umich_rob201_p3_video_mario-kart_race.mp4";
    video.load();
    video.play();
    video.loop = false;
    document.getElementById("start_game").classList.add('remove');
});

video.addEventListener('ended', (event) =>{
    document.getElementById("reload_game").classList.remove('remove');
})

document.querySelector("#reload_game").addEventListener("click", function() {
    video.play();
});