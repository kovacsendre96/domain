

function headerAnim() {
    const headerText = document.querySelectorAll('.header__text');
    const img = document.querySelector('.header__img');
    let time = 500;
    for (let i = 0; i < headerText.length; i++) {
        setTimeout(() => {
            headerText[i].style.visibility = 'visible';
            headerText[i].style.transform = 'translateY(0%)';
        }, time)
        time += 600;
    }
    setTimeout(() => {
        img.style.transform = ' translateX(0%)';
        img.style.visibility = 'visible';
    }, 2000)
}




headerAnim();








window.addEventListener('scroll', () => {
    let screenPosition = window.innerHeight;

    function sectionTitleAnim() {

        let sectionTitle = document.querySelectorAll('.section-title');
        let sectionTitleText = document.querySelectorAll('.section-title__text');

        for (let i = 0; i < sectionTitle.length; i++) {
            let contentPosition = sectionTitle[i].getBoundingClientRect().top/0.9;


            if (contentPosition < screenPosition) {
                sectionTitle[i].classList.add('active');
                sectionTitleText[i].classList.add('active');
            }
            else {
                sectionTitle[i].classList.remove('active');
                sectionTitleText[i].classList.remove('active');
            }
        };
    }
    function timeLineAnim() {

        const clock = document.querySelectorAll('.clock');
        const timeLineText = document.querySelectorAll('.time-line__text');
        const timeLineTtitle = document.querySelectorAll('.time-line__title');
        let time = 500;
        for (let i = 0; i < clock.length; i++) {
            let contentPosition = clock[i].getBoundingClientRect().top;
            if (contentPosition < screenPosition) {
                setTimeout(() => {
                    clock[i].classList.add('active');
                    timeLineText[i].classList.add('active');
                    timeLineTtitle[i].classList.add('active');

                }, time)
                time += 500;
            }
            /*    else {
                   clock[i].classList.remove('active');
                   timeLineText[i].classList.remove('active');
                   timeLineTtitle[i].classList.remove('active');
               } */
        }
    }

    function skillsAnim() {

        const skills = document.querySelector('.slider');
        let contentPosition = skills.getBoundingClientRect().top;
        if (contentPosition < screenPosition) {
            setTimeout(() => {
                skills.classList.add('active');
            }, 500)
        }
    }

    function otherSkillsAnim() {

        const otherSkillsText = document.querySelectorAll('.other-skills__text');
        const otherSkillsCircle = document.querySelectorAll('.other-skills__circle');

        for (let i = 0; i < otherSkillsText.length; i++) {
            let contentPosition = otherSkillsText[i].getBoundingClientRect().top;
            if (contentPosition < screenPosition) {
                setTimeout(() => {
                    otherSkillsText[i].classList.add('active');
                }, 500)
            }
        }

        for (let i = 0; i < otherSkillsCircle.length; i++) {
            let contentPosition = otherSkillsCircle[i].getBoundingClientRect().top;
            if (contentPosition < screenPosition) {
                setTimeout(() => {
                    otherSkillsCircle[i].classList.add('active');
                }, 500)
            }
        }

    }
    otherSkillsAnim();
    skillsAnim();
    timeLineAnim()
    sectionTitleAnim()
});

