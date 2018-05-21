
/** 
 *  1. Input components have to HAVE ID 
 *  3. ID has to be unique
 *  4. classes should be strings concated with space
 *  5. pdf_style should be a string or an array of strings or 'none' which means not print to pdf
 *  6. HPText -- types in text_arr, 'p', 'span', 'html'. the 'html' type has to have 'html' and 'text' attribute
 *  7. HPTextarea -- types in body, 'TA_Table' (default), 'TA_Text'
 *  8. HPTable -- tr_arr, td_arr should not have pdf_style (no use).
 * 
 */
export const components = [
    {
        type: 'HPText',
        text_arr: [
            {
                type: 'p',
                classes: 'header1',
                pdf_style: 'header1',
                text: 'Analyse your team with an SWOT Analysis',
            }
        ]
    },
    {
        type: 'HPText',
        text_arr: [
            {
                type: 'p',
                classes: 'desc',
                pdf_style: 'none',
                text: 'A SWOT (Strengths, Weaknesses, Opportunities and Threats) Analysis is used to identify a team’s internal strengths and weaknesses (as the team’s current state), as well as opportunities and threats external to the team (as the team’s future state).',                        
            }
        ]
    },
    {
        type: 'HPText',
        text_arr: [
            {
                type: 'p',
                classes: 'desc',
                pdf_style: 'none',
                text: 'Collecting and analysing information is a critical part of any quality improvement process. However, with so many tools to collect and display information, sometimes teams invest too much energy just gathering information, and fail to take action using the information they gathered. This SWOT Analysis builds on current state activities, and helps move organizations beyond collection and analysis to development and implementation of clear action steps. By focusing on action, this SWOT Analysis can become an integral part of the team problem solving process and can a useful tool to identify and implement potential team improvements.',       
            },
        ]
    },
    {
        type: 'HPText',
        text_arr: [
            {
                type: 'p',
                classes: 'desc',
                pdf_style: 'none',
                text: 'Populate the tables below.  This simple worksheet can form the starting-point for developing your team.  A SWOT analysis is best done collectively with team members, but it can also form the basis for your own independent analysis and thinking as a team leader. ',        
            },
        ]
    },

    //Table 1
    {
        type: 'HPText',
        pdf_style: 'smallMarginBottom',
        text_arr: [
            {
                type: 'p',
                classes: 'header3',
                pdf_style: 'header3',
                text: '(1) Identify the Team Objective'
            }
        ]
    },
    {
        id: 'table1',
        type: 'HPTable',
        classes: 'table hptable',
        div_classes: "form-group table-responsive",
        pdf_style: 'paraMarginBottom',
        tr_arr: [
            {
                classes: 'tr_header',
                td_arr: [
                    {
                        type: 'EmbededTD',
                        classes: '',
                        embeded_arr: [
                            {
                                type: 'HPText',
                                text_arr: [
                                    {
                                        type: 'span',
                                        classes: 'span_label',
                                        pdf_style: 'spanLabel',
                                        text: 'Focal Team: ',        
                                    },
                                    {
                                        type: 'span',
                                        classes: '',
                                        pdf_style: '',
                                        text: 'Describe a team or group that you currently (or recently) worked in.',        
                                    },                                    
                                ]
                        
                            },
                        ]
                    },
                ],
            },
            {
                classes: '',
                td_arr: [
                    {
                        type: 'EmbededTD',
                        classes: '',
                        pdf_style: 'blueTD',
                        embeded_arr: [
                            {
                                type: 'HPTextarea',
                                classes: '',
                                body: {
                                    id: 'table1_focal_team',
                                    type: 'TA_Text',
                                    classes: 'form-control',
                                    pdf_style: 'oneLine',
                                    default_text: '',
                                }
                            }
                        ]
                    },                    
                ]
            }, 
            {
                classes: 'tr_header',
                td_arr: [
                    {
                        type: 'EmbededTD',
                        classes: '',
                        embeded_arr: [
                            {
                                type: 'HPText',
                                text_arr: [
                                    {
                                        type: 'span',
                                        classes: 'span_label',
                                        pdf_style: 'spanLabel',
                                        text: 'Team Objective: ',        
                                    },
                                    {
                                        type: 'span',
                                        classes: '',
                                        pdf_style: '',
                                        text: 'What is the issue or goal that the team would like to achieve or improve upon?',        
                                    },                                    
                                ]
                        
                            },
                        ]
                    },
                ],
            },
            {
                classes: '',
                td_arr: [
                    {
                        type: 'EmbededTD',
                        classes: '',
                        embeded_arr: [
                            {
                                type: 'HPTextarea',
                                classes: '',
                                body: {
                                    id: 'table1_team_objective',
                                    type: 'TA_Text',
                                    classes: 'form-control',
                                    pdf_style: 'oneLine',
                                    default_text: '',
                                }
                            }
                        ]
                    },                    
                ]
            },
        ],
    },

    //Table 2
    {
        type: 'HPText',
        pdf_style: 'smallMarginBottom',
        text_arr: [
            {
                type: 'p',
                classes: 'header3',
                pdf_style: 'header3',
                text: '(2) Identify the Strengths'
            }
        ]
    },
    {
        id: 'table2',
        type: 'HPTable',
        classes: 'table hptable',
        div_classes: "form-group table-responsive",
        pdf_style: 'paraMarginBottom',
        pdf_width: 'table3',
        tr_arr: [
            {
                classes: 'tr_header',
                td_arr: [
                    {
                        type: 'TextTD',
                        text: '',
                    },
                    {
                        type: 'EmbededTD',
                        classes: 'td3',
                        embeded_arr: [
                            {
                                type: 'HPText',
                                pdf_style: 'smallMarginBottom',
                                text_arr: [
                                    {
                                        type: 'p',
                                        classes: 'span_label',
                                        pdf_style: ['spanLabel', 'pLabel'],
                                        text: 'Strengths',
                                    },
                                    {
                                        type: 'p',
                                        classes: '',
                                        pdf_style: '',
                                        text: 'What are your current team’s strengths?',
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        type: 'EmbededTD',
                        classes: 'td3',
                        embeded_arr: [
                            {
                                type: 'HPText',
                                pdf_style: 'smallMarginBottom',
                                text_arr: [
                                    {
                                        type: 'p',
                                        classes: 'span_label',
                                        pdf_style: ['spanLabel', 'pLabel'],
                                        text: 'Preserve and Protect',
                                    },
                                    {
                                        type: 'p',
                                        classes: '',
                                        pdf_style: '',
                                        text: 'What actions will we need to take to preserve and protect those current strengths?',
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        type: 'EmbededTD',
                        classes: 'td3',
                        embeded_arr: [
                            {
                                type: 'HPText',
                                pdf_style: 'smallMarginBottom',
                                text_arr: [
                                    {
                                        type: 'p',
                                        classes: 'span_label',
                                        pdf_style: ['spanLabel', 'pLabel'],
                                        text: 'Prevent',
                                    },
                                    {
                                        type: 'p',
                                        classes: '',
                                        pdf_style: '',
                                        text: 'How can we prevent slippage of existing strengths?',
                                    }
                                ]
                            }
                        ]
                    },
                ],
            },
            {
                classes: 'tr_example',
                td_arr: [
                    {
                        type: 'TextTD',
                        pdf_style: 'exampleTD',
                        text: 'e.g.',
                    },
                    {
                        type: 'TextTD',
                        pdf_style: 'exampleTD',
                        text: 'Knowledgeable and adaptable employees',
                    },
                    {
                        type: 'TextTD',
                        pdf_style: 'exampleTD',
                        text: 'Update Workforce Development Plan',
                    },
                    {
                        type: 'TextTD',
                        pdf_style: 'exampleTD',
                        text: 'Pay skilled employees better than competition',
                    },

                ],
            },
            {
                td_arr: [
                    {
                        type: 'TextTD',
                        pdf_style: '',
                        text: '1',
                    },
                    {
                        type: 'EmbededTD',
                        classes: '',
                        embeded_arr: [
                            {
                                type: 'HPTextarea',
                                classes: '',
                                body: {
                                    id: 'table2_1_strengths',
                                    type: 'TA_Text',
                                    classes: 'form-control',
                                    pdf_style: '',
                                    default_text: '',
                                }
                            }
                        ]
                    },                    
                    {
                        type: 'EmbededTD',
                        classes: '',
                        embeded_arr: [
                            {
                                type: 'HPTextarea',
                                classes: '',
                                body: {
                                    id: 'table2_1_preserve_protect',
                                    type: 'TA_Text',
                                    classes: 'form-control',
                                    pdf_style: '',
                                    default_text: '',
                                }
                            }
                        ]
                    },                    
                    {
                        type: 'EmbededTD',
                        classes: '',
                        embeded_arr: [
                            {
                                type: 'HPTextarea',
                                classes: '',
                                body: {
                                    id: 'table2_1_prevent',
                                    type: 'TA_Text',
                                    classes: 'form-control',
                                    pdf_style: '',
                                    default_text: '',
                                }
                            }
                        ]
                    },                    
                ],
            },
            {
                td_arr: [
                    {
                        type: 'TextTD',
                        pdf_style: '',
                        text: '2',
                    },
                    {
                        type: 'EmbededTD',
                        classes: '',
                        embeded_arr: [
                            {
                                type: 'HPTextarea',
                                classes: '',
                                body: {
                                    id: 'table2_2_strengths',
                                    type: 'TA_Text',
                                    classes: 'form-control',
                                    pdf_style: '',
                                    default_text: '',
                                }
                            }
                        ]
                    },                    
                    {
                        type: 'EmbededTD',
                        classes: '',
                        embeded_arr: [
                            {
                                type: 'HPTextarea',
                                classes: '',
                                body: {
                                    id: 'table2_2_preserve_protect',
                                    type: 'TA_Text',
                                    classes: 'form-control',
                                    pdf_style: '',
                                    default_text: '',
                                }
                            }
                        ]
                    },                    
                    {
                        type: 'EmbededTD',
                        classes: '',
                        embeded_arr: [
                            {
                                type: 'HPTextarea',
                                classes: '',
                                body: {
                                    id: 'table2_2_prevent',
                                    type: 'TA_Text',
                                    classes: 'form-control',
                                    pdf_style: '',
                                    default_text: '',
                                }
                            }
                        ]
                    },                    
                ],
            },
            {
                td_arr: [
                    {
                        type: 'TextTD',
                        pdf_style: '',
                        text: '3',
                    },
                    {
                        type: 'EmbededTD',
                        classes: '',
                        embeded_arr: [
                            {
                                type: 'HPTextarea',
                                classes: '',
                                body: {
                                    id: 'table2_3_strengths',
                                    type: 'TA_Text',
                                    classes: 'form-control',
                                    pdf_style: '',
                                    default_text: '',
                                }
                            }
                        ]
                    },                    
                    {
                        type: 'EmbededTD',
                        classes: '',
                        embeded_arr: [
                            {
                                type: 'HPTextarea',
                                classes: '',
                                body: {
                                    id: 'table2_3_preserve_protect',
                                    type: 'TA_Text',
                                    classes: 'form-control',
                                    pdf_style: '',
                                    default_text: '',
                                }
                            }
                        ]
                    },                    
                    {
                        type: 'EmbededTD',
                        classes: '',
                        embeded_arr: [
                            {
                                type: 'HPTextarea',
                                classes: '',
                                body: {
                                    id: 'table2_3_prevent',
                                    type: 'TA_Text',
                                    classes: 'form-control',
                                    pdf_style: '',
                                    default_text: '',
                                }
                            }
                        ]
                    },                    
                ],
            },
            {
                td_arr: [
                    {
                        type: 'TextTD',
                        pdf_style: '',
                        text: '4',
                    },
                    {
                        type: 'EmbededTD',
                        classes: '',
                        embeded_arr: [
                            {
                                type: 'HPTextarea',
                                classes: '',
                                body: {
                                    id: 'table2_4_strengths',
                                    type: 'TA_Text',
                                    classes: 'form-control',
                                    pdf_style: '',
                                    default_text: '',
                                }
                            }
                        ]
                    },                    
                    {
                        type: 'EmbededTD',
                        classes: '',
                        embeded_arr: [
                            {
                                type: 'HPTextarea',
                                classes: '',
                                body: {
                                    id: 'table2_4_preserve_protect',
                                    type: 'TA_Text',
                                    classes: 'form-control',
                                    pdf_style: '',
                                    default_text: '',
                                }
                            }
                        ]
                    },                    
                    {
                        type: 'EmbededTD',
                        classes: '',
                        embeded_arr: [
                            {
                                type: 'HPTextarea',
                                classes: '',
                                body: {
                                    id: 'table2_4_prevent',
                                    type: 'TA_Text',
                                    classes: 'form-control',
                                    pdf_style: '',
                                    default_text: '',
                                }
                            }
                        ]
                    },                    
                ],
            },
        ],        
    },


    //Table 3
    {
        type: 'HPText',
        pdf_style: 'smallMarginBottom',
        text_arr: [
            {
                type: 'p',
                classes: 'header3',
                pdf_style: 'header3',
                text: '(3) Identify the Weaknesses'
            }
        ]
    },
    {
        id: 'table3',
        type: 'HPTable',
        classes: 'table hptable',
        div_classes: "form-group table-responsive",
        pdf_style: 'paraMarginBottom',
        pdf_width: 'table3',
        tr_arr: [
            {
                classes: 'tr_header',
                td_arr: [
                    {
                        type: 'TextTD',
                        text: '',
                    },
                    {
                        type: 'EmbededTD',
                        classes: 'td3',
                        embeded_arr: [
                            {
                                type: 'HPText',
                                pdf_style: 'smallMarginBottom',
                                text_arr: [
                                    {
                                        type: 'p',
                                        classes: 'span_label',
                                        pdf_style: ['spanLabel', 'pLabel'],
                                        text: 'Weaknesses',
                                    },
                                    {
                                        type: 'p',
                                        classes: '',
                                        pdf_style: '',
                                        text: 'What are your current team’s weaknesses?',
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        type: 'EmbededTD',
                        classes: 'td3',
                        embeded_arr: [
                            {
                                type: 'HPText',
                                pdf_style: 'smallMarginBottom',
                                text_arr: [
                                    {
                                        type: 'p',
                                        classes: 'span_label',
                                        pdf_style: ['spanLabel', 'pLabel'],
                                        text: 'Mitigate',
                                    },
                                    {
                                        type: 'p',
                                        classes: '',
                                        pdf_style: '',
                                        text: 'What can mitigate these weaknesses, to reduce their power or influence?',
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        type: 'EmbededTD',
                        classes: 'td3',
                        embeded_arr: [
                            {
                                type: 'HPText',
                                pdf_style: 'smallMarginBottom',
                                text_arr: [
                                    {
                                        type: 'p',
                                        classes: 'span_label',
                                        pdf_style: ['spanLabel', 'pLabel'],
                                        text: 'Overcome',
                                    },
                                    {
                                        type: 'p',
                                        classes: '',
                                        pdf_style: '',
                                        text: 'What would it take to overcome the weaknesses?',
                                    }
                                ]
                            }
                        ]
                    },
                ],
            },
            {
                classes: 'tr_example',
                td_arr: [
                    {
                        type: 'TextTD',
                        pdf_style: 'exampleTD',
                        text: 'e.g.',
                    },
                    {
                        type: 'TextTD',
                        pdf_style: 'exampleTD',
                        text: 'Employees leave for better opportunities',
                    },
                    {
                        type: 'TextTD',
                        pdf_style: 'exampleTD',
                        text: 'Promote from within',
                    },
                    {
                        type: 'TextTD',
                        pdf_style: 'exampleTD',
                        text: 'Grow the organization so more opportunities are available',
                    },

                ],
            },
            {
                td_arr: [
                    {
                        type: 'TextTD',
                        pdf_style: '',
                        text: '1',
                    },
                    {
                        type: 'EmbededTD',
                        classes: '',
                        embeded_arr: [
                            {
                                type: 'HPTextarea',
                                classes: '',
                                body: {
                                    id: 'table3_1_weakness',
                                    type: 'TA_Text',
                                    classes: 'form-control',
                                    pdf_style: '',
                                    default_text: '',
                                }
                            }
                        ]
                    },                    
                    {
                        type: 'EmbededTD',
                        classes: '',
                        embeded_arr: [
                            {
                                type: 'HPTextarea',
                                classes: '',
                                body: {
                                    id: 'table3_1_mitigate',
                                    type: 'TA_Text',
                                    classes: 'form-control',
                                    pdf_style: '',
                                    default_text: '',
                                }
                            }
                        ]
                    },                    
                    {
                        type: 'EmbededTD',
                        classes: '',
                        embeded_arr: [
                            {
                                type: 'HPTextarea',
                                classes: '',
                                body: {
                                    id: 'table3_1_overcome',
                                    type: 'TA_Text',
                                    classes: 'form-control',
                                    pdf_style: '',
                                    default_text: '',
                                }
                            }
                        ]
                    },                    
                ],
            },
            {
                td_arr: [
                    {
                        type: 'TextTD',
                        pdf_style: '',
                        text: '2',
                    },
                    {
                        type: 'EmbededTD',
                        classes: '',
                        embeded_arr: [
                            {
                                type: 'HPTextarea',
                                classes: '',
                                body: {
                                    id: 'table3_2_weakness',
                                    type: 'TA_Text',
                                    classes: 'form-control',
                                    pdf_style: '',
                                    default_text: '',
                                }
                            }
                        ]
                    },                    
                    {
                        type: 'EmbededTD',
                        classes: '',
                        embeded_arr: [
                            {
                                type: 'HPTextarea',
                                classes: '',
                                body: {
                                    id: 'table3_2_mitigate',
                                    type: 'TA_Text',
                                    classes: 'form-control',
                                    pdf_style: '',
                                    default_text: '',
                                }
                            }
                        ]
                    },                    
                    {
                        type: 'EmbededTD',
                        classes: '',
                        embeded_arr: [
                            {
                                type: 'HPTextarea',
                                classes: '',
                                body: {
                                    id: 'table3_2_overcome',
                                    type: 'TA_Text',
                                    classes: 'form-control',
                                    pdf_style: '',
                                    default_text: '',
                                }
                            }
                        ]
                    },                    
                ],
            },
            {
                td_arr: [
                    {
                        type: 'TextTD',
                        pdf_style: '',
                        text: '3',
                    },
                    {
                        type: 'EmbededTD',
                        classes: '',
                        embeded_arr: [
                            {
                                type: 'HPTextarea',
                                classes: '',
                                body: {
                                    id: 'table3_3_weakness',
                                    type: 'TA_Text',
                                    classes: 'form-control',
                                    pdf_style: '',
                                    default_text: '',
                                }
                            }
                        ]
                    },                    
                    {
                        type: 'EmbededTD',
                        classes: '',
                        embeded_arr: [
                            {
                                type: 'HPTextarea',
                                classes: '',
                                body: {
                                    id: 'table3_3_mitigate',
                                    type: 'TA_Text',
                                    classes: 'form-control',
                                    pdf_style: '',
                                    default_text: '',
                                }
                            }
                        ]
                    },                    
                    {
                        type: 'EmbededTD',
                        classes: '',
                        embeded_arr: [
                            {
                                type: 'HPTextarea',
                                classes: '',
                                body: {
                                    id: 'table3_3_overcome',
                                    type: 'TA_Text',
                                    classes: 'form-control',
                                    pdf_style: '',
                                    default_text: '',
                                }
                            }
                        ]
                    },                    
                ],
            },
            {
                td_arr: [
                    {
                        type: 'TextTD',
                        pdf_style: '',
                        text: '4',
                    },
                    {
                        type: 'EmbededTD',
                        classes: '',
                        embeded_arr: [
                            {
                                type: 'HPTextarea',
                                classes: '',
                                body: {
                                    id: 'table3_4_weakness',
                                    type: 'TA_Text',
                                    classes: 'form-control',
                                    pdf_style: '',
                                    default_text: '',
                                }
                            }
                        ]
                    },                    
                    {
                        type: 'EmbededTD',
                        classes: '',
                        embeded_arr: [
                            {
                                type: 'HPTextarea',
                                classes: '',
                                body: {
                                    id: 'table3_4_mitigate',
                                    type: 'TA_Text',
                                    classes: 'form-control',
                                    pdf_style: '',
                                    default_text: '',
                                }
                            }
                        ]
                    },                    
                    {
                        type: 'EmbededTD',
                        classes: '',
                        embeded_arr: [
                            {
                                type: 'HPTextarea',
                                classes: '',
                                body: {
                                    id: 'table3_4_overcome',
                                    type: 'TA_Text',
                                    classes: 'form-control',
                                    pdf_style: '',
                                    default_text: '',
                                }
                            }
                        ]
                    },                    
                ],
            },
        ],        
    },




    //Table 4
    {
        type: 'HPText',
        pdf_style: 'smallMarginBottom',
        text_arr: [
            {
                type: 'p',
                classes: 'header3',
                pdf_style: 'header3',
                text: '(4) Identify the Opportunities'
            }
        ]
    },
    {
        id: 'table4',
        type: 'HPTable',
        classes: 'table hptable',
        div_classes: "form-group table-responsive",
        pdf_style: 'paraMarginBottom',
        pdf_width: 'table3',
        tr_arr: [
            {
                classes: 'tr_header',
                td_arr: [
                    {
                        type: 'TextTD',
                        text: '',
                    },
                    {
                        type: 'EmbededTD',
                        classes: 'td3',
                        embeded_arr: [
                            {
                                type: 'HPText',
                                pdf_style: 'smallMarginBottom',
                                text_arr: [
                                    {
                                        type: 'p',
                                        classes: 'span_label',
                                        pdf_style: ['spanLabel', 'pLabel'],
                                        text: 'Opportunities',
                                    },
                                    {
                                        type: 'p',
                                        classes: '',
                                        pdf_style: '',
                                        text: 'What are the opportunities currently available to your team?',
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        type: 'EmbededTD',
                        classes: 'td3',
                        embeded_arr: [
                            {
                                type: 'HPText',
                                pdf_style: 'smallMarginBottom',
                                text_arr: [
                                    {
                                        type: 'p',
                                        classes: 'span_label',
                                        pdf_style: ['spanLabel', 'pLabel'],
                                        text: 'Capitalize',
                                    },
                                    {
                                        type: 'p',
                                        classes: '',
                                        pdf_style: '',
                                        text: 'How can we capitalize on the opportunities?',
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        type: 'EmbededTD',
                        classes: 'td3',
                        embeded_arr: [
                            {
                                type: 'HPText',
                                pdf_style: 'smallMarginBottom',
                                text_arr: [
                                    {
                                        type: 'p',
                                        classes: 'span_label',
                                        pdf_style: ['spanLabel', 'pLabel'],
                                        text: 'Enhance',
                                    },
                                    {
                                        type: 'p',
                                        classes: '',
                                        pdf_style: '',
                                        text: 'What strategies can we design that will enhance those opportunities?',
                                    }
                                ]
                            }
                        ]
                    },
                ],
            },
            {
                classes: 'tr_example',
                td_arr: [
                    {
                        type: 'TextTD',
                        pdf_style: 'exampleTD',
                        text: 'e.g.',
                    },
                    {
                        type: 'TextTD',
                        pdf_style: 'exampleTD',
                        text: 'Customers dissatisfied with rival products',
                    },
                    {
                        type: 'TextTD',
                        pdf_style: 'exampleTD',
                        text: 'Better monitor customer needs',
                    },
                    {
                        type: 'TextTD',
                        pdf_style: 'exampleTD',
                        text: 'Adopt a customer-centric strategy as a point of difference',
                    },

                ],
            },
            {
                td_arr: [
                    {
                        type: 'TextTD',
                        pdf_style: '',
                        text: '1',
                    },
                    {
                        type: 'EmbededTD',
                        classes: '',
                        embeded_arr: [
                            {
                                type: 'HPTextarea',
                                classes: '',
                                body: {
                                    id: 'table4_1_opportunities',
                                    type: 'TA_Text',
                                    classes: 'form-control',
                                    pdf_style: '',
                                    default_text: '',
                                }
                            }
                        ]
                    },                    
                    {
                        type: 'EmbededTD',
                        classes: '',
                        embeded_arr: [
                            {
                                type: 'HPTextarea',
                                classes: '',
                                body: {
                                    id: 'table4_1_capitalize',
                                    type: 'TA_Text',
                                    classes: 'form-control',
                                    pdf_style: '',
                                    default_text: '',
                                }
                            }
                        ]
                    },                    
                    {
                        type: 'EmbededTD',
                        classes: '',
                        embeded_arr: [
                            {
                                type: 'HPTextarea',
                                classes: '',
                                body: {
                                    id: 'table4_1_enhance',
                                    type: 'TA_Text',
                                    classes: 'form-control',
                                    pdf_style: '',
                                    default_text: '',
                                }
                            }
                        ]
                    },                    
                ],
            },
            {
                td_arr: [
                    {
                        type: 'TextTD',
                        pdf_style: '',
                        text: '2',
                    },
                    {
                        type: 'EmbededTD',
                        classes: '',
                        embeded_arr: [
                            {
                                type: 'HPTextarea',
                                classes: '',
                                body: {
                                    id: 'table4_2_opportunities',
                                    type: 'TA_Text',
                                    classes: 'form-control',
                                    pdf_style: '',
                                    default_text: '',
                                }
                            }
                        ]
                    },                    
                    {
                        type: 'EmbededTD',
                        classes: '',
                        embeded_arr: [
                            {
                                type: 'HPTextarea',
                                classes: '',
                                body: {
                                    id: 'table4_2_capitalize',
                                    type: 'TA_Text',
                                    classes: 'form-control',
                                    pdf_style: '',
                                    default_text: '',
                                }
                            }
                        ]
                    },                    
                    {
                        type: 'EmbededTD',
                        classes: '',
                        embeded_arr: [
                            {
                                type: 'HPTextarea',
                                classes: '',
                                body: {
                                    id: 'table4_2_enhance',
                                    type: 'TA_Text',
                                    classes: 'form-control',
                                    pdf_style: '',
                                    default_text: '',
                                }
                            }
                        ]
                    },                    
                ],
            },
            {
                td_arr: [
                    {
                        type: 'TextTD',
                        pdf_style: '',
                        text: '3',
                    },
                    {
                        type: 'EmbededTD',
                        classes: '',
                        embeded_arr: [
                            {
                                type: 'HPTextarea',
                                classes: '',
                                body: {
                                    id: 'table4_3_opportunities',
                                    type: 'TA_Text',
                                    classes: 'form-control',
                                    pdf_style: '',
                                    default_text: '',
                                }
                            }
                        ]
                    },                    
                    {
                        type: 'EmbededTD',
                        classes: '',
                        embeded_arr: [
                            {
                                type: 'HPTextarea',
                                classes: '',
                                body: {
                                    id: 'table4_3_capitalize',
                                    type: 'TA_Text',
                                    classes: 'form-control',
                                    pdf_style: '',
                                    default_text: '',
                                }
                            }
                        ]
                    },                    
                    {
                        type: 'EmbededTD',
                        classes: '',
                        embeded_arr: [
                            {
                                type: 'HPTextarea',
                                classes: '',
                                body: {
                                    id: 'table4_3_enhance',
                                    type: 'TA_Text',
                                    classes: 'form-control',
                                    pdf_style: '',
                                    default_text: '',
                                }
                            }
                        ]
                    },                    
                ],
            },
            {
                td_arr: [
                    {
                        type: 'TextTD',
                        pdf_style: '',
                        text: '4',
                    },
                    {
                        type: 'EmbededTD',
                        classes: '',
                        embeded_arr: [
                            {
                                type: 'HPTextarea',
                                classes: '',
                                body: {
                                    id: 'table4_4_opportunities',
                                    type: 'TA_Text',
                                    classes: 'form-control',
                                    pdf_style: '',
                                    default_text: '',
                                }
                            }
                        ]
                    },                    
                    {
                        type: 'EmbededTD',
                        classes: '',
                        embeded_arr: [
                            {
                                type: 'HPTextarea',
                                classes: '',
                                body: {
                                    id: 'table4_4_capitalize',
                                    type: 'TA_Text',
                                    classes: 'form-control',
                                    pdf_style: '',
                                    default_text: '',
                                }
                            }
                        ]
                    },                    
                    {
                        type: 'EmbededTD',
                        classes: '',
                        embeded_arr: [
                            {
                                type: 'HPTextarea',
                                classes: '',
                                body: {
                                    id: 'table4_4_enhance',
                                    type: 'TA_Text',
                                    classes: 'form-control',
                                    pdf_style: '',
                                    default_text: '',
                                }
                            }
                        ]
                    },                    
                ],
            },
        ],        
    },



    //Table 5
    {
        type: 'HPText',
        pdf_style: 'smallMarginBottom',
        text_arr: [
            {
                type: 'p',
                classes: 'header3',
                pdf_style: 'header3',
                text: '(5) Identify the Threats'
            }
        ]
    },
    {
        id: 'table5',
        type: 'HPTable',
        classes: 'table hptable',
        div_classes: "form-group table-responsive",
        pdf_style: 'paraMarginBottom',
        pdf_width: 'table3',
        tr_arr: [
            {
                classes: 'tr_header',
                td_arr: [
                    {
                        type: 'TextTD',
                        text: '',
                    },
                    {
                        type: 'EmbededTD',
                        classes: 'td3',
                        embeded_arr: [
                            {
                                type: 'HPText',
                                pdf_style: 'smallMarginBottom',
                                text_arr: [
                                    {
                                        type: 'p',
                                        classes: 'span_label',
                                        pdf_style: ['spanLabel', 'pLabel'],
                                        text: 'Threats',
                                    },
                                    {
                                        type: 'p',
                                        classes: '',
                                        pdf_style: '',
                                        text: 'Internal and/or external factors that may undermine the team?',
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        type: 'EmbededTD',
                        classes: 'td3',
                        embeded_arr: [
                            {
                                type: 'HPText',
                                pdf_style: 'smallMarginBottom',
                                text_arr: [
                                    {
                                        type: 'p',
                                        classes: 'span_label',
                                        pdf_style: ['spanLabel', 'pLabel'],
                                        text: 'Prevent',
                                    },
                                    {
                                        type: 'p',
                                        classes: '',
                                        pdf_style: '',
                                        text: 'What can prevent these threats in the future?',
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        type: 'EmbededTD',
                        classes: 'td3',
                        embeded_arr: [
                            {
                                type: 'HPText',
                                pdf_style: 'smallMarginBottom',
                                text_arr: [
                                    {
                                        type: 'p',
                                        classes: 'span_label',
                                        pdf_style: ['spanLabel', 'pLabel'],
                                        text: 'Isolate',
                                    },
                                    {
                                        type: 'p',
                                        classes: '',
                                        pdf_style: '',
                                        text: 'How can threats be isolated?',
                                    }
                                ]
                            }
                        ]
                    },
                ],
            },
            {
                classes: 'tr_example',
                td_arr: [
                    {
                        type: 'TextTD',
                        pdf_style: 'exampleTD',
                        text: 'e.g.',
                    },
                    {
                        type: 'TextTD',
                        pdf_style: 'exampleTD',
                        text: 'Competitors hire away most skilled employees',
                    },
                    {
                        type: 'TextTD',
                        pdf_style: 'exampleTD',
                        text: 'Survey to understand what motivates employees to stay',
                    },
                    {
                        type: 'TextTD',
                        pdf_style: 'exampleTD',
                        text: 'Keep benefits competitive and leverage our positive culture',
                    },

                ],
            },
            {
                td_arr: [
                    {
                        type: 'TextTD',
                        pdf_style: '',
                        text: '1',
                    },
                    {
                        type: 'EmbededTD',
                        classes: '',
                        embeded_arr: [
                            {
                                type: 'HPTextarea',
                                classes: '',
                                body: {
                                    id: 'table5_1_threats',
                                    type: 'TA_Text',
                                    classes: 'form-control',
                                    pdf_style: '',
                                    default_text: '',
                                }
                            }
                        ]
                    },                    
                    {
                        type: 'EmbededTD',
                        classes: '',
                        embeded_arr: [
                            {
                                type: 'HPTextarea',
                                classes: '',
                                body: {
                                    id: 'table5_1_prevent',
                                    type: 'TA_Text',
                                    classes: 'form-control',
                                    pdf_style: '',
                                    default_text: '',
                                }
                            }
                        ]
                    },                    
                    {
                        type: 'EmbededTD',
                        classes: '',
                        embeded_arr: [
                            {
                                type: 'HPTextarea',
                                classes: '',
                                body: {
                                    id: 'table5_1_isolate',
                                    type: 'TA_Text',
                                    classes: 'form-control',
                                    pdf_style: '',
                                    default_text: '',
                                }
                            }
                        ]
                    },                    
                ],
            },
            {
                td_arr: [
                    {
                        type: 'TextTD',
                        pdf_style: '',
                        text: '2',
                    },
                    {
                        type: 'EmbededTD',
                        classes: '',
                        embeded_arr: [
                            {
                                type: 'HPTextarea',
                                classes: '',
                                body: {
                                    id: 'table5_2_threats',
                                    type: 'TA_Text',
                                    classes: 'form-control',
                                    pdf_style: '',
                                    default_text: '',
                                }
                            }
                        ]
                    },                    
                    {
                        type: 'EmbededTD',
                        classes: '',
                        embeded_arr: [
                            {
                                type: 'HPTextarea',
                                classes: '',
                                body: {
                                    id: 'table5_2_prevent',
                                    type: 'TA_Text',
                                    classes: 'form-control',
                                    pdf_style: '',
                                    default_text: '',
                                }
                            }
                        ]
                    },                    
                    {
                        type: 'EmbededTD',
                        classes: '',
                        embeded_arr: [
                            {
                                type: 'HPTextarea',
                                classes: '',
                                body: {
                                    id: 'table5_2_isolate',
                                    type: 'TA_Text',
                                    classes: 'form-control',
                                    pdf_style: '',
                                    default_text: '',
                                }
                            }
                        ]
                    },                    
                ],
            },
            {
                td_arr: [
                    {
                        type: 'TextTD',
                        pdf_style: '',
                        text: '3',
                    },
                    {
                        type: 'EmbededTD',
                        classes: '',
                        embeded_arr: [
                            {
                                type: 'HPTextarea',
                                classes: '',
                                body: {
                                    id: 'table5_3_threats',
                                    type: 'TA_Text',
                                    classes: 'form-control',
                                    pdf_style: '',
                                    default_text: '',
                                }
                            }
                        ]
                    },                    
                    {
                        type: 'EmbededTD',
                        classes: '',
                        embeded_arr: [
                            {
                                type: 'HPTextarea',
                                classes: '',
                                body: {
                                    id: 'table5_3_prevent',
                                    type: 'TA_Text',
                                    classes: 'form-control',
                                    pdf_style: '',
                                    default_text: '',
                                }
                            }
                        ]
                    },                    
                    {
                        type: 'EmbededTD',
                        classes: '',
                        embeded_arr: [
                            {
                                type: 'HPTextarea',
                                classes: '',
                                body: {
                                    id: 'table5_3_isolate',
                                    type: 'TA_Text',
                                    classes: 'form-control',
                                    pdf_style: '',
                                    default_text: '',
                                }
                            }
                        ]
                    },                    
                ],
            },
            {
                td_arr: [
                    {
                        type: 'TextTD',
                        pdf_style: '',
                        text: '4',
                    },
                    {
                        type: 'EmbededTD',
                        classes: '',
                        embeded_arr: [
                            {
                                type: 'HPTextarea',
                                classes: '',
                                body: {
                                    id: 'table5_4_threats',
                                    type: 'TA_Text',
                                    classes: 'form-control',
                                    pdf_style: '',
                                    default_text: '',
                                }
                            }
                        ]
                    },                    
                    {
                        type: 'EmbededTD',
                        classes: '',
                        embeded_arr: [
                            {
                                type: 'HPTextarea',
                                classes: '',
                                body: {
                                    id: 'table5_4_prevent',
                                    type: 'TA_Text',
                                    classes: 'form-control',
                                    pdf_style: '',
                                    default_text: '',
                                }
                            }
                        ]
                    },                    
                    {
                        type: 'EmbededTD',
                        classes: '',
                        embeded_arr: [
                            {
                                type: 'HPTextarea',
                                classes: '',
                                body: {
                                    id: 'table5_4_isolate',
                                    type: 'TA_Text',
                                    classes: 'form-control',
                                    pdf_style: '',
                                    default_text: '',
                                }
                            }
                        ]
                    },                    
                ],
            },
        ],        
    },


];
