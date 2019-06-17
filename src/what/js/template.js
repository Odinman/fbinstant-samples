const template = `
<section page="1" class="hide">
<div class="title"><img src="./img/test.png" /></div>
<div class="subtitle"><img src="./img/title.png" /></div>
<div class="startbutton" onclick="goToPage(2)"><img src="./img/start.png" /></div>

</section>

<!-- q1 -->
<section class="hide" page="2">
<div class="question">
    <img src="./img/q/Q1-Q@2x.png" />
</div>
<ul class="list">
    <li data-result="1" data-type="left">
        <img src="./img/q/Q1-k1@2x.png" />
    </li>
    <li data-result="0">
        <img src="./img/q/Q1-k2@2x.png" />
    </li>
    <li data-result="0">
        <img src="./img/q/Q1-k3@2x.png" />
    </li>
    <li data-result="0">
        <img src="./img/q/Q1-k4@2x.png" />
    </li>
</ul>
</section>

<!-- q1-1 -->
<section class="hide" page="2-2">
<div class="question">
    <img src="./img/q/Q3-Q@2x.png" />
</div>
<ul class="list">
    <li data-result="0">
        <img src="./img/q/Q3-k1@2x.png" />
    </li>
    <li data-result="0">
        <img src="./img/q/Q3-k2@2x.png" />
    </li>
    <li data-result="1" data-type="left">
        <img src="./img/q/Q3-k3@2x.png" />
    </li>
    <li data-result="0">
        <img src="./img/q/Q3-k4@2x.png" />
    </li>
</ul>
</section>

<!-- q2 -->
<section class="hide" page="3">
<div class="question">
    <img src="./img/q/Q2-Q@2x.png" />
</div>
<ul class="list">
    <li data-result="0">
        <img src="./img/q/Q2-k1@2x.png" />
    </li>
    <li data-result="0">
        <img src="./img/q/Q2-k2@2x.png" />
    </li>
    <li data-result="0">
        <img src="./img/q/Q2-k3@2x.png" />
    </li>
    <li data-result="1" data-type="left">
        <img src="./img/q/Q2-k4@2x.png" />
    </li>
</ul>
</section>



<!-- q3 -->
<section class="hide" page="4">
<div class="question">
    <img src="./img/q/Q4-Q@2x.png" />
</div>
<ul class="list">
    <li data-result="0">
        <img src="./img/q/Q4-k1@2x.png" />
    </li>
    <li data-result="1" data-type="left">
        <img src="./img/q/Q4-k2@2x.png" />
    </li>
    <li data-result="0">
        <img src="./img/q/Q4-k3@2x.png" />
    </li>
    <li data-result="0">
        <img src="./img/q/Q4-k4@2x.png" />
    </li>
</ul>
</section>

<!-- q4 -->
<section class="hide" page="5">
<div class="question">
    <img src="./img/q/Q5-Q@2x.png" />
    <div class="timeout" id="time"></div>
</div>
<ul class="list2">
    <li>
        <img src="./img/q/Q5-1@2x.png" />
    </li>
    <li>
        <img src="./img/q/Q5-2@2x.png" />
    </li>
    <li>
        <img src="./img/q/Q5-3@2x.png" />
    </li>
    <li>
        <img src="./img/q/Q5-4@2x.png" />
    </li>
    <li>
        <img src="./img/q/Q5-5@2x.png" />
    </li>
    <li data-result="1" data-type="left">
        <img src="./img/q/Q5-6@2x.png" />
    </li>
    <li>
        <img src="./img/q/Q5-7@2x.png" />
    </li>
    <li>
        <img src="./img/q/Q5-8@2x.png" />
    </li>
    <li>
        <img src="./img/q/Q5-9@2x.png" />
    </li>
</ul>
</section>

<!-- q4 -->
<section class="hide" page="6">
<div class="question">
    <img src="./img/q/Q5-Q2@2x.png" />
    <div class="randompic" id="randompic"></div>
</div>
<ul id="list2" class="list2" data-type="left">
</ul>
</section>

<!-- q5 -->
<section class="hide" page="7">
<div class="question">
    <img src="./img/q/Q6-Q@2x.png" />
</div>
<ul class="list" data-type="right">
    <li>
        <img src="./img/q/Q6-1@2x.png" />
    </li>
    <li>
        <img src="./img/q/Q6-2@2x.png" />
    </li>
    <li data-result="1" data-type="right">
        <img src="./img/q/Q6-3@2x.png" />
    </li>
    <li>
        <img src="./img/q/Q6-4@2x.png" />
    </li>
    <li>
        <img src="./img/q/Q6-5@2x.png" />
    </li>
</ul>
</section>

<!-- q5-2 -->
<section class="hide" page="7-2">
<div class="question">
    <img src="./img/q/Q7-Q@2x.png" />
</div>
<ul class="list" data-type="right">
    <li>
        <img src="./img/q/Q7-1@2x.png" />
    </li>
    <li>
        <img src="./img/q/Q7-2@2x.png" />
    </li>
    <li>
        <img src="./img/q/Q7-3@2x.png" />
    </li>
    <li data-result="1" data-type="right">
        <img src="./img/q/Q7-4@2x.png" />
    </li>
    <li>
        <img src="./img/q/Q7-5@2x.png" />
    </li>
</ul>
</section>

<!-- q6 -->
<section class="hide" page="8">
<div class="question">
    <img src="./img/q/Q8-Q@2x.png" />
</div>
<ul class="list3" data-type="right">
    <li>
        <img src="./img/q/Q8-1@2x.png" />
    </li>
    <li>
        <img src="./img/q/Q8-2@2x.png" />
    </li>
    <li data-result="1" data-type="right">
        <img src="./img/q/Q8-3@2x.png" />
    </li>
    <li>
        <img src="./img/q/Q8-4@2x.png" />
    </li>
</ul>
</section>

<!-- q7 -->
<section class="hide" page="9">
<div class="question">
    <img src="./img/q/Q9-Q@2x.png" />
    <div class="videocircle"></div>
    <div class="videotime" id="videotime"></div>
    <div id="videoplay"></div>
    <audio height="0" width="0" id="music" src="./media/game.mp3" preload="auto"></audio>
</div>
<ul class="list" data-type="right">
    <li data-result="1" data-type="right">
        <img src="./img/q/Q9-1@2x.png" />
    </li>
    <li>
        <img src="./img/q/Q9-2@2x.png" />
    </li>
    <li>
        <img src="./img/q/Q9-3@2x.png" />
    </li>
    <li>
        <img src="./img/q/Q9-4@2x.png" />
    </li>
</ul>
</section>

<!-- q8 -->
<section class="hide" page="10">
<div class="question">
    <img src="./img/q/Q10-Q@2x.png" />
</div>
<ul class="list" data-type="right">
    <li>
        <img src="./img/q/Q10-1@2x.png" />
    </li>
    <li data-result="1" data-type="right">
        <img src="./img/q/Q10-2@2x.png" />
    </li>
    <li>
        <img src="./img/q/Q10-3@2x.png" />
    </li>
    <li>
        <img src="./img/q/Q10-4@2x.png" />
    </li>
</ul>
</section>

<!-- q8 -->
<section class="hide" page="10-2">
<div class="question q8">
    <img src="./img/q/Q11-Q@2x.png" />
</div>
<ul class="list" data-type="right">
    <li>
        <img src="./img/q/Q11-1@2x.png" />
    </li>
    <li>
        <img src="./img/q/Q11-2@2x.png" />
    </li>
    <li data-result="1" data-type="right">
        <img src="./img/q/Q11-3@2x.png" />
    </li>
    <li>
        <img src="./img/q/Q11-4@2x.png" />
    </li>
</ul>
</section>

<!-- q9 -->
<section class="hide" page="11">
<div class="question q8">
    <img src="./img/q/Q12-Q@2x.png" />
</div>
<ul class="list" data-type="right">
    <li data-result="1" data-type="right">
        <img src="./img/q/Q12-1@2x.png" />
    </li>
    <li>
        <img src="./img/q/Q12-2@2x.png" />
    </li>
    <li data-result="1" data-type="right">
        <img src="./img/q/Q12-3@2x.png" />
    </li>
    <li>
        <img src="./img/q/Q12-4@2x.png" />
    </li>
</ul>
</section>

<!-- q9 -->
<section class="hide" page="11-2">
<div class="question">
    <img src="./img/q/Q13-Q@2x.png" />
</div>
<ul class="list" data-type="right">
    <li data-result="1" data-type="right">
        <img src="./img/q/Q13-1@2x.png" />
    </li>
    <li data-result="1" data-type="right">
        <img src="./img/q/Q13-2@2x.png" />
    </li>
    <li>
        <img src="./img/q/Q13-3@2x.png" />
    </li>
    <li>
        <img src="./img/q/Q13-4@2x.png" />
    </li>
</ul>
</section>

<section class="hide" page="12">
<div class="result">
    The same proportion among mankind as your brain: <span id="rate"></span>%
</div>
<div class="brain">
    <div class="left">
        <div class="person">
            <img id="leftBrainPic" />
        </div>
    </div>
    <div class="right">
        <div class="person">
            <img id="rightBrainPic" />
        </div>
    </div>
</div>
<div class="conclusion">
    <ul id="desc">

    </ul>
</div>

<div class="bottomButton">
    <div class="button again">
        <img src="./img/Again@2x.png" />
    </div>
    <div class="button share" id="share">
        <img src="./img/Share@2x.png" />
    </div>
</div>
</section>



<div class="text"><span>Based on the Stanford Binet test mode</span></div>
`