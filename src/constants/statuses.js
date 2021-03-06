export const statuses = {
  best: 'best',
  ok: 'ok',
  bad: 'bad',
}

export const statusDisplayNames = {
  [statuses.best]: 'Благоприятно',
  [statuses.ok]: 'Умеренно',
  [statuses.bad]: 'Неблагоприятно',
}

export const metasCollection = {
  heart: {
    sections: [
      {
        icon: 'geomagnetic',
        values: {
          best: '2 балла',
          ok: '5 баллов',
          bad: '7 баллов',
        },
      },
    ],
    messages: {
      best: 'Небольшие возмущения',
      ok: 'Умеренная геомагнитная буря',
      bad: 'Жесткий геомагнитный шторм',
    },
  },
  head: {
    sections: [
      {
        icon: 'pressure',
        values: {
          best: '744 – 741 мм рт. ст.',
          bad: '744 – 729 мм рт. ст.',
        },
      },
    ],
    messages: {
      best: 'Не ожидается резких перепадов давления',
      bad: 'Ожидается резкий перепад давления',
    },
  },
  asthma: {
    sections: [
      {
        icon: 'humidity',
        values: {
          best: '42%',
          bad: '82%',
        },
      },
      {
        icon: 'wind',
        values: {
          best: '5 м/с',
          bad: '15 м/с',
        },
      },
    ],
    messages: {
      best: 'Небольшая влажность и слабый ветер',
      bad: 'Большая влажность и сильный ветер',
    },
  },
  joint: {
    sections: [
      {
        icon: 'humidity',
        values: {
          best: '44%',
          bad: '78%',
        },
      },
      {
        icon: 'arrow-up',
        values: {
          best: '14 °С',
          bad: '2 °С',
        },
      },
    ],
    messages: {
      best: 'Небольшая влажность и перепады температуры',
      bad: 'Большая влажность и перепады температуры',
    },
  },
  allergy: {
    sections: [
      {
        icon: 'pollen',
        values: {
          best: '20 ед/м3',
          ok: '70 ед/м3',
          bad: '500 ед/м3',
        },
      },
    ],
    messages: {
      best: 'Низкий уровень аллергенов',
      ok: 'Средний уровень аллергенов',
      bad: 'Высокий уровень аллергенов',
    },
  },
  healthSkin: {
    sections: [
      {
        icon: 'sun',
        values: {
          best: 'Индекс УФ — 1',
          ok: 'Индекс УФ — 3',
          bad: 'Индекс УФ — 8',
        },
      },
    ],
    messages: {
      best: 'Защита не требуется',
      ok: 'Требуется защита',
      bad: 'Требуется повышенная защита',
    },
  },
  wind: {
    sections: [
      {
        icon: 'wind',
        values: {
          best: '2 м/с',
          bad: '15 м/с',
        },
      },
    ],
    messages: {
      best: 'Слабый ветер',
      bad: 'Ожидается сильный ветер',
    },
  },
  washCar: {
    sections: [
      {
        icon: 'wash',
        values: {
          best: '2% вероятность',
          bad: '90% вероятность',
        },
      },
    ],
    messages: {
      best: 'Осадки не ожидаются',
      bad: 'Ожидаются сильные дожди',
    },
  },
  snow: {
    sections: [
      {
        icon: 'snowflake',
        values: {
          best: '5 см',
          bad: '20 см',
        },
      },
    ],
    messages: {
      best: 'Высота снежного покрова',
      bad: 'Высота снежного покров',
    },
  },
  touristsSkin: {
    sections: [
      {
        icon: 'sun',
        values: {
          best: 'Индекс УФ — 1',
          ok: 'Индекс УФ — 3',
          bad: 'Индекс УФ — 8',
        },
      },
    ],
    messages: {
      best: 'Защита не требуется',
      ok: 'Требуется защита',
      bad: 'Требуется повышенная защита',
    },
  },
  waterTemp: {
    sections: [
      {
        icon: 'thermometer',
        values: {
          best: '26°С',
          ok: '20°С',
          bad: '10°С',
        },
      },
    ],
    messages: {
      best: 'Тёплая температура воды',
      ok: ' Прохладная температура воды',
      bad: 'Низкая температура воды',
    },
  },
  precipitation: {
    sections: [
      {
        icon: 'wash',
        values: {
          best: '5% вероятность',
          bad: '95% вероятность',
        },
      },
    ],
    messages: {
      best: 'Осадки не ожидаются',
      bad: 'Ожидаются сильные дожди',
    },
  },
  touristsFrosts: {
    sections: [
      {
        icon: 'thermometer',
        values: {
          best: 'Ночью 2°С',
          bad: 'Ночью до -10°С',
        },
      },
    ],
    messages: {
      best: 'Заморозков не обещают',
      bad: 'Резкое похолодание',
    },
  },
  countrymenFrosts: {
    sections: [
      {
        icon: 'thermometer',
        values: {
          best: 'Ночью 2°С',
          bad: 'Ночью до -10°С',
        },
      },
    ],
    messages: {
      best: 'Заморозков не обещают',
      bad: 'Резкое похолодание',
    },
  },
  hailstones: {
    sections: [
      {
        icon: 'stone',
        values: {
          best: 'Диаметр 2 мм',
          bad: 'Диаметр 10 мм',
        },
      },
    ],
    messages: {
      best: 'Ледяная крупа',
      bad: 'Крупный град',
    },
  },
  rain: {
    sections: [
      {
        icon: 'wash',
        values: {
          best: '2% вероятность',
          bad: '80% вероятность',
        },
      },
    ],
    messages: {
      best: 'Осадки не ожидаются',
      bad: 'Ожидаются сильные дожди',
    },
  },
  ventilation: {
    sections: [
      {
        icon: 'humidity',
        values: {
          best: '12%',
          bad: '82%',
        },
      },
      {
        icon: 'thermometer',
        values: {
          best: '15°С',
          bad: '25°С',
        },
      },
    ],
    messages: {
      best: 'Небольшая влажность и прохладно днём',
      bad: 'Большая влажность и жарко днём',
    },
  },
}
