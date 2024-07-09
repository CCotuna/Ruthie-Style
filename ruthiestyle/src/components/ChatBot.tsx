"use client"
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

const faqsJson = [
    {
        "id": 1,
        "question": "Din ce materiale sunt confectionate produsele?",
        "answer": " Toate produsele sunt confectionate din materiale de calitate superioara, cum ar fi: piele naturala, piele ecologica, catifea, satin, bumbac, lana, poliester, etc.",
        "subquestions": [
            {
                "id": 1,
                "question": "Ce este pielea ecologica?",
                "answer": "Pielea ecologica este un material sintetic, care imita aspectul si textura pielii naturale. Este o alternativa accesibila si prietenoasa cu animalele, fiind realizata din poliester si poliuretan."
            },
            {
                "id": 2,
                "question": "Ce este catifeaua?",
                "answer": "Catifeaua este un material textil moale si fin, care prezinta o suprafata lucioasa si matasoasa. Este realizata din bumbac, matase, poliester sau alte fibre sintetice."
            }
        ]
    },
    {
        "id": 2,
        "question": "Cum se intretin produsele?",
        "answer": "Pentru a pastra produsele in conditii optime, este recomandat sa respectati instructiunile de intretinere de pe eticheta produsului. In general, majoritatea produselor se pot spala manual sau la masina de spalat, in functie de materialul din care sunt confectionate.",
        "subquestions": [
            {
                "id": 1,
                "question": "Cum se spala produsele din piele naturala?",
                "answer": "Produsele din piele naturala nu se spala la masina de spalat. Este recomandat sa curatati produsele cu o carpa umeda si sa le lasati la uscat la temperatura camerei. Pentru a prelungi durata de viata a produselor, puteti folosi un produs special pentru curatarea pielii naturale."
            },
            {
                "id": 2,
                "question": "Cum se spala produsele din lana?",
                "answer": "Produsele din lana se spala manual, cu apa calduta si detergent special pentru lana. Este important sa respectati instructiunile de pe eticheta produsului si sa evitati stoarcerea sau frecarea produselor."
            }
        ]
    },
    {
        "id": 3,
        "question": "Care este politica de retur?",
        "answer": "In cazul in care nu sunteti multumit de produsul achizitionat, aveti dreptul sa il returnati in termen de 14 zile de la primirea coletului. Va rugam sa ne contactati pentru a primi informatiile necesare pentru returnare.",
        "subquestions": [
            {
                "id": 1,
                "question": "Care sunt conditiile de returnare?",
                "answer": "Produsul trebuie sa fie in aceeasi stare in care a fost livrat, fara urme de uzura sau deteriorare. Este necesar sa returnati produsul in ambalajul original, impreuna cu toate accesoriile si documentele primite."
            },
            {
                "id": 2,
                "question": "Care sunt costurile de returnare?",
                "answer": "Costurile de returnare sunt suportate de catre client. Va recomandam sa optati pentru o metoda de transport sigura si sa asigurati coletul pentru a evita eventualele probleme."
            }
        ]
    },
    {
        "id": 4,
        "question": "Cum pot plasa o comanda?",
        "answer": "Pentru a plasa o comanda, va rugam sa accesati site-ul nostru si sa adaugati produsele dorite in cosul de cumparaturi. Dupa ce ati adaugat toate produsele, puteti finaliza comanda si veti primi un e-mail de confirmare.",
        "subquestions": [
            {
                "id": 1,
                "question": "Care sunt metodele de plata disponibile?",
                "answer": "Puteti plati cu cardul bancar, prin transfer bancar sau la primirea coletului. Toate platile sunt securizate si procesate de catre partenerii nostri de plata."
            },
            {
                "id": 2,
                "question": "Pot modifica o comanda plasata?",
                "answer": "Daca doriti sa modificati o comanda plasata, va rugam sa ne contactati cat mai curand posibil. In functie de stadiul de procesare al comenzii, putem incerca sa facem modificarile solicitate."
            }
        ]
    },
    {
        "id": 5,
        "question": "Care este termenul de livrare?",
        "answer": "Termenul de livrare depinde de produsul comandat si de adresa de livrare. In general, comenzile sunt livrate in termen de 2-5 zile lucratoare de la confirmarea comenzii.",
        "subquestions": [
            {
                "id": 1,
                "question": "Pot urmari statusul comenzii?",
                "answer": "Da, puteti urmari statusul comenzii accesand contul dumneavoastra de client. Veti primi un e-mail de confirmare odata ce comanda a fost expediata, impreuna cu informatiile de urmarire a coletului."
            },
            {
                "id": 2,
                "question": "Ce fac daca nu primesc comanda la timp?",
                "answer": "Daca nu primiti comanda la timp, va rugam sa ne contactati pentru a verifica statusul livrarii. In functie de situatie, putem incerca sa identificam problema si sa gasim o solutie."
            }
        ]
    },
    {
        "id": 6,
        "question": "Cum pot contacta echipa de suport?",
        "answer": "Pentru a contacta echipa de suport, va rugam sa ne trimiteti un e-mail la adresa de contact sau sa ne sunati la numarul de telefon afisat pe site.",
        "subquestions": [
            {
                "id": 1,
                "question": "Care este programul de lucru al echipei de suport?",
                "answer": "Echipa noastra de suport este disponibila de luni pana vineri, intre orele 9:00 si 17:00. Va rugam sa ne contactati in intervalul orar mentionat pentru a primi asistenta."
            },
            {
                "id": 2,
                "question": "Pot primi asistenta in limba engleza?",
                "answer": "Da, puteti primi asistenta in limba engleza. Echipa noastra de suport este formata din operatori care vorbesc fluent limba engleza si va pot ajuta cu orice informatii sau solicitari."
            }
        ]
    }
]

interface Faq {
    id: number;
    question: string;
    answer: string;
    subquestions?: Faq[];
}

const TypingEffect: React.FC<{ text: string  }> = ({ text }) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            setDisplayedText(text.substring(0, index + 1));
            index++;
            if (index === text.length) {
                clearInterval(intervalId);
            }
        }, 20);
        return () => clearInterval(intervalId);
    }, [text]);

    return <p>{displayedText}</p>;
};

const Chatbot: React.FC = () => {
    const [currentFaqs, setCurrentFaqs] = useState<Faq[]>(faqsJson);
    const [chatHistory, setChatHistory] = useState<string[]>([]);
    const [selectedQuestion, setSelectedQuestion] = useState<Faq | null>(null);

    const handleQuestionClick = (faq: Faq) => {
        setChatHistory((prev) => [...prev, faq.question]);
        setSelectedQuestion(faq);
        if (faq.subquestions) {
            setCurrentFaqs(faq.subquestions);
        } else {
            setCurrentFaqs([]);
        }
    };

    const handleBackToMain = () => {
        setChatHistory([]);
        setCurrentFaqs(faqsJson);
        setSelectedQuestion(null);
    };

    const [isOpen, setIsOpen] = useState(false);

    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className="relative">
            <div className='text-brand-darkgreen cursor-pointer border-b-2 mb-3 block lg:hidden'>
                <button onClick={handleMenuClick}>
                <span className='text-red-500 font-bold'>
                - Ruthie Chat -
                </span>
                </button> 
            </div>
                <button
                    className={clsx(
                        " z-50 font-medium text-brand-darkgreen cursor-pointer",
                        isOpen && "hidden", !isOpen && "hidden lg:block"
                    )}
                    onClick={handleMenuClick}
                >
                    <svg viewBox="0 0 100 80" width="40" height="40">
                        <rect
                            y="20"
                            width="80"
                            height="10"
                            rx="10"
                            ry="10"
                            fill="#082D0F"
                        ></rect>
                        <rect
                            y="40"
                            width="80"
                            height="10"
                            rx="5"
                            ry="5"
                            fill="#0D9488"
                        ></rect>
                        <rect
                            y="60"
                            width="80"
                            height="10"
                            rx="15"
                            ry="5"
                            fill="#082D0F"
                        ></rect>
                    </svg>
                </button>
            </div>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex flex-col bg-white p-4">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-bold">RuthieChat</h2>
                        <button
                            className="font-medium text-brand-darkgreen cursor-pointer"
                            onClick={handleMenuClick}
                        >
                            <svg viewBox="0 0 100 80" width="40" height="40">
                                <rect
                                    y="0"
                                    width="80"
                                    height="10"
                                    rx="10"
                                    ry="10"
                                    fill="#082D0F"
                                ></rect>
                                <rect
                                    y="20"
                                    width="80"
                                    height="10"
                                    rx="5"
                                    ry="5"
                                    fill="#0D9488"
                                ></rect>
                                <rect
                                    y="40"
                                    width="80"
                                    height="10"
                                    rx="15"
                                    ry="5"
                                    fill="#082D0F"
                                ></rect>
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1 overflow-y-auto space-y-4">
                        {chatHistory.length === 0 && (
                            <div className="bg-gray-100 p-3 rounded text-left">
                                <p className="font-semibold">
                                <TypingEffect text={"Hello! How can we assist you today?"} /></p>
                            </div>
                        )}
                        {chatHistory.map((message, index) => (
                            <div key={index} className="bg-gray-100 p-3 rounded">
                                <p className="font-semibold">{message}</p>
                            </div>
                        ))}
                        {selectedQuestion && (
                            <div className="bg-blue-100 p-3 rounded mt-2">
                                <TypingEffect text={selectedQuestion.answer} />
                            </div>
                        )}
                        {currentFaqs.length > 0 && (
                            <div className="bg-gray-100 text-left p-3 rounded mt-4">
                                {selectedQuestion ? (
                                    <p className="font-semibold ms-1">Other frequent asked questions</p>
                                ) : (
                                    <p className="font-semibold ms-1">Frequent asked questions</p>
                                )}
                                {currentFaqs.map((faq) => (
                                    <div key={faq.id} className="mt-2">
                                        <div
                                            className="font-semibold cursor-pointer bg-gray-200 p-3 rounded w-fit"
                                            onClick={() => handleQuestionClick(faq)}
                                        >
                                            {faq.question}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        {selectedQuestion && (
                            <button
                                className="mt-4 bg-red-500 text-white p-2 rounded"
                                onClick={handleBackToMain}
                            >
                                Intrebari Principale
                            </button>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};


export default Chatbot;
