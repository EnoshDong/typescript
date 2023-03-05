const user = { 
  name: 'hello',
  age: 20,
  open: true,
  lesson: [
    {title: 'linux'},
    {title: 'mac'},
  ],
};
user.age = 30;
// user.age = '30';
user.open = false;
user.lesson.push({title: 'windows'});
console.log('user:', user);
console.log('user.lesson:', user.lesson[0].title);