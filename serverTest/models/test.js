// Модель для первой таблицы (например, таблицы "Books")
const Book = sequelize.define('Book', {
    title: {
      type: DataTypes.STRING
    }
  });
  
  // Модель для второй таблицы (например, таблицы "Authors")
  const Author = sequelize.define('Author', {
    name: {
      type: DataTypes.STRING
    }
  });
  
  // Создание таблицы, которая содержит ключи других таблиц, устанавливая отношение многие-ко-многим
  const BooksAuthors = sequelize.define('BooksAuthors', {
    // Дополнительные атрибуты могут быть добавлены здесь, если необходимо
  });
  
  // Устанавливаем отношение многие-ко-многим между таблицами "Books" и "Authors"
  Book.belongsToMany(Author, { through: 'BooksAuthors' });
  Author.belongsToMany(Book, { through: 'BooksAuthors' });
  

  // получаем пользователя с именем Tom
Student.findOne({where: {name: "Tom"}})
.then(student=>{
    if(!student) return;
     
    // добавим Тому курс по JavaScript
    Course.findOne({where: {name: "JavaScript"}})
        .then(course=>{
            if(!course) return;
            student.addCourse(course, {through:{grade:1}});
    });
});

-----
Student.findOne({where: {name: "Tom"}})
.then(student=>{
    if(!student) return;
    student.getCourses().then(courses=>{
        for(course of courses){
            console.log("course:", course.name, "grade:", course.enrolment.grade);
        }
    });
});