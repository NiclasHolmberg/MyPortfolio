let viewSkills = document.getElementById('skills');
let viewExperience = document.getElementById('experience')
let viewEducation = document.getElementById('education')

let skillTab = document.getElementById('skillTab');
let expTab = document.getElementById('expTab');
let educationTab = document.getElementById('educationTab');

let openSkills = function () {
    viewSkills.style.display = 'block';
    viewExperience.style.display = 'none';
    viewEducation.style.display = 'none';
};

let openExperience = function () {
    viewSkills.style.display = 'none';
    viewExperience.style.display = 'block';
    viewEducation.style.display = 'none';
};

let openEducation = function () {
    viewSkills.style.display = 'none';
    viewExperience.style.display = 'none';
    viewEducation.style.display = 'block';
};

skillTab.addEventListener('click', openSkills);
expTab.addEventListener('click', openExperience);
educationTab.addEventListener('click', openEducation);