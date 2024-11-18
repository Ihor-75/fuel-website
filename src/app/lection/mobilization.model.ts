// Задача: Мобілізація від цивільного до служби у бригаді

// ТЦК, ВЛК, навчання, служба у бригаді

// Abstraction

// Цивільний: ім'я, прізвище, дата народження, адреса, телефон, стан здоров’я
// ТЦК: регіон, адреса ТЦК, дата виклику, військовий комісар
// ВЛК: стан здоров’я, висновок комісії (придатність/непридатність)
// Навчання: навчальний центр, тривалість, програма навчання, спеціалізація
// Бригада: номер бригади, посада, локація бригади

export class Civil {
  name!: string;
  surname!: string;
  birthDate!: string;
  address!: string;
  phone!: string;
  health!: string;
}

export class TCK {
  region!: string;
  address!: string;
  callDate!: string;
  militaryOfficer!: string;
}

export class VLK {
  health!: string;
  specialists!: string;
  suitable!: string;
}

export class Training {
  trainingCenter!: string;
  duration!: string;
  program!: string;
  specialization!: string;
}

export class Brigade {
  brigadeNumber!: string;
  position!: string;
  location!: string;
}
