import '../StyleSheets/PdfTable.scss'
import '../StyleSheets/PdfTextArea.scss'

export const title = 'Value Proposition Canvas';

export const api_msg = '';

/** 
 *  1. Input components have to HAVE ID
 *  2. First level components have to HAVE ID
 * 
 * 
 */
export const components = [


    {
        id: 'c1',
        type: 'PdfTextArea',
        classes: "form-control pdftextarea ta_medium",
        div_classes: "form-group",       
        extra: {
            label: 'What is the problem or goal?',
            question: 'Current situation: What is happening now; what is problematic?  Desired future: What is the business need; What does the context/strategy call for?',
        }        
    },

    {
        type: 'StringComponent',
        tag: 'p',
        classes: '',
        text: 'Value Proposition',
    },


    // Value Proposition Table
    {
        id: 'value_proposition',
        type: 'PdfTable',
        classes: "table pdftable",
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
        id: 'c3',
        type: 'PdfTextArea',
        //input: 'YES',
        classes: "form-control pdftextarea ta_medium",
        div_classes: "form-group",       
        extra: {
            label: 'Action you can take?',
            question: '(Clarify business need; Further investigation to identify levers in play; Explore areas where levers are having different impact; Other…)',
        }
        
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
    header: {
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
    }

};

export const tableWidths = {
    c2: ['25%', '*', '*']
};

