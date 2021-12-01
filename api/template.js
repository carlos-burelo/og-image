function getHtml(parsedReq) {
  const { title, desc } = parsedReq;
  return `<!DOCTYPE html>
      <html>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <body>
      ${styles()}
        <main>
        <div class="content">
            <div class="data">
                ${svg}
                <h1>${title || "Empty title"}</h1>
                <p>
                ${desc || lorem}
                </p>
            </div>
            <div class="image">
                <img src="https://carlosburelo.tk/_next/image?url=%2Fimages%2Fuser.webp&w=640&q=75" alt="">
            </div>
        </div>
        <span>@CarlosBurelo</span>
    </main>
    <div class="line"></div>
</body>
</html>`;
}

const svg = `<svg height="80" width="80" viewBox="0 0 600 603" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd"
        d="M263.569 2.43321C212.016 8.25343 158.216 29.9471 115.474 62.1469C66.103 99.3422 27.7323 155.919 10.4921 216.938C2.16555 246.408 0.0576769 263.059 0.00189199 299.812C-0.0366261 324.801 0.505284 335.869 2.33556 347.5C14.5578 425.147 55.7629 494.273 117.59 540.846L131.375 551.23L132.924 546.057C133.775 543.21 139.96 523.549 146.667 502.364C153.373 481.179 161.461 455.57 164.639 445.454L170.417 427.062L162.037 416.081C143.172 391.356 131.228 362.474 126.837 330.965C124.694 315.595 124.997 282.197 127.417 266.958C131.293 242.562 140.918 216.869 153.424 197.539C178.154 159.318 212.724 135.791 262.083 123.597L266.575 122.486L285.639 62.0579C296.125 28.8208 304.713 1.47822 304.724 1.29626C304.771 0.517927 272.682 1.40517 263.569 2.43321ZM401.078 17.1431C398.735 23.8373 365.842 129.106 365.842 129.907C365.842 130.461 370.772 133.607 376.799 136.899C392.848 145.664 406.11 155.403 419.268 168.086L430.916 179.315L437.893 172.86C441.73 169.31 461.458 150.264 481.734 130.537L518.597 94.6682L507.634 83.5869C482.364 58.0454 450.752 36.0994 419.634 22.4958C403.775 15.5639 401.827 15.0021 401.078 17.1431ZM438.533 415.75C431.92 424.419 411.405 443.506 399.76 451.82C380.241 465.758 362.168 473.627 337.949 478.73C322.622 481.959 280.806 481.907 266.36 478.639C260.954 477.418 256.38 476.577 256.194 476.772C256.009 476.969 253.163 485.795 249.869 496.387C246.576 506.98 238.535 532.532 232.001 553.168L220.12 590.69L224.911 591.943C249.476 598.364 287.978 602.075 316.034 600.723C398.89 596.732 462.814 568.379 517.088 511.545C525.216 503.032 531.868 495.664 531.868 495.173C531.868 493.898 444.34 411.382 442.987 411.382C442.371 411.382 440.366 413.347 438.533 415.75Z"
        fill="url(#paint0_linear)" />
    <defs>
        <linearGradient id="paint0_linear" x1="531.285" y1="0.999985" x2="2.19709e-05" y2="601.352"
            gradientUnits="userSpaceOnUse">
            <stop stop-color="#00dfd8" />
            <stop offset="1" stop-color="#007cf0" />
        </linearGradient>
    </defs>
</svg>`;

const lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quos aperiam, ex, temporibus,
incidunt adipisci fugiat numquam quod iusto dolores ea? Molestias similique ullam, tenetur ea fugit
perferendis rerum unde.`;

const styles = () => {
  return `<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
}
body {
  width: 1200px;l
  height: 600px;
  overflow: hidden;
  --primary: #3f7cee;
  --title: #2f363d;
  --text: #6e7681;
}
main {
  position: relative;
}
.content {
  height: 100%;
  position: relative;
  padding: 60px;
  display: flex;
}
.data {
  width: 75%;
}
h1,
p {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.02;
}
h1 {
  color: var(--title);
  font-size: 70px;
  font-weight: 700;
  -webkit-line-clamp: 2;
  margin-bottom: 30px;
}
p {
  color: var(--text);
  font-size: 30px;
  line-height: 1.5;
  -webkit-line-clamp: 3;
}
svg {
  margin-bottom: 20px;
}
span {
  position: absolute;
  color: var(--primary);
  bottom: 0;
  right: 0;
  font-weight: 700;
  font-size: 30px;
  margin-right: 60px;
  margin-bottom: 20px;
}
.line {
  background-color: var(--primary);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 1200px;
  height: 35px;
}
.image {
  width: 35%;
  height: calc(100% - 30px);
}
.image img {
  width: 100%;
  height: calc(100% - 30px);
}
</style>`;
};

module.exports = {
  getHtml,
};
