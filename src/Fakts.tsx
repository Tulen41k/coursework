import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
  } from 'react-router-dom';

export default function Fakts (){

    
    const history = useHistory();
    

    function handleClick() {
        history.push('/');
      };

    return (
        <>
        <h2>Вы попали на страничку с 30 интересными и забавными фактами про котиков</h2>
        <article className="flex_facts_container">
            <div className="flex_facts_item">
                <img className="flex_cat flex_cat_picture" src="https://www.toybytoy.com/web-pic/0031/0625.webp"/>
                <div className="flex_cat">
                    <p className="fact">1. Кошки могут пить морскую воду</p>
                    <p className="comment_fact">В отличие от человека, почки котиков могут отфильтровывать соль</p>
                    <p className="fact">2. Но котики не могут насладиться сладким вкусом</p>
                    <p className="comment_fact">Учёные считают, что мутация в ключевом рецепторе вкуса мешает кошкам различать сахар на вкус. Ни один котик никогда не узнает радость от сладкой конфетки :((</p>
                    <p className="fact">3. У некоторых котиков есть большие пальцы</p>
                    <p className="comment_fact">Понятно, что они не могут использовать их, как люди. Но это дополнительные пальчики</p>
                    <p className="fact">4. Пушистые пучки на внутренней стороне ушей кошек изолируют ухо и помогают отфильтровать прямые звуки и мусор.</p>
                    <p className="fact">5. Теоретически котики могут слышать дельфинов</p>
                    <p className="comment_fact">Коты могут слышать ультразвуковые шумы, которые грызуны (и дельфины) издают, чтобы связываться друг с другом</p>
                </div>
            </div>
            <div className="flex_facts_item">
                <img className="flex_cat flex_cat_picture" src="https://www.toybytoy.com/web-pic/0031/0632.webp"/>
                <div className="flex_cat">
                    <p className="fact">6. Кошки, возможно, развили свой "тон голоса" специально для того, чтобы общаться с людьми.</p>
                    <p className="comment_fact">Естественный природный вокальный диапазон кошек может быть неразборчив для людей. Но они передают такие чувства, как привязанность, голод и страх, слышимые в пределах человеческого слуха. Некоторые исследователи считают, что это усвоенное поведение, чтобы помочь кошкам обращаться к людям. Они специально научились с нами общаться!</p>
                    <p className="fact">7. Но кошки не могут видеть прямо у себя под носом.</p>
                    <p className="comment_fact">Вот почему они не замечают еду, которая находится прямо перед ними.</p>
                    <p className="fact">8. Никола Тесла был вдохновлён исследовать электричество после того, как его кошка ударила его током.</p>
                    <p className="fact">9. Котята начинают мечтать, когда им около недели.</p>
                    <p className="comment_fact">(Интересно, как учёные это выяснили? Ладно, поверим им на слово.)</p>
                    <p className="fact">10. Котята много спят, потому что их тела вырабатывают гормон роста только во время сна.</p>
                    <p className="comment_fact">(Эх, хотелось бы быть котиком, конечно)</p>
                </div>
            </div>
            <div className="flex_facts_item">
                <img className="flex_cat flex_cat_picture" src="https://www.toybytoy.com/web-pic/0031/0635.webp"/>
                <div className="flex_cat">
                    <p className="fact">11. Взрослые кошки не вырабатывают ключевых гормонов во время сна.</p>
                    <p className="comment_fact">Они просто дремлют весь день, потому что могут себе это позволить. Тот факт, что у кошек нет пуховых одеял, им совершенно не мешает.</p>
                    <p className="fact">12. На самом деле, кошки спят так много, что к тому времени, когда кошке 9 лет, она бодрствовала лишь в течение трёх лет своей жизни.</p>
                    <p className="comment_fact">Как удивительно это звучит!</p>
                    <p className="fact">13. Кастрируя кошку, вы добавляете около двух-трёх лет в её жизнь.</p>
                    <p className="comment_fact">А они ещё возмущаются, блин!</p>
                    <p className="fact">14. Большинство кошек праволапы, а большинство котов леволапы!</p>
                    <p className="comment_fact">Интересно, как ученные это вообще выяснили (а главное - зачем)</p>
                    <p className="fact">15. Кошки потеют через подушечки на лапах.</p>
                    <p className="comment_fact">Представьте, как котик идет из тренажерного зала и оставляет мокрые следы от лапок</p>
                </div>
            </div>
            <div className="flex_facts_item">
                <img className="flex_cat flex_cat_picture" src="https://www.toybytoy.com/web-pic/0031/0654.webp"/>
                <div className="flex_cat">
                    <p className="fact">16. У кошек есть третье веко.</p>
                    <p className="comment_fact">Как правило, его видно только тогда, когда кошка нездорова.</p>
                    <p className="fact">17. Кошки могут бегать на 3 мили в час быстрее, чем Усейн Болт.</p>
                    <p className="comment_fact">Рекорд Усейна — 27 миль в час. Самое быстрое время домашней кошки — 30 миль в час. Правда, так бежать кошка может очень недолго.</p>
                    <p className="fact">18. В оригинальной итальянской версии Золушки оброжелательная фея-крестная была кошкой</p>
                    <p className="fact">19. В 1930-х российские ученые обнаружили, что сиамские котята, которые живут в очень теплых помещениях, не имеют темных пятен породы</p>
                    <p className="comment_fact">Вот так вырастят котенка светлого, а потом на заводчиков жалуются</p>
                    <p className="fact">20. Инстинкт самонаведения кошек может быть вызван магнитами в их мозгу.</p>
                    <p className="comment_fact">Кошки находят свой путь домой через процесс под названием "psi-путешествия" — эксперты думают, что они перемещаются через угол солнечного света, или что им помогают намагниченные клетки мозга, которые действуют как компасы.</p>
                </div>
            </div>
            <div className="flex_facts_item">
                <img className="flex_cat flex_cat_picture" src="https://www.toybytoy.com/web-pic/0031/0639.webp"/>
                <div className="flex_cat">
                    <p className="fact">21. Отпечаток носа кошки так же уникален, как отпечаток пальца человека</p>
                    <p className="fact">22. Чем больше вы разговариваете с кошкой, тем больше она будет говорить с вами.</p>
                    <p className="comment_fact">Если вы общаетесь с вашей кошкой, она будет вам отвечать.</p>
                    <p className="fact">23. Кошки могут издавать более 100 вокальных звуков.</p>
                    <p className="comment_fact">А собаки — только 10.</p>
                    <p className="fact">24. Кошки мурлыкают на той же частоте, что и холостой дизельный двигатель.</p>
                    <p className="comment_fact">Поздравляю, у вас дизельный котик</p>
                    <p className="fact">25. Но кошки не единственные животные, которые мурлычут.</p>
                    <p className="comment_fact">Также мурлыкать могут белки, лемуры, слоны и даже гориллы!</p>
                </div>
            </div>
            <div className="flex_facts_item">
                <img className="flex_cat flex_cat_picture" src="https://www.toybytoy.com/web-pic/0031/0653.webp"/>
                <div className="flex_cat">
                    <p className="fact">26. Если кошачий хвост вибрирует, то ваш кот рад вас видеть.</p>
                    <p className="fact">27. Если кошка выпускает на вас коготки и мягко перебирает ими, вы — официально её территория.</p>
                    <p className="fact">28. Если ваша кошка смотрит на вас вот так, она любит вас.</p>
                    <p className="fact">29. Когда кошка преследует свою добычу, она сохраняет свой уровень высоты головы. Собаки и люди поднимают или опускают голову</p>
                    <p className="fact">30. Кошки являются самыми популярными в мире домашними животными, превосходящими собак по численности в 1-3 раза.</p>
                </div>
            </div> 
        </article>
        <Link to='/Fakts' className="button" onClick={handleClick}>Назад</Link>
        </>
    )
}