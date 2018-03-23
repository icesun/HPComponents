import '../StyleSheets/PdfTable.scss'
import '../StyleSheets/PdfTextArea.scss'
import '../StyleSheets/StringComponent.scss'

/** 
 *  1. Input components have to HAVE ID
 *  2. First level components have to HAVE ID
 * 
 * 
 */
export const components = [
    {
        type: 'StringComponent',
        tag: 'p',
        classes: 'header1',
        pdf_style: 'header1',
        text: 'Value Proposition Canvas',
    },
    {
        type: 'StringComponent',
        tag: 'p',
        classes: 'header2',
        pdf_style: 'header2',
        text: '',

    },
    {
        type: 'StringComponent',
        tag: 'p',
        classes: 'header_blue',
        pdf_style: 'headerline',
        text: 'Value Proposition',
    },

    // Value Proposition Table
    {
        id: 'value_proposition',
        type: 'PdfTable',
        classes: "table pdftable table-noborder",
        div_classes: "form-group table-responsive",
        tr_arr: [
            {
                classes: 'tr_header',
                td_arr: [
                    {type: 'NormalTD', text: 'Products & Services', classes: 'th_first'},
                    {type: 'NormalTD', text: 'Gain Creators', classes: 'th_first'},
                    {type: 'NormalTD', text: 'Pain Relievers', classes: 'th_first'},
                ]                
            },
            {
                classes: 'tr_header',
                td_arr: [
                    {type: 'NormalTD', text: 'Questions to guide response', classes: 'th_second'},
                    {type: 'NormalTD', text: 'Questions to guide response', classes: 'th_second'},
                    {type: 'NormalTD', text: 'Questions to guide response', classes: 'th_second'},
                ]                
            },
            {
                td_arr: [
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'value_products_services', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    },
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'value_gain_creators', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    },
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'value_pain_relievers', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    },
                ]                
            }
        ],
    },

    {
        type: 'StringComponent',
        tag: 'p',
        classes: 'header_yellow',
        text: 'Customer Segment',
    },

    //Customer Segment Table
    {
        id: 'customer_segment',
        type: 'PdfTable',
        classes: "table pdftable",
        div_classes: "form-group table-responsive",
        tr_arr: [
            {
                classes: 'tr_header',
                td_arr: [
                    {type: 'NormalTD', text: 'Customer Job(s)', classes: 'th_first'},
                    {type: 'NormalTD', text: 'Gains', classes: 'th_first'},
                    {type: 'NormalTD', text: 'Pains', classes: 'th_first'},
                ]                
            },
            {
                classes: 'tr_header',
                td_arr: [
                    {type: 'NormalTD', text: 'Questions to guide response', classes: 'th_second'},
                    {type: 'NormalTD', text: 'Questions to guide response', classes: 'th_second'},
                    {type: 'NormalTD', text: 'Questions to guide response', classes: 'th_second'},
                ]                
            },
            {
                td_arr: [
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'customer_customer_jobs', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    },
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'customer_gains', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    },
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'customer_pains', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    },
                ]                
            }
        ],
    },    

    {
        id: 'c4',
        type: 'Button',
        classes: 'btn btn-primary',
        value: 'Submit',
        extra: {
            action: 'saveDB',
        }
    },
    {
        id: 'c5',
        type: 'Button',
        classes: 'btn btn-primary',
        value: 'Download PDF',
        extra: {
            action: 'downloadPDF',
        }
    }
];

export const components_pdfstyles = {
    header1: {
        fontSize: 18,
        bold: true,
        margin: [0, 10] 
    },
    taLabel: {
        fontSize: 14,
        bold: true,
    },
    oneline: {
        margin: [0, 10, 0, 20]
    },
    headerline: {
        fontSize: 16,
    }
};

export const tableWidths = {
    c2: ['25%', '*', '*']
};

