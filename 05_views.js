/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  text: `Thank you for participating in our study. This study consists of <b>3 parts</b>.
    Each part starts with instructions. Please <strong>read each block's instructions very carefully</strong>.
    After the instructions there will be a few practice rounds before the main part of each block begins.
    It is very important for this study that you <strong>put your undivided attention to the task</strong>.
    The study will take at most 10 minutes, so please switch off messaging services or
    any other things (like background music) that might distract you. Thank you for your cooperation!
    `,
  buttonText: 'Begin experiment'
});

const instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instrucions',
  title: 'Instructions',
  text: `This experiment is about reaction times. We will show you pictures of geometrical shapes and ask you to respond in different ways.
    In the first part, you should simply press a button as soon as you see anything.
    In the second part, you should press a button when you see a particular shape but not when you see another.
    In the third part, you should press one button for one shape and another button for another shape.
    It is important that you try to <strong>BE AS FAST AS POSSIBLE</strong>, but also that you <strong>MAKE NO MISTAKES</strong>.
    There will be breaks between each part during which you can relax and refocus.
    We will give you detailed instructions and some practice trials at the beginning of each part.`,
  buttonText: 'Next'
});

const instructions_reaction = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_reaction',
  title: 'Instructions for Part 1',
  text: `You will see a blank screen for a while.
    At some point a shape will appear on the screen.
    Your task is to press the <strong>SPACE</strong> bar on your keyboard as soon as the shape appears.
    <br>First you will go to a practice trial for this task.`,
  buttonText: 'Next'
});

const begin_real_reaction = magpieViews.view_generator("begin", {
  trials: 1,
  name: 'begin_reaction',
  title: '',
  text: `Now that you have acquainted yourself with the procedure of the task, the actual experiment will begin.`
});

const pause_reaction = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'pause_reaction',
  title: 'Pause',
  text: `This task is finished! Take a break to remain focused during the next part. To proceed to the next part, press 'next'.`
});

const instructions_goNoGo = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_goNoGo',
  title: 'Instructions for Part 2',
  text: `In this task, again, you will see a blank screen and a shape will appear.
    Your task is to press the <strong>SPACE</strong> bar only when you see <strong>${space_target}</strong>.
    If you see a ${space_nontarget}, do not press anything and just <strong>wait for the ${space_nontarget} to disappear</strong>.
    <br>First you will go to a practice trial for this task.`,
});

const begin_real_goNoGo = magpieViews.view_generator("begin", {
  trials: 1,
  name: 'begin_goNoGo',
  title: '',
  text: `Now that you have acquainted yourself with the procedure of the task, the actual experiment will begin.<br>
    Remember to press the <strong>SPACE</strong> bar only when you see <strong>${space_target}</strong>
    and <strong>wait</strong> for the shape to disappear if it is a <strong>${space_nontarget}</strong>.`
});

const pause_goNoGo = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'pause_goNoGo',
  title: 'Pause',
  text: `This task is finished! Take a break to remain focused during the next part. To proceed to the next part, press 'next'.`
});

const instructions_discrimination = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_discrimination',
  title: 'Instructions for Part 3',
  text: `You will see a shape appearing on the screen. Press the key <strong>F</strong>
    on the keyboard when you see <strong>${f_target}</strong> and the key <strong>J</strong>
    when you see <strong>${j_target}</strong>.
    <br>First you will go to a practice trial for this task.`
});

const begin_real_discrimination = magpieViews.view_generator("begin", {
  trials: 1,
  name: 'begin_discrimination',
  title: '',
  text: `Now that you have acquainted yourself with the procedure of the task, the actual experiment will begin.<br>
    Remember to press the key <strong>F</strong> on the keyboard when you see <strong>${f_target}</strong>
    and the key <strong>J</strong> when you see <strong>${j_target}</strong>.`
});



// the post questionnaire can be translated
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Additional information',
  text: 'Answering the following questions is optional.</strong>',
  languages_question: '<strong>Handedness</strong>',
  languages_more: '(the hand you usually write with)',
  edu_question: 'Education',
  edu_graduated_high_school: 'elementary school',
  edu_graduated_college: 'high school / college',
  edu_higher_degree: 'university'


  // You can change much of what appears here, e.g., to present it in a different language, as follows:
  // buttonText: 'Weiter',
  // age_question: 'Alter',
  // gender_question: 'Geschlecht',
  // gender_male: 'männlich',
  // gender_female: 'weiblich',
  // gender_other: 'divers',
  // edu_question: 'Höchster Bildungsabschluss',
  // edu_graduated_high_school: 'Abitur',
  // edu_graduated_college: 'Hochschulabschluss',
  // edu_higher_degree: 'Universitärer Abschluss',
  // languages_question: 'Muttersprache',
  // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
  // comments_question: 'Weitere Kommentare'
});

// the 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Thank you for taking part in this experiment!',
  prolificConfirmText: 'Press the button'
});

/** trial (magpie's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _magpie (e.g. for use with a progress bar)
    - trial_type: string - the name of the trial type as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties
    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#trial-views
*/

// part of the practice sample

const practice_reaction = space_mental({
  trials: 5,
  title: "Practice",
  name: 'practice_reaction',
  trial_type: 'reaction_practice',
  data: task_reaction_info.space_practice
})

const task_reaction = space_mental({
  trials: 20,
  name: 'main_reaction',
  trial_type: 'reaction_main',
  data: task_reaction_info.space_main
})

const practice_goNoGo = space_mental({
  trials: 5,
  title: "Practice",
  name: 'practice_goNoGo',
  trial_type: 'goNoGo_practice',
  data: task_goNoGo_info.goNoGo_practice
})

const task_goNoGO = space_mental({
  trials: 20,
  name: 'main_goNoGo',
  trial_type: 'goNoGo_main',
  data: task_goNoGo_info.goNoGo_main
})

const practice_discrimination = keyPress_mental({
  trials: 5,
  title: "Practice",
  name: 'practice_discrimination',
  trial_type: 'discrimination_practice',
  data: task_discrimination_info.keyPress_practice
});

const task_discrimination = keyPress_mental({
  trials: 20,
  name: 'main_discrimination',
  trial_type: 'discrimination_main',
  data: task_discrimination_info.keyPress_main
});
