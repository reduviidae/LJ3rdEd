'use strict';

const sentences = [{
    subject: 'Bananas',
    verb: 'are',
    object: 'non-dogs'
},
{
    subject: 'Snek',
    verb: 'are',
    object: 'long'
}
];

function say({
  subject,
  verb,
  object
}) {
  // es6 feature: template strings
    console.log(`${subject} ${verb} ${object}`);
}

for (let s of sentences) {
    say(s);
}
