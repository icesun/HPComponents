export const components = [
    {
        id: 'test_card',
        type: 'HPTable',
        classes: 'table table-bordered table-nest',
        div_classes: "form-group table-responsive table-embed",
        pdf_style: 'paraMarginBottom',
        pdf_width: 'testCard',
        tr_arr: [
            {
                classes: 'tr_header_blue',
                td_arr: [
                    {
                        type: 'TextTD',
                        colspan: 2,
                        pdf_style: 'headerBlueTD',
                        text: 'Design Sprint Text Card',
                    },
                ]
            },
            {
                td_arr: [
                    {
                        type: 'EmbededTD',
                        classes: 'td_th',
                        embeded_arr: [
                            {
                                type: 'HPText',
                                pdf_style: 'smallMarginBottom',
                                text_arr: [
                                    {
                                        type: 'p',
                                        classes: 'span_label',
                                        pdf_style: 'spanLabel',
                                        text: 'Name of Test:',
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        type: 'EmbededTD',
                        classes: 'td_ta',
                        embeded_arr: [
                            {
                                type: 'HPTextarea',
                                classes: '',
                                body: {
                                    id: 'name',
                                    type: 'TA_Text',
                                    classes: 'form-control embed_ta xs_ta',
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
                        type: 'EmbededTD',
                        classes: 'td_th',
                        embeded_arr: [
                            {
                                type: 'HPText',
                                pdf_style: 'smallMarginBottom',
                                text_arr: [
                                    {
                                        type: 'p',
                                        classes: 'span_label',
                                        pdf_style: ['spanLabel', 'pLabel'],
                                        text: 'Hypothesis:',
                                    },
                                    {
                                        type: 'p',
                                        classes: '',
                                        pdf_style: '',
                                        text: 'What assumption will you focus on?',
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        type: 'EmbededTD',
                        classes: 'td_ta',
                        embeded_arr: [
                            {
                                type: 'HPTextarea',
                                classes: '',
                                body: {
                                    id: 'hypothesis',
                                    type: 'TA_Text',
                                    classes: 'form-control embed_ta mid_ta',
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
                        type: 'EmbededTD',
                        classes: 'td_th',
                        embeded_arr: [
                            {
                                type: 'HPText',
                                pdf_style: 'smallMarginBottom',
                                text_arr: [
                                    {
                                        type: 'p',
                                        classes: 'span_label',
                                        pdf_style: ['spanLabel', 'pLabel'],
                                        text: 'Test:',
                                    },
                                    {
                                        type: 'p',
                                        classes: '',
                                        pdf_style: '',
                                        text: 'How will you test your hypothesis?',
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        type: 'EmbededTD',
                        classes: 'td_ta',
                        embeded_arr: [
                            {
                                type: 'HPTextarea',
                                classes: '',
                                body: {
                                    id: 'test',
                                    type: 'TA_Text',
                                    classes: 'form-control embed_ta mid_ta',
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
                        type: 'EmbededTD',
                        classes: 'td_th',
                        embeded_arr: [
                            {
                                type: 'HPText',
                                pdf_style: 'smallMarginBottom',
                                text_arr: [
                                    {
                                        type: 'p',
                                        classes: 'span_label',
                                        pdf_style: ['spanLabel', 'pLabel'],
                                        text: 'Metric:',
                                    },
                                    {
                                        type: 'p',
                                        classes: '',
                                        pdf_style: '',
                                        text: 'How will you measure the results?',
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        type: 'EmbededTD',
                        classes: 'td_ta',
                        embeded_arr: [
                            {
                                type: 'HPTextarea',
                                classes: '',
                                body: {
                                    id: 'metric',
                                    type: 'TA_Text',
                                    classes: 'form-control embed_ta mid_ta',
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
                        type: 'EmbededTD',
                        classes: 'td_th',
                        embeded_arr: [
                            {
                                type: 'HPText',
                                pdf_style: 'smallMarginBottom',
                                text_arr: [
                                    {
                                        type: 'p',
                                        classes: 'span_label',
                                        pdf_style: ['spanLabel', 'pLabel'],
                                        text: 'Criteria:',
                                    },
                                    {
                                        type: 'p',
                                        classes: '',
                                        pdf_style: '',
                                        text: 'How will you know if your hypothesis is correct?',
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        type: 'EmbededTD',
                        classes: 'td_ta',
                        embeded_arr: [
                            {
                                type: 'HPTextarea',
                                classes: '',
                                body: {
                                    id: 'criteria',
                                    type: 'TA_Text',
                                    classes: 'form-control embed_ta mid_ta',
                                    pdf_style: '',
                                    default_text: '',
                                }
                            }
                        ]
                    },                    
                ],
            },
        ],

    }

];