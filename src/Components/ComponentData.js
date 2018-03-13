export const components = [
    {
        id: 'c1',
        type: 'PdfTextArea',
        input: 'YES',
        classes: "form-control pdftextarea ta_medium",
        extra_data: {
            label: 'What is the problem or goal?',
            question: 'Current situation: What is happening now; what is problematic?  Desired future: What is the business need; What does the context/strategy call for?',
        }
    },
    {
        id: 'c2',
        type: 'PdfTable',
        classes: "table pdftable",
        tr_arr: [
            {
                classes: '',
                td_arr: [
                    {text: 'Lever', classes: 'th-black'},
                    {text: 'What’s happening now?', classes: 'td-black'},
                    {text: 'What could you do?', classes: 'td-black'}]
            },
            {
                classes: '',
                td_arr: [
                    {text: 'Leadership commitment(What’s modelled)', classes: 'th-blue'},
                    {text: '', classes: 'td-blue td-embed', embed: 'textarea', input: 'YES'},
                    {text: '', classes: 'td-blue td-embed', embed: 'textarea', input: 'YES'}]
            },
            {
                classes: '',
                td_arr: [
                    {text: 'Values & behaviours(What’s expected)', classes: 'th-blue'},
                    {text: '', classes: 'td-blue td-embed', embed: 'textarea', input: 'YES'},
                    {text: '', classes: 'td-blue td-embed', embed: 'textarea', input: 'YES'}]
            },
            {
                classes: '',
                td_arr: [
                    {text: 'Workforce capabilities(Who’s equipped)', classes: 'th-blue'},
                    {text: '', classes: 'td-blue td-embed', embed: 'textarea', input: 'YES'},
                    {text: '', classes: 'td-blue td-embed', embed: 'textarea', input: 'YES'}]
            },
            {
                classes: '',
                td_arr: [
                    {text: 'Recognition & consequences(What’s reinforced)', classes: 'th-blue'},
                    {text: '', classes: 'td-blue td-embed', embed: 'textarea', input: 'YES'},
                    {text: '', classes: 'td-blue td-embed', embed: 'textarea', input: 'YES'}]
            },
            {
                classes: '',
                td_arr: [
                    {text: 'Practices & procedures(What’s habitual)', classes: 'th-blue'},
                    {text: '', classes: 'td-blue td-embed', embed: 'textarea', input: 'YES'},
                    {text: '', classes: 'td-blue td-embed', embed: 'textarea', input: 'YES'}],
            },
            {
                classes: '',
                td_arr: [
                    {text: 'Underpinning structures(What enables)', classes: 'th-blue'},
                    {text: '', classes: 'td-blue td-embed', embed: 'textarea', input: 'YES'},
                    {text: '', classes: 'td-blue td-embed', embed: 'textarea', input: 'YES'}]
            },
            {
                classes: '',
                td_arr: [
                    {text: 'Monitor & evolve(What’s measured)', classes: 'th-blue'},
                    {text: '', classes: 'td-blue td-embed', embed: 'textarea', input: 'YES'},
                    {text: '', classes: 'td-blue td-embed', embed: 'textarea', input: 'YES'}]
            },
        ],
    },
    {
        id: 'c3',
        type: 'PdfTextArea',
        input: 'YES',
        classes: "form-control pdftextarea ta_medium",
        extra_data: {
            label: 'Action you can take?',
            question: '(Clarify business need; Further investigation to identify levers in play; Explore areas where levers are having different impact; Other…)',
        }
        
    }

];