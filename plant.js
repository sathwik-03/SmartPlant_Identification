document.getElementById('register-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    
    const userExists = existingUsers.some(user => user.username === username || user.email === email);

    if (userExists) {
        alert('User already exists with this username or email. Please log in or use a different one.');
        return;
    }

    
    existingUsers.push({ username, email, password });

    
    localStorage.setItem('users', JSON.stringify(existingUsers));

    alert('Registration successful! Redirecting to the login page.');

    
    document.getElementById('register').style.display = 'none';
    document.getElementById('login').style.display = 'block';
});


document.getElementById('login-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

   
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    
    const user = existingUsers.find(user => user.username === username && user.password === password);

    if (user) {
        alert('Login successful! Redirecting to the home page.');

        document.getElementById('login').style.display = 'none';
        document.getElementById('home').style.display = 'block';
    } else {
        alert('Incorrect username or password.');
    }
});


const translations = {
    en: {
        welcome: "Smart Plant Recognizer",
        scan_instructions: "Scan a plant to get information about its diseases and prevention measures.",
        start_scan: "Start Scanning",
        plant_name: "Plant Name:",
        disease_name: "Disease:",
        prevention_measures: "Prevention Measures:",
        organic_manures: "Recommended Organic Manures:",
    },
    hi: {
        welcome: "स्मार्ट पौधा पहचानकर्ता",
        scan_instructions: "पौधे की बीमारियों और रोकथाम के उपायों के बारे में जानकारी प्राप्त करने के लिए पौधे को स्कैन करें।",
        start_scan: "स्कैनिंग शुरू करें",
        plant_name: "पौधे का नाम:",
        disease_name: "रोग:",
        prevention_measures: "रोकथाम के उपाय:",
        organic_manures: "अनुशंसित जैविक खाद:",
    },
    te: {
        welcome: "స్మార్ట్ ప్లాంట్ గుర్తించేవాడు",
        scan_instructions: "గంటు ఫార్ములకు పంటలు మమ మగురించిన సమమచారాన్ని పొండలానికి మమక్కను స్కాన్ చేయండి.",
        start_scan: "స్కాన్ ప్రారంభించండి",
        plant_name: "పంట పేరు:",
        disease_name: "అవసరం:",
        prevention_measures: "రోగ నిరోధక చర్యలు:",
        organic_manures: "సిఫార్సు చేసిన సేంద్రియ మూడులు:",
    },
    ta: {
        welcome: "ஸ்மார்ட் தாவரம் கண்டுபிடிப்பவர்",
        scan_instructions: "தாவரங்களின் நோய்கள் மற்றும் தடுப்பு நடவடிக்கைகள் குறித்த தகவல்களைப் பெற தாவரத்தை ஸ்கேன் செய்யவும்.",
        start_scan: "ஸ்கேன் செய்யத் தொடங்கவும்",
        plant_name: "தாவரம் பெயர்:",
        disease_name: "நோய்:",
        prevention_measures: "தடுப்பு நடவடிக்கைகள்:",
        organic_manures: "பரிந்துரைக்கப்பட்ட பயிர் உரங்கள்:",
    },
    kn: {
        welcome: "ಸ್ಮಾರ್ಟ್ ಸಸ್ಯ ಗುರುತಿಸುವಿಕೆ",
        scan_instructions: "ತೊಳೆ ಮತ್ತು ತಡೆಗಟ್ಟುವ ಕ್ರಮಗಳ ಬಗ್ಗೆ ಮಾಹಿತಿಗಾಗಿ ಸಸ್ಯವನ್ನು ಸ್ಕ್ಯಾನ್ ಮಾಡಿ.",
        start_scan: "ಸ್ಕ್ಯಾನ್ ಆರಂಭಿಸಿ",
        plant_name: "ಸಸ್ಯದ ಹೆಸರು:",
        disease_name: "ರೋಗ:",
        prevention_measures: "ತಡೆಗಟ್ಟುವ ಕ್ರಮಗಳು:",
        organic_manures: "ದಿನಶ್ಚಾಲಿತ ಕೆಂಪುಗಳು:",
    },
    ml: {
        welcome: "സ്മാർട്ട് പ്ലാന്റ് തിരിച്ചരിക്കുന്ന്",
        scan_instructions: "മൊട്ടയിൽ സസ്യങ്ങളുടെ രോഗങ്ങളും തടയാനുള്ള നടപടികളും വിവരങ്ങൾ ലഭിക്കാൻ സസ്യം സ്കാൻ ചെയ്യ് ചെയ്യ്.",
        start_scan: "സ്കാൻ ചെയ്യ് ആരംഭിക്കുക",
        plant_name: "സസ്യത്തിന്റെ പേര്:",
        disease_name: "രോഗം:",
        prevention_measures: "തടയാനുള്ള നടപടികളും:",
        organic_manures: "ശുപാർശ ചെയ്യ് ജൈവിക് മാണ്ഡ:",
    },
    or: {
        welcome: "ସ୍ମାର୍ଟ୍ ପ୍ଲାଣ୍ଟ୍ ଗଣନାକାରୀ",
        scan_instructions: "ଗଛ ଓ ସହାଯକ ପଦକ୍ଷେପ ପ୍ରତି କରି ପାଇଁନା ଗଛକୁ ସ୍କନ୍ କରନ୍ତୁ।",
        start_scan: "ସ୍କନ୍ ଆରମ୍ଭ କରନ୍ତୁ",
        plant_name: "ଗଛର ନାମ:",
        disease_name: "ବ୍ଯଧି:",
        prevention_measures: "ନିରୋଧକ ପଦକ୍ଷେପ:",
        organic_manures: "ପ୍ରସ୍ତାବିତ ଜଯିବ ମାଣ୍ଡା:",
    },
    mr: {
        welcome: "स्मार्ट प्लांट रिसग्निजर",
        scan_instructions: "पाण्याच्या झाडांची आणि त्यांची सुरक्षा उपाययोजना शोधण्यासाठी झाड स्कॅन करा.",
        start_scan: "स्कॅनिंग सुरू करा",
        plant_name: "झाडाचे नाव:",
        disease_name: "रोग:",
        prevention_measures: "अवरोधक उपाययोजना:",
        organic_manures: "सिफारिश केलेल्या जैविक खतांचा:",
    }
};


document.getElementById('language-switcher').addEventListener('change', (event) => {
    const lang = event.target.value;
    updateLanguage(lang);
});

function updateLanguage(lang) {
    document.getElementById('app-title').innerText = translations[lang].welcome;
    document.getElementById('scan-instructions').innerText = translations[lang].scan_instructions;
    document.getElementById('start-scan').innerText = translations[lang].start_scan;

    
    document.getElementById('plant-name-title').innerText = translations[lang].plant_name;
    document.getElementById('disease-name-title').innerText = translations[lang].disease_name;
    document.getElementById('prevention-measures-title').innerText = translations[lang].prevention_measures;
    document.getElementById('organic-manures-title').innerText = translations[lang].organic_manures;
}


const camera = document.getElementById('camera');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const startScanButton = document.getElementById('start-scan');
const captureButton = document.getElementById('capture');
const saveInfoButton = document.getElementById('save-info');
const plantInfoDiv = document.getElementById('plant-info');


startScanButton.addEventListener('click', async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    camera.srcObject = stream;
});


async function identifyPlant(imageData) {
    const apiKey = 'UevNKtkLZCkvBvbEjirS8RKKSDesBenBpvkxEVc5bK6gyd1d7T';

    const details = [
        'common_names', 'url', 'description', 'taxonomy', 'rank', 'gbif_id',
        'inaturalist_id', 'image', 'synonyms', 'edible_parts',
        'watering', 'propagation_methods'
    ].join(',');

    const apiUrl = `https://plant.id/api/v3/identification?details=${details}&language=en&async=true`;

    const data = {
        api_key: apiKey,
        images: [imageData.split(',')[1]], // Base64 data without prefix
        similar_images: true,
        health: 'all'
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const initialResult = await response.json();
        console.log('Initial API Response:', initialResult);

        // Check if we have an access token
        if (!initialResult.access_token) {
            throw new Error('No access token received for asynchronous processing');
        }

        // Polling for completion using access_token
        const pollUrl = `https://plant.id/api/v3/identification/${initialResult.access_token}?details=${details}&language=en`;
        let pollResult;
        while (true) {
            const pollResponse = await fetch(pollUrl, {
                method: 'GET',
                headers: {
                    'Api-Key': 'UevNKtkLZCkvBvbEjirS8RKKSDesBenBpvkxEVc5bK6gyd1d7T',                    
                    'Content-Type': 'application/json',
                }
            });

            pollResult = await pollResponse.json();
            console.log('Polling Response:', pollResult);

            if (pollResult.status === 'COMPLETED') {
                break;
            }

            // Wait before polling again (e.g., every 3 seconds)
            await new Promise(resolve => setTimeout(resolve, 3000));
        }

        // Process the plant identification data after completion
        if (pollResult.result?.classification?.suggestions?.length > 0) {
            const plantInfo = pollResult.result.classification.suggestions[0];
            const diseaseInfo = pollResult.result.disease?.suggestions?.[0] || null;

            return {
                ...plantInfo,
                disease: diseaseInfo
            };
        } else {
            throw new Error('No plant suggestions found in the API response');
        }
    } catch (error) {
        console.error('Error in plant identification:', error);
        throw error;
    }
}


function getDiseaseAndManureInfo(plantName, diseaseName) {
    // Default recommendations
    let preventionMeasures = [
        "Regular inspection of plants",
        "Maintain proper plant spacing for air circulation",
        "Avoid overhead watering",
        "Remove and destroy infected plant parts",
        "Keep the garden clean and free of debris"
    ];

    let organicManures = [
        "Compost",
        "Vermicompost",
        "Neem cake",
        "Farm yard manure",
        "Green manure"
    ];

    // Specific recommendations based on disease type
    if (diseaseName.toLowerCase().includes('fungi') || diseaseName.toLowerCase().includes('fungal')) {
        preventionMeasures = [
            "Improve air circulation around plants",
            "Avoid watering leaves directly",
            "Remove infected leaves immediately",
            "Use disease-resistant varieties when possible",
            "Apply organic fungicides if necessary",
            "Maintain proper plant spacing"
        ];
        
        organicManures = [
            "Neem cake powder",
            "Trichoderma-enriched compost",
            "Wood ash",
            "Cow dung manure",
            "Bone meal"
        ];
    } else if (diseaseName.toLowerCase().includes('nutrient deficiency')) {
        preventionMeasures = [
            "Regular soil testing",
            "Balanced fertilization",
            "pH management",
            "Proper irrigation",
            "Mulching"
        ];
        
        organicManures = [
            "Compost tea",
            "Seaweed extract",
            "Fish emulsion",
            "Blood meal",
            "Rock phosphate"
        ];
    } else if (diseaseName.toLowerCase().includes('insect') || diseaseName.toLowerCase().includes('pest')) {
        preventionMeasures = [
            "Install physical barriers",
            "Use companion planting",
            "Regular monitoring",
            "Maintain beneficial insects",
            "Use organic pest deterrents"
        ];
        
        organicManures = [
            "Neem oil cake",
            "Karanja cake",
            "Mustard cake",
            "Vermicompost",
            "Biochar"
        ];
    }

    // Join arrays into strings with bullet points
    return {
        preventionMeasures: preventionMeasures.map(measure => `• ${measure}`).join('\n'),
        organicManures: organicManures.map(manure => `• ${manure}`).join('\n')
    };
}


captureButton.addEventListener('click', async () => {
    context.drawImage(camera, 0, 0, canvas.width, canvas.height);
    const imageData = canvas.toDataURL('image/jpeg');
    
    try {
        const identifiedPlant = await identifyPlant(imageData);
        if (identifiedPlant) {
            // Plant info is directly on the identifiedPlant object
            const plantName = identifiedPlant.name;
            const commonNames = identifiedPlant.details?.common_names?.join(', ') || 'Not available';
            const description = identifiedPlant.details?.description?.value || 'Description not available';
            
            // Disease info is in the disease property
            const diseaseInfo = identifiedPlant.disease;
            const diseaseName = diseaseInfo?.name || 'No disease detected';
            const diseaseDescription = diseaseInfo?.details?.description || 'No disease description available';
            const probability = (diseaseInfo?.probability * 100).toFixed(1) || 0;
            
            // Get prevention measures and organic manures based on the disease
            const { preventionMeasures, organicManures } = getDiseaseAndManureInfo(plantName, diseaseName);
            
            // Update UI elements safely
            const elements = {
                'plant-name': `${plantName} (${commonNames})`,
                'plant-description': description,
                'disease-name': `${diseaseName} (${probability}% confidence)`,
                'disease-description': diseaseDescription,
                'prevention-measures': preventionMeasures,
                'organic-manures': organicManures
            };

            // Safely update each element
            for (const [id, text] of Object.entries(elements)) {
                const element = document.getElementById(id);
                if (element) {
                    element.innerText = text;
                } else {
                    console.warn(`Element with id '${id}' not found`);
                }
            }
            
            // Show the plant info section and save button if they exist
            const plantInfoDiv = document.getElementById('plant-info');
            const saveInfoButton = document.getElementById('save-info');
            
            if (plantInfoDiv) plantInfoDiv.style.display = 'block';
            if (saveInfoButton) saveInfoButton.style.display = 'block';
        } else {
            throw new Error('Plant identification returned no results');
        }
    } catch (error) {
        console.error('Error:', error);
        alert(`Unable to identify the plant: ${error.message}. Please try again with a clearer image.`);
    }
});


saveInfoButton.addEventListener('click', () => {
    // Get information from the info sections
    const plantName = document.getElementById('plant-name').innerText;
    const plantDescription = document.getElementById('plant-description').innerText;
    const diseaseName = document.getElementById('disease-name').innerText;
    const diseaseDescription = document.getElementById('disease-description').innerText;
    const preventionMeasures = document.getElementById('prevention-measures').innerText;
    const organicManures = document.getElementById('organic-manures').innerText;

    const savedInfo = {
        plantName,
        plantDescription,
        diseaseName,
        diseaseDescription,
        preventionMeasures,
        organicManures,
        savedDate: new Date().toLocaleString() // Add timestamp
    };

    // Get existing saved info or initialize empty array
    const savedInfoList = JSON.parse(localStorage.getItem('savedInfo')) || [];
    savedInfoList.push(savedInfo);
    localStorage.setItem('savedInfo', JSON.stringify(savedInfoList));

    alert('Plant information saved successfully!');
});

// Update the view saved info handler to show all information
document.getElementById('view-saved-info').addEventListener('click', () => {
    document.getElementById('home').style.display = 'none';
    document.getElementById('view-info').style.display = 'block';
    
    const savedInfoList = JSON.parse(localStorage.getItem('savedInfo')) || [];
    const savedInfoListElement = document.getElementById('saved-info-list');
    savedInfoListElement.innerHTML = ''; 
    
    savedInfoList.forEach(info => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <div class="saved-info-item">
                <h3>${info.plantName}</h3>
                <p><strong>Description:</strong> ${info.plantDescription}</p>
                <p><strong>Disease:</strong> ${info.diseaseName}</p>
                <p><strong>Disease Description:</strong> ${info.diseaseDescription}</p>
                <p><strong>Prevention Measures:</strong></p>
                <div class="measures">${info.preventionMeasures}</div>
                <p><strong>Recommended Manures:</strong></p>
                <div class="manures">${info.organicManures}</div>
                <small>Saved on: ${info.savedDate}</small>
            </div>
        `;
        savedInfoListElement.appendChild(listItem);
    });
});


document.getElementById('view-saved-info').addEventListener('click', () => {
    document.getElementById('home').style.display = 'none';
    document.getElementById('view-info').style.display = 'block';
    const savedInfoList = JSON.parse(localStorage.getItem('savedInfo')) || [];
    const savedInfoListElement = document.getElementById('saved-info-list');
    savedInfoListElement.innerHTML = ''; 
    savedInfoList.forEach(info => {
        const listItem = document.createElement('li');
        listItem.innerText = `${info.plantName} - ${info.diseaseName}`;
        savedInfoListElement.appendChild(listItem);
    });
});


document.getElementById('back-to-home').addEventListener('click', () => {
    document.getElementById('view-info').style.display = 'none';
    document.getElementById('home').style.display = 'block';
});


document.getElementById('about-title').addEventListener('click', () => {
    const aboutSection = document.getElementById('about');
    aboutSection.style.display = aboutSection.style.display === 'none' ? 'block' : 'none';
});


document.getElementById('contact-title').addEventListener('click', () => {
    const contactSection = document.getElementById('contact');
    contactSection.style.display = contactSection.style.display === 'none' ? 'block' : 'none';
});