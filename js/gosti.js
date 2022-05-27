let gostinnici=[{name:'Престиж', City:'Пинеровка', Stars:2, Price:6200, Time:'14:00'},
    {name:'Элита+', City:'Литяжевка', Stars:3, Price:8500, Time:'16:00'},
    {name:'Козырь', City:'Балашов', Stars:2, Price:7000, Time:'13:00'},
    {name:'Премиум', City:'Тростянка', Stars:4, Price:11200, Time:'12:00'}];

gostinnici.map((c)=>document.write(`<hr><p>Название гостинницы: ${c.name}</p> 
<p>Город: ${c.City}</p>
<p>Количество звезд: ${c.Stars}</p>
<p>Цена, руб: ${c.Price}</p>
<p>Дата: ${c.Time}</p><hr>`));

//Сортировка по цене
gostinnici.sort((a, b)=>{if(a.Price>b.Price); return a.Price-b.Price});

gostinnici.map((c)=>document.write(`<hr><p>Название гостинницы: ${c.name}</p> 
<p>Город: ${c.City}</p>
<p>Количество звезд: ${c.Stars}</p>
<p>Цена, руб: ${c.Price}</p>
<p>Дата: ${c.Time}</p><hr>`));

//Сортировка по звездам
gostinnici.sort((a, b)=>{if(a.Stars>b.Stars); return a.Stars-b.Stars});

gostinnici.map((c)=>document.write(`<hr><p>Название гостинницы: ${c.name}</p> 
<p>Город: ${c.City}</p>
<p>Количество звезд: ${c.Stars}</p>
<p>Цена, руб: ${c.Price}</p>
<p>Дата: ${c.Time}</p><hr>`));

