function calculateAge(dateString) {
    const birthDate = new Date(dateString);
    const today = new Date();

    const months = today.getMonth() - birthDate.getMonth() + (12 * (today.getFullYear() - birthDate.getFullYear()));
    if (today.getDate() < birthDate.getDate()) {
        return months - 1;
    }

    return months;
}

export let ImcCalculation = (sexe, dateNaissance, poid, taille) => {
    let ageEnMois = calculateAge(dateNaissance);
    let imc = poid * 10000 / (taille * taille);

    if (sexe === 'male' || sexe === 'false') {
        if (ageEnMois === 0 || ageEnMois === 1) {
            if (imc < 11.5) return 'Malnutrition';
            if (imc >= 11.5 && imc <= 14.9) return 'Normal';
            if (imc > 14.9 && imc <= 15.8) return 'Surpoids';
            if (imc > 15.8) return 'Obésité';
        }
        else if (ageEnMois === 2) {
            if (imc < 12) return 'Malnutrition';
            if (imc >= 12 && imc <= 15.8) return 'Normal';
            if (imc > 15.8 && imc <= 16.8) return 'Surpoids';
            if (imc > 16.8) return 'Obésité';
        }
        else if (ageEnMois === 3) {
            if (imc < 12.8) return 'Malnutrition';
            if (imc >= 12.8 && imc <= 16.6) return 'Normal';
            if (imc > 16.6 && imc <= 17.7) return 'Surpoids';
            if (imc > 17.7) return 'Obésité';
        }
        else if (ageEnMois === 4) {
            if (imc < 13.3) return 'Malnutrition';
            if (imc >= 13.3 && imc <= 17.0) return 'Normal';
            if (imc > 17.0 && imc <= 18.1) return 'Surpoids';
            if (imc > 18.1) return 'Obésité';
        }
        else if (ageEnMois === 5) {
            if (imc < 13.7) return 'Malnutrition';
            if (imc >= 13.7 && imc <= 17.4) return 'Normal';
            if (imc > 17.4 && imc <= 18.5) return 'Surpoids';
            if (imc > 18.5) return 'Obésité';
        }
        else if (ageEnMois === 6) {
            if (imc < 14.2) return 'Malnutrition';
            if (imc >= 14.2 && imc <= 17.8) return 'Normal';
            if (imc > 17.8 && imc <= 19.2) return 'Surpoids';
            if (imc > 19.2) return 'Obésité';
        }
        else if (ageEnMois === 7) {
            if (imc < 14.3) return 'Malnutrition';
            if (imc >= 14.3 && imc <= 17.9) return 'Normal';
            if (imc > 17.9 && imc <= 19.3) return 'Surpoids';
            if (imc > 19.3) return 'Obésité';
        }
        else if (ageEnMois === 8) {
            if (imc < 14.3) return 'Malnutrition';
            if (imc >= 14.3 && imc <= 17.8) return 'Normal';
            if (imc > 17.8 && imc <= 19.3) return 'Surpoids';
            if (imc > 19.3) return 'Obésité';
        }
        else if (ageEnMois === 9) {
            if (imc < 14.2) return 'Malnutrition';
            if (imc >= 14.2 && imc <= 17.7) return 'Normal';
            if (imc > 17.7 && imc <= 19.2) return 'Surpoids';
            if (imc > 19.2) return 'Obésité';
        }
        else if (ageEnMois === 10) {
            if (imc < 14.1) return 'Malnutrition';
            if (imc >= 14.1 && imc <= 17.6) return 'Normal';
            if (imc > 17.6 && imc <= 19.1) return 'Surpoids';
            if (imc > 19.1) return 'Obésité';
        }
        else if (ageEnMois === 11) {
            if (imc < 14.0) return 'Malnutrition';
            if (imc >= 14.0 && imc <= 17.5) return 'Normal';
            if (imc > 17.5 && imc <= 19.0) return 'Surpoids';
            if (imc > 19.0) return 'Obésité';
        }
        else if (ageEnMois === 12) {
            if (imc < 14.0) return 'Malnutrition';
            if (imc >= 14.0 && imc <= 17.5) return 'Normal';
            if (imc > 17.5 && imc <= 19.0) return 'Surpoids';
            if (imc > 19.0) return 'Obésité';
        }
        else if (ageEnMois === 18) {
            if (imc < 13.5) return 'Malnutrition';
            if (imc >= 13.5 && imc <= 16.5) return 'Normal';
            if (imc > 16.5 && imc <= 17.5) return 'Surpoids';
            if (imc > 17.5) return 'Obésité';
        }
        else if (ageEnMois === 60) {
            if (imc < 14.5) return 'Malnutrition';
            if (imc >= 14.5 && imc <= 17.5) return 'Normal';
            if (imc > 17.5 && imc <= 18.5) return 'Surpoids';
            if (imc > 18.5) return 'Obésité';
        }
        else if (ageEnMois === 132) {
            if (imc < 15.5) return 'Malnutrition';
            if (imc >= 15.5 && imc <= 18.5) return 'Normal';
            if (imc > 18.5 && imc <= 19.5) return 'Surpoids';
            if (imc > 19.5) return 'Obésité';
        }
    }

    // Logique pour les filles
    else {
        if (ageEnMois === 0 || ageEnMois === 1) {
            if (imc < 11.3) return 'Malnutrition';
            if (imc >= 11.3 && imc <= 14.7) return 'Normal';
            if (imc > 14.7 && imc <= 15.7) return 'Surpoids';
            if (imc > 15.7) return 'Obésité';
        }
        else if (ageEnMois === 2) {
            if (imc < 11.8) return 'Malnutrition';
            if (imc >= 11.8 && imc <= 15.5) return 'Normal';
            if (imc > 15.5 && imc <= 16.6) return 'Surpoids';
            if (imc > 16.6) return 'Obésité';
        }
        else if (ageEnMois === 3) {
            if (imc < 12.4) return 'Malnutrition';
            if (imc >= 12.4 && imc <= 16.3) return 'Normal';
            if (imc > 16.3 && imc <= 17.5) return 'Surpoids';
            if (imc > 17.5) return 'Obésité';
        }
        else if (ageEnMois === 4) {
            if (imc < 12.9) return 'Malnutrition';
            if (imc >= 12.9 && imc <= 16.8) return 'Normal';
            if (imc > 16.8 && imc <= 17.9) return 'Surpoids';
            if (imc > 17.9) return 'Obésité';
        }
        else if (ageEnMois === 5) {
            if (imc < 13.3) return 'Malnutrition';
            if (imc >= 13.3 && imc <= 17.2) return 'Normal';
            if (imc > 17.2 && imc <= 18.3) return 'Surpoids';
            if (imc > 18.3) return 'Obésité';
        }
        else if (ageEnMois === 6) {
            if (imc < 13.7) return 'Malnutrition';
            if (imc >= 13.7 && imc <= 17.6) return 'Normal';
            if (imc > 17.6 && imc <= 19.0) return 'Surpoids';
            if (imc > 19.0) return 'Obésité';
        }
        else if (ageEnMois === 7) {
            if (imc < 13.7) return 'Malnutrition';
            if (imc >= 13.7 && imc <= 17.6) return 'Normal';
            if (imc > 17.6 && imc <= 18.9) return 'Surpoids';
            if (imc > 18.9) return 'Obésité';
        }
        else if (ageEnMois === 8) {
            if (imc < 13.7) return 'Malnutrition';
            if (imc >= 13.7 && imc <= 17.5) return 'Normal';
            if (imc > 17.5 && imc <= 18.8) return 'Surpoids';
            if (imc > 18.8) return 'Obésité';
        }
        else if (ageEnMois === 9) {
            if (imc < 13.6) return 'Malnutrition';
            if (imc >= 13.6 && imc <= 17.4) return 'Normal';
            if (imc > 17.4 && imc <= 18.7) return 'Surpoids';
            if (imc > 18.7) return 'Obésité';
        }
        else if (ageEnMois === 10) {
            if (imc < 13.5) return 'Malnutrition';
            if (imc >= 13.5 && imc <= 17.3) return 'Normal';
            if (imc > 17.3 && imc <= 18.6) return 'Surpoids';
            if (imc > 18.6) return 'Obésité';
        }
        else if (ageEnMois === 11) {
            if (imc < 13.4) return 'Malnutrition';
            if (imc >= 13.4 && imc <= 17.2) return 'Normal';
            if (imc > 17.2 && imc <= 18.5) return 'Surpoids';
            if (imc > 18.5) return 'Obésité';
        }
        else if (ageEnMois === 12) {
            if (imc < 13.3) return 'Malnutrition';
            if (imc >= 13.3 && imc <= 17.1) return 'Normal';
            if (imc > 17.1 && imc <= 18.4) return 'Surpoids';
            if (imc > 18.4) return 'Obésité';
        }
        else if (ageEnMois === 18) {
            if (imc < 13.0) return 'Malnutrition';
            if (imc >= 13.0 && imc <= 16.0) return 'Normal';
            if (imc > 16.0 && imc <= 17.0) return 'Surpoids';
            if (imc > 17.0) return 'Obésité';
        }
        else if (ageEnMois === 60) {
            if (imc < 14.0) return 'Malnutrition';
            if (imc >= 14.0 && imc <= 16.5) return 'Normal';
            if (imc > 16.5 && imc <= 18.0) return 'Surpoids';
            if (imc > 18.0) return 'Obésité';
        }
        else if (ageEnMois === 132) { // 11 ans = 132 mois
            if (imc < 15.0) return 'Malnutrition';
            if (imc >= 15.0 && imc <= 17.5) return 'Normal';
            if (imc > 17.5 && imc <= 19.0) return 'Surpoids';
            if (imc > 19.0) return 'Obésité';
        }
    }

    return 'Âge ou données non prises en charge';
};