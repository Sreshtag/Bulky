
/**
 * Default settings values
 */
export const KEYFIELD = 'name';

/**
 * Columns definition
 * :: valid basic version
 */
export const COLUMNS_DEFINITION_BASIC = [
    {
        type: 'text',
        fieldName: 'accountName',
        label: 'Account Name',
    },
    {
        type: 'phone',
        fieldName: 'phone',
        label: 'Phone Number',
    },
];

/**
 * Columns definition
 * :: with non-whitelisted column keys
 */
export const COLUMNS_DEFINITION_NONWHITELIST = [
    {
        type: 'text',
        fieldName: 'accountName',
        label: 'Account Name',
    },
    {
        type: 'phone',
        fieldName: 'phone',
        label: 'Phone Number',
        sortable: true,
    },
];

/**
 * Columns definition
 * :: used in examples
 */
export const EXAMPLES_COLUMNS_DEFINITION_BASIC = [
    {
        type: 'text',
        fieldName: 'keyinJSON',
        label: 'keyinJSON',
        //initialWidth: 300,
    },
    {
        type: 'text',
        fieldName: 'valueinJSON',
        label: 'valueinJSON',
    }
];

/**
 * Sample expanded rows
 * :: valid basic version, no invalid row IDs
 */
export const EXPANDED_ROWS_BASIC = ['584996-s7', '377526-zg'];

/**
 * Sample expanded rows including some without children content
 * :: valid basic version, no invalid row IDs
 */
export const EXPANDED_ROWS_MISSING_CHILDREN_CONTENT = [
    '584996-s7',
    '377526-zg',
    '816682-xr',
];

/**
 * Sample expanded rows
 * :: with invalid row IDs
 */
export const EXPANDED_ROWS_INVALID = [
    '584996-s7',
    '377526-zg',
    'AWEFUL-bad_iD',
    '882894-s3',
    'PiCkLeS',
    '31337-ID',
];

/**
 * Sample selected rows
 * :: valid basic version, no invalid row IDs
 */
export const SELECTED_ROWS_BASIC = ['125313-7j', '584996-s7'];

/**
 * Sample selected rows
 * :: with invalid row IDs
 */
export const SELECTED_ROWS_INVALID = [
    '584996-s7',
    '377526-zg',
    'AWEFUL-bad_iD',
    '882894-s3',
    'PiCkLeS',
    '31337-ID',
];

/**
 * Sample data
 * :: valid basic version, no missing children content
 */
export const DATA_BASIC = [
    {
        name: '125313-7j',
        accountName: 'Dach-Welch',
        phone: '837-555-0100',
    },
    {
        name: '584996-s7',
        accountName: 'Corkery-Windler',
        phone: '837-555-0100',
        _children: [
            {
                name: '747773-jw',
                accountName: 'Corkery-Abshire',
                phone: '837-555-0100',
            },
            {
                name: '377526-zg',
                accountName: 'Robel, Friesen and Flatley',
                phone: '837-555-0100',
                _children: [
                    {
                        name: '955330-wp',
                        accountName: 'Donnelly Group',
                        phone: '837-555-0100',
                    },
                    {
                        name: '343693-9x',
                        accountName: 'Kshlerin Group',
                        phone: '837-555-0100',
                    },
                ],
            },
            {
                name: '638483-y2',
                accountName: 'Bruen, Steuber and Spencer',
                phone: '837-555-0100',
            },
        ],
    },
    {
        name: '306979-mx',
        accountName: 'Spinka LLC',
        phone: '837-555-0100',
    },
    {
        name: '066195-o1',
        accountName: 'Koelpin LLC',
        phone: '837-555-0100',
        _children: [],
    },
];

/**
 * Sample data
 * :: valid basic version, with missing children content
 */
export const DATA_MISSING_CHILDREN_CONTENT = [
    {
        name: '125313-7j',
        accountName: 'Dach-Welch',
        phone: '837-555-0100',
    },
    {
        name: '584996-s7',
        accountName: 'Corkery-Windler',
        phone: '837-555-0100',
        _children: [],
    },
    {
        name: '816682-xr',
        accountName: 'Schmitt-Littel',
        phone: '837-555-0100',
        _children: [
            {
                name: '118985-mf',
                accountName: 'Hegmann-Turcotte',
                phone: '837-555-0100',
            },
            {
                name: '841476-yo',
                accountName: 'Kuhlman LLC',
                phone: '837-555-0100',
            },
        ],
    },
    {
        name: '653331-j4',
        accountName: 'Swaniawski-Hilpert',
        phone: '366-145-6134',
        _children: [
            {
                name: '605249-ei',
                accountName: 'Swaniawski, Veum and Barton',
                phone: '837-555-0100',
            },
            {
                name: '686777-5d',
                accountName: 'Lubowitz, McClure and Russel',
                phone: '837-555-0100',
            },
            {
                name: '582166-n4',
                accountName: 'Reichel-Jerde',
                phone: '837-555-0100',
                _children: [
                    {
                        name: '513683-mm',
                        accountName: 'Tromp Inc',
                        phone: '837-555-0100',
                    },
                ],
            },
        ],
    },
    {
        name: '306979-mx',
        accountName: 'Spinka LLC',
        phone: '837-555-0100',
    },
    {
        name: '066195-o1',
        accountName: 'Koelpin LLC',
        phone: '837-555-0100',
        _children: [],
    },
];

/**
 * Sample data
 * :: used by examples
 */
export const EXAMPLES_DATA_BASIC = [
    {
        name: '123557-1',
        keyinJSON: 'Account Object',
        _children: [
            {
                name: '123557-1-1',
                keyinJSON: 'actionOverrides',
                _children: [
                    {
                        name: '123557-1-1-1',
                        keyinJSON: 'formFactor',
                        valueinJSON : 'LARGE'
                        
                    },
                    {
                        name: '123557-1-1-2',
                        keyinJSON: 'name',
                        valueinJSON : 'View'
                    },
                    {
                        name: '123557-1-1-3',
                        keyinJSON: 'pageId',
                        valueinJSON : '0M0dM000002NsV2SAK'
                    }
                ],
            },
            {
                name: '123557-1-2',
                keyinJSON: 'associateEntityType',
                valueinJSON : false,
            },
            {
                name: '123557-1-3',
                keyinJSON: 'associateParentEntity',
                valueinJSON : false,
            },
            {
                name: '123557-1-4',
                keyinJSON: 'childRelationships',
                _children: [
                    {
                        name: '123557-1-4-1',
                        keyinJSON: 'cascadeDelete',
                        valueinJSON : 'true'
                        
                    },
                    {
                        name: '123557-1-4-2',
                        keyinJSON: 'childSObject',
                        valueinJSON : 'AIInsightValue'
                    },
                    {
                        name: '123557-1-4-3',
                        keyinJSON: 'deprecatedAndHidden',
                        valueinJSON : 'false'
                    }
                ],
            },
        ],
    },

];

/**
 * Sample data
 * :: used by lazy loading example
 */
export const EXAMPLES_DATA_LAZY_LOADING = [
    {
        name: '123555',
        accountName: 'Rewis Inc',
        employees: 3100,
        phone: '837-555-0100',
        accountOwner: 'http://salesforce.com/fake/url/jane-doe',
        accountOwnerName: 'Jane Doe',
        billingCity: 'Phoeniz, AZ',
    },

    {
        name: '123556',
        accountName: 'Acme Corporation',
        employees: 10000,
        phone: '837-555-0100',
        accountOwner: 'http://salesforce.com/fake/url/jane-doe',
        accountOwnerName: 'John Doe',
        billingCity: 'San Francisco, CA',
        _children: [
            {
                name: '123556-A',
                accountName: 'Acme Corporation (Bay Area)',
                employees: 3000,
                phone: '837-555-0100',
                accountOwner: 'http://salesforce.com/fake/url/jane-doe',
                accountOwnerName: 'John Doe',
                billingCity: 'New York, NY',
                _children: [],
            },

            {
                name: '123556-B',
                accountName: 'Acme Corporation (East)',
                employees: 430,
                phone: '837-555-0100',
                accountOwner: 'http://salesforce.com/fake/url/jane-doe',
                accountOwnerName: 'John Doe',
                billingCity: 'San Francisco, CA',
                _children: [
                    {
                        name: '123556-B-A',
                        accountName: 'Acme Corporation (NY)',
                        employees: 1210,
                        phone: '837-555-0100',
                        accountOwner: 'http://salesforce.com/fake/url/jane-doe',
                        accountOwnerName: 'Jane Doe',
                        billingCity: 'New York, NY',
                    },
                    {
                        name: '123556-B-B',
                        accountName: 'Acme Corporation (VA)',
                        employees: 410,
                        phone: '837-555-0100',
                        accountOwner: 'http://salesforce.com/fake/url/jane-doe',
                        accountOwnerName: 'John Doe',
                        billingCity: 'New York, NY',
                        _children: [],
                    },
                ],
            },
        ],
    },

    {
        name: '123557',
        accountName: 'Rhode Enterprises',
        employees: 6000,
        phone: '837-555-0100',
        accountOwner: 'http://salesforce.com/fake/url/jane-doe',
        accountOwnerName: 'John Doe',
        billingCity: 'New York, NY',
        _children: [
            {
                name: '123557-A',
                accountName: 'Rhode Enterprises (UCA)',
                employees: 2540,
                phone: '837-555-0100',
                accountOwner: 'http://salesforce.com/fake/url/jane-doe',
                accountOwnerName: 'John Doe',
                billingCity: 'New York, NY',
            },
        ],
    },

    {
        name: '123558',
        accountName: 'Tech Labs',
        employees: 1856,
        phone: '837-555-0100',
        accountOwner: 'http://salesforce.com/fake/url/jane-doe',
        accountOwnerName: 'John Doe',
        billingCity: 'New York, NY',
        _children: [
            {
                name: '123558-A',
                accountName: 'Opportunity Resources Inc',
                employees: 1934,
                phone: '837-555-0100',
                accountOwner: 'http://salesforce.com/fake/url/jane-doe',
                accountOwnerName: 'John Doe',
                billingCity: 'Los Angeles, CA',
            },
        ],
    },
];





