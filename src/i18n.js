import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from 'react-i18next';

i18n
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          'Main': 'Main',
          'Person List': 'Person List',
          'Фотограф дня': 'Photographer of the day',
          'Место рождения': 'Place of Birth',
          'Дата рождения': 'Date of Birth',
          'Подробнее': 'More',
          'О портале': 'About the portal',
          'Портал содержит информацию о жизни и творчестве выдающихся фотографов Беларуси': 'The portal contains information about the life and work of outstanding photographers of Belarus.',
          'Команда проекта': 'The project team',
          'Анатолий': 'Anatolii',
          'Артем': 'Artsiom',
          'Владислав': 'Vladislav',
          'Павел': 'Pavel',
          'Список фотографов': 'List of photographers',
          'Поиск': 'Seacrh',
          'Введите имя или город': 'Enter name or location',
          'Витебск, БССР': 'Vitebsk, BSSR',
          'Минск, Минская губерния, Российская империя': 'Minsk, Minsk Province, Russian Empire',
          'Унеча, Брянск, СССР': 'Unecha, Bryansk region, USSR',
          'Базан Владимир': 'Bazan Vladimir',
          'Барсуков Игорь': 'Barsukov Igor',
          'Бранштетер Павел': 'Branshteter Pavel',
          'Шмерлинг Михаил': 'Shmerling Mikhail',
          'Дашкевич Лев': 'Dashkevich Lev',
        },
      },
      ru: {
        translations: {
          'Main': 'Главная',
          'Person List': 'Список деятелей',
          'Фотограф дня': 'Фотограф дня',
          'Место рождения': 'Место рождения',
          'Дата рождения': 'Дата рождения',
          'Подробнее': 'Подробнее',
          'О портале': 'О портале',
          'Портал содержит информацию о жизни и творчестве выдающихся фотографов Беларуси': 'Портал содержит информацию о жизни и творчестве выдающихся фотографов Беларуси.',
          'Команда проекта': 'Команда проекта',
          'Анатолий': 'Анатолий',
          'Артем': 'Артем',
          'Владислав': 'Владислав',
          'Павел': 'Павел',
          'Список фотографов': 'Список фотографов',
          'Поиск': 'Поиск',
          'Введите имя или город': 'Введите имя или город',
          'Витебск, БССР': 'Витебск, БССР',
          'Минск, Минская губерния, Российская империя': 'Минск, Минская губерния, Российская империя',
          'Унеча, Брянск, СССР': 'Унеча, Брянск, СССР',
          'Базан Владимир': 'Базан Владимир',
          'Барсуков Игорь': 'Барсуков Игорь',
          'Бранштетер Павел': 'Бранштетер Павел',
          'Шмерлинг Михаил': 'Шмерлинг Михаил',
          'Дашкевич Лев': 'Дашкевич Лев',
        },
      },
      by: {
        translations: {
          'Main': 'Галоўная ',
          'Person List': 'Спіс дзеячаў',
          'Фотограф дня': 'Фатограф дня',
          'Место рождения': 'Месца нараджэння',
          'Дата рождения': 'Дата нараджэння',
          'Подробнее': 'Падрабязна',
          'О портале': 'Аб партале',
          'Портал содержит информацию о жизни и творчестве выдающихся фотографов Беларуси': 'Партал змяшчае інфармацыю пра жыццё і творчасць выдатных фатографаў Беларусі.',
          'Команда проекта': 'Каманда праекта',
          'Анатолий': 'Анатоль',
          'Артем': 'Арцём',
          'Владислав': 'Уладзіслаў',
          'Павел': 'Павел',
          'Список фотографов': 'Cпіс фатографаў',
          'Поиск': 'Пошук',
          'Введите имя или город': 'Увядзіце імя альбо месца',
          'Витебск, БССР': 'Віцебск, БССР',
          'Минск, Минская губерния, Российская империя': 'Мінск, Мінская губерня, Расійская імперыя',
          'Унеча, Брянск, СССР': 'Унеча, Бранск, СССР',
          'Базан Владимир': 'Базан Уладзімір',
          'Барсуков Игорь': 'Барсукоў Ігар',
          'Бранштетер Павел': 'Бранштэтар Павел',
          'Шмерлинг Михаил': 'Шмерлінг Міхаіл',
          'Дашкевич Лев': 'Дашкевіч Леў',
        },
      },
    },
    fallbackLng: 'en',
    debug: true,

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: '.',

    interpolation: {
      formatSeparator: ',',
    },

    react: {
      wait: true,
    },
  });

export default i18n;
