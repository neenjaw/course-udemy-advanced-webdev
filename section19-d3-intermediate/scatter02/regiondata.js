const regionDataKeys = [
    {
        key: 'region',
        display: 'Region'
    },
    {
        key: 'cellSubscribersPer100',
        display: 'Cell Phone Subscribers per 100 Population'
    },
    {
        key: 'adultLiteracyRate',
        display: 'Adult Literacy Rate'
    }, 
    {
        key: 'growthRate',
        display: 'Growth Rate'
    },
    {
        key: 'urbanPopulationRate',
        display: 'Urban Population Rate'
    },
    {
        key: 'extremePovertyRate',
        display: 'Extreme Poverty Rate'
    }, 
    {
        key: 'medianAge',
        display: 'Median Age'
    },
];

const regionData = [
    {
      'region': 'Afghanistan',
      'cellSubscribersPer100': 60,
      'adultLiteracyRate': null,
      'growthRate': -2.4,
      'urbanPopulationRate': 24,
      'extremePovertyRate': null,
      'medianAge': 16.2
    },
    {
      'region': 'Albania',
      'cellSubscribersPer100': 111,
      'adultLiteracyRate': 96.8,
      'growthRate': -0.3,
      'urbanPopulationRate': 55,
      'extremePovertyRate': 0.62,
      'medianAge': 32.56
    },
    {
      'region': 'Algeria',
      'cellSubscribersPer100': 98,
      'adultLiteracyRate': 72.6,
      'growthRate': -1.9,
      'urbanPopulationRate': 74,
      'extremePovertyRate': 6.79,
      'medianAge': 26.62
    },
    {
      'region': 'Andorra',
      'cellSubscribersPer100': 81,
      'adultLiteracyRate': null,
      'growthRate': 0,
      'urbanPopulationRate': 87,
      'extremePovertyRate': null,
      'medianAge': null
    },
    {
      'region': 'Angola',
      'cellSubscribersPer100': 47,
      'adultLiteracyRate': 70.4,
      'growthRate': -3.1,
      'urbanPopulationRate': 60,
      'extremePovertyRate': 43.37,
      'medianAge': 16.18
    },
    {
      'region': 'Antigua and Barbuda',
      'cellSubscribersPer100': 143,
      'adultLiteracyRate': 99,
      'growthRate': -1.1,
      'urbanPopulationRate': 30,
      'extremePovertyRate': null,
      'medianAge': 30.26
    },
    {
      'region': 'Argentina',
      'cellSubscribersPer100': 152,
      'adultLiteracyRate': 97.9,
      'growthRate': -0.9,
      'urbanPopulationRate': 93,
      'extremePovertyRate': 0.92,
      'medianAge': 30.83
    },
    {
      'region': 'Armenia',
      'cellSubscribersPer100': 112,
      'adultLiteracyRate': 99.6,
      'growthRate': -0.2,
      'urbanPopulationRate': 64,
      'extremePovertyRate': 2.47,
      'medianAge': 32.3
    },
    {
      'region': 'Australia',
      'cellSubscribersPer100': 106,
      'adultLiteracyRate': null,
      'growthRate': -1.3,
      'urbanPopulationRate': 89,
      'extremePovertyRate': null,
      'medianAge': 37.08
    },
    {
      'region': 'Austria',
      'cellSubscribersPer100': 161,
      'adultLiteracyRate': null,
      'growthRate': -0.4,
      'urbanPopulationRate': 68,
      'extremePovertyRate': null,
      'medianAge': 42.4
    },
    {
      'region': 'Azerbaijan',
      'cellSubscribersPer100': 109,
      'adultLiteracyRate': 99.8,
      'growthRate': -1.2,
      'urbanPopulationRate': 54,
      'extremePovertyRate': 0.43,
      'medianAge': 29.34
    },
    {
      'region': 'Bahamas',
      'cellSubscribersPer100': 81,
      'adultLiteracyRate': null,
      'growthRate': -1.6,
      'urbanPopulationRate': 84,
      'extremePovertyRate': null,
      'medianAge': 31.54
    },
    {
      'region': 'Bahrain',
      'cellSubscribersPer100': 161,
      'adultLiteracyRate': 94.6,
      'growthRate': -1.9,
      'urbanPopulationRate': 89,
      'extremePovertyRate': null,
      'medianAge': 30.07
    },
    {
      'region': 'Bangladesh',
      'cellSubscribersPer100': 63,
      'adultLiteracyRate': 57.7,
      'growthRate': -1.3,
      'urbanPopulationRate': 29,
      'extremePovertyRate': 43.25,
      'medianAge': 24.7
    },
    {
      'region': 'Barbados',
      'cellSubscribersPer100': 123,
      'adultLiteracyRate': null,
      'growthRate': -0.4,
      'urbanPopulationRate': 45,
      'extremePovertyRate': null,
      'medianAge': 36.68
    },
    {
      'region': 'Belarus',
      'cellSubscribersPer100': 114,
      'adultLiteracyRate': 99.6,
      'growthRate': 0.5,
      'urbanPopulationRate': 75,
      'extremePovertyRate': 0.07,
      'medianAge': 39.15
    },
    {
      'region': 'Belgium',
      'cellSubscribersPer100': 111,
      'adultLiteracyRate': null,
      'growthRate': -0.5,
      'urbanPopulationRate': 98,
      'extremePovertyRate': null,
      'medianAge': 41.41
    },
    {
      'region': 'Belize',
      'cellSubscribersPer100': 53,
      'adultLiteracyRate': 70.3,
      'growthRate': -2.5,
      'urbanPopulationRate': 45,
      'extremePovertyRate': 12.21,
      'medianAge': 22.69
    },
    {
      'region': 'Benin',
      'cellSubscribersPer100': 84,
      'adultLiteracyRate': 42.4,
      'growthRate': -2.7,
      'urbanPopulationRate': 46,
      'extremePovertyRate': 47.33,
      'medianAge': 18.3
    },
    {
      'region': 'Bhutan',
      'cellSubscribersPer100': 76,
      'adultLiteracyRate': 52.8,
      'growthRate': -1.8,
      'urbanPopulationRate': 36,
      'extremePovertyRate': 1.66,
      'medianAge': 25.29
    },
    {
      'region': 'Bolivia (Plurinational State of)',
      'cellSubscribersPer100': 90,
      'adultLiteracyRate': 91.2,
      'growthRate': -1.7,
      'urbanPopulationRate': 67,
      'extremePovertyRate': 15.61,
      'medianAge': 22.14
    },
    {
      'region': 'Bosnia and Herzegovina',
      'cellSubscribersPer100': 88,
      'adultLiteracyRate': 98,
      'growthRate': 0.1,
      'urbanPopulationRate': 49,
      'extremePovertyRate': 0.04,
      'medianAge': 39.23
    },
    {
      'region': 'Botswana',
      'cellSubscribersPer100': 154,
      'adultLiteracyRate': 85.1,
      'growthRate': -0.9,
      'urbanPopulationRate': 62,
      'extremePovertyRate': 31.23,
      'medianAge': 22.33
    },
    {
      'region': 'Brazil',
      'cellSubscribersPer100': 125,
      'adultLiteracyRate': 90.4,
      'growthRate': -1,
      'urbanPopulationRate': 85,
      'extremePovertyRate': 6.14,
      'medianAge': 29.89
    },
    {
      'region': 'Brunei Darussalam',
      'cellSubscribersPer100': 114,
      'adultLiteracyRate': 95.4,
      'growthRate': -1.2,
      'urbanPopulationRate': 76,
      'extremePovertyRate': null,
      'medianAge': 30.14
    },
    {
      'region': 'Bulgaria',
      'cellSubscribersPer100': 148,
      'adultLiteracyRate': 98.4,
      'growthRate': 0.8,
      'urbanPopulationRate': 74,
      'extremePovertyRate': 0,
      'medianAge': 42.84
    },
    {
      'region': 'Burkina Faso',
      'cellSubscribersPer100': 61,
      'adultLiteracyRate': 28.7,
      'growthRate': -2.9,
      'urbanPopulationRate': 27,
      'extremePovertyRate': 44.6,
      'medianAge': 17.01
    },
    {
      'region': 'Burundi',
      'cellSubscribersPer100': 23,
      'adultLiteracyRate': 67.2,
      'growthRate': -3.2,
      'urbanPopulationRate': 11,
      'extremePovertyRate': 81.32,
      'medianAge': 17.64
    },
    {
      'region': 'Cabo Verde',
      'cellSubscribersPer100': 86,
      'adultLiteracyRate': 84.9,
      'growthRate': -0.6,
      'urbanPopulationRate': 63,
      'extremePovertyRate': 21.02,
      'medianAge': 23.71
    },
    {
      'region': 'Cambodia',
      'cellSubscribersPer100': 129,
      'adultLiteracyRate': 73.9,
      'growthRate': -1.8,
      'urbanPopulationRate': 20,
      'extremePovertyRate': 18.6,
      'medianAge': 24.1
    },
    {
      'region': 'Cameroon',
      'cellSubscribersPer100': 60,
      'adultLiteracyRate': 71.3,
      'growthRate': -2.5,
      'urbanPopulationRate': 53,
      'extremePovertyRate': 9.56,
      'medianAge': 18.18
    },
    {
      'region': 'Canada',
      'cellSubscribersPer100': 80,
      'adultLiteracyRate': null,
      'growthRate': -1,
      'urbanPopulationRate': 81,
      'extremePovertyRate': null,
      'medianAge': 39.99
    },
    {
      'region': 'Central African Republic',
      'cellSubscribersPer100': 25,
      'adultLiteracyRate': 56.6,
      'growthRate': -2,
      'urbanPopulationRate': 39,
      'extremePovertyRate': 62.83,
      'medianAge': 19.59
    },
    {
      'region': 'Chad',
      'cellSubscribersPer100': 35,
      'adultLiteracyRate': 35.4,
      'growthRate': -3,
      'urbanPopulationRate': 22,
      'extremePovertyRate': 61.94,
      'medianAge': 15.7
    },
    {
      'region': 'Chile',
      'cellSubscribersPer100': 138,
      'adultLiteracyRate': 98.6,
      'growthRate': -0.9,
      'urbanPopulationRate': 89,
      'extremePovertyRate': 1.35,
      'medianAge': 32.76
    },
    {
      'region': 'China',
      'cellSubscribersPer100': 80,
      'adultLiteracyRate': 95.1,
      'growthRate': -0.7,
      'urbanPopulationRate': 52,
      'extremePovertyRate': 11.8,
      'medianAge': 35.12
    },
    {
      'region': 'Colombia',
      'cellSubscribersPer100': 103,
      'adultLiteracyRate': 93.6,
      'growthRate': -1.3,
      'urbanPopulationRate': 76,
      'extremePovertyRate': 8.16,
      'medianAge': 27.4
    },
    {
      'region': 'Comoros',
      'cellSubscribersPer100': 40,
      'adultLiteracyRate': 75.5,
      'growthRate': -2.5,
      'urbanPopulationRate': 28,
      'extremePovertyRate': 46.11,
      'medianAge': 19.08
    },
    {
      'region': 'Congo',
      'cellSubscribersPer100': 99,
      'adultLiteracyRate': null,
      'growthRate': -2.6,
      'urbanPopulationRate': 64,
      'extremePovertyRate': 54.1,
      'medianAge': 18.81
    },
    {
      'region': 'Cook Islands',
      'cellSubscribersPer100': 38,
      'adultLiteracyRate': null,
      'growthRate': -4.9,
      'urbanPopulationRate': 74,
      'extremePovertyRate': null,
      'medianAge': null
    },
    {
      'region': 'Costa Rica',
      'cellSubscribersPer100': 112,
      'adultLiteracyRate': 96.3,
      'growthRate': -1.4,
      'urbanPopulationRate': 65,
      'extremePovertyRate': 3.12,
      'medianAge': 29.29
    },
    {
      'region': 'Côte d’Ivoire',
      'cellSubscribersPer100': 91,
      'adultLiteracyRate': 56.9,
      'growthRate': -2.3,
      'urbanPopulationRate': 52,
      'extremePovertyRate': 23.75,
      'medianAge': 18.96
    },
    {
      'region': 'Croatia',
      'cellSubscribersPer100': 115,
      'adultLiteracyRate': 98.9,
      'growthRate': 0.4,
      'urbanPopulationRate': 58,
      'extremePovertyRate': 0.06,
      'medianAge': 42.38
    },
    {
      'region': 'Cuba',
      'cellSubscribersPer100': 15,
      'adultLiteracyRate': 99.8,
      'growthRate': 0,
      'urbanPopulationRate': 75,
      'extremePovertyRate': null,
      'medianAge': 39.57
    },
    {
      'region': 'Cyprus',
      'cellSubscribersPer100': 98,
      'adultLiteracyRate': 98.7,
      'growthRate': -1.1,
      'urbanPopulationRate': 71,
      'extremePovertyRate': null,
      'medianAge': 34.88
    },
    {
      'region': 'Czech Republic',
      'cellSubscribersPer100': 127,
      'adultLiteracyRate': null,
      'growthRate': -0.5,
      'urbanPopulationRate': 73,
      'extremePovertyRate': 0.13,
      'medianAge': 40.07
    },
    {
      'region': 'Democratic People\'s Republic of Korea',
      'cellSubscribersPer100': 7,
      'adultLiteracyRate': 100,
      'growthRate': -0.5,
      'urbanPopulationRate': 60,
      'extremePovertyRate': null,
      'medianAge': 33.4
    },
    {
      'region': 'Democratic Republic of the Congo',
      'cellSubscribersPer100': 31,
      'adultLiteracyRate': 66.8,
      'growthRate': -2.7,
      'urbanPopulationRate': 35,
      'extremePovertyRate': 87.72,
      'medianAge': 17.27
    },
    {
      'region': 'Denmark',
      'cellSubscribersPer100': 118,
      'adultLiteracyRate': null,
      'growthRate': -0.4,
      'urbanPopulationRate': 87,
      'extremePovertyRate': null,
      'medianAge': 40.95
    },
    {
      'region': 'Djibouti',
      'cellSubscribersPer100': 25,
      'adultLiteracyRate': null,
      'growthRate': -1.5,
      'urbanPopulationRate': 77,
      'extremePovertyRate': 18.84,
      'medianAge': 22.55
    },
    {
      'region': 'Dominica',
      'cellSubscribersPer100': 152,
      'adultLiteracyRate': null,
      'growthRate': -1.4,
      'urbanPopulationRate': 67,
      'extremePovertyRate': null,
      'medianAge': null
    },
    {
      'region': 'Dominican Republic',
      'cellSubscribersPer100': 87,
      'adultLiteracyRate': 90.1,
      'growthRate': -1.3,
      'urbanPopulationRate': 70,
      'extremePovertyRate': 2.24,
      'medianAge': 25.53
    },
    {
      'region': 'Ecuador',
      'cellSubscribersPer100': 106,
      'adultLiteracyRate': 91.6,
      'growthRate': -1.6,
      'urbanPopulationRate': 68,
      'extremePovertyRate': 4.61,
      'medianAge': 25.83
    },
    {
      'region': 'Egypt',
      'cellSubscribersPer100': 120,
      'adultLiteracyRate': 73.9,
      'growthRate': -1.7,
      'urbanPopulationRate': 44,
      'extremePovertyRate': 1.69,
      'medianAge': 24.93
    },
    {
      'region': 'El Salvador',
      'cellSubscribersPer100': 137,
      'adultLiteracyRate': 84.5,
      'growthRate': -0.7,
      'urbanPopulationRate': 65,
      'extremePovertyRate': 8.97,
      'medianAge': 23.78
    },
    {
      'region': 'Equatorial Guinea',
      'cellSubscribersPer100': 68,
      'adultLiteracyRate': 94.2,
      'growthRate': -2.8,
      'urbanPopulationRate': 40,
      'extremePovertyRate': null,
      'medianAge': 20.49
    },
    {
      'region': 'Eritrea',
      'cellSubscribersPer100': 5,
      'adultLiteracyRate': 68.9,
      'growthRate': -3.3,
      'urbanPopulationRate': 22,
      'extremePovertyRate': null,
      'medianAge': 18.37
    },
    {
      'region': 'Estonia',
      'cellSubscribersPer100': 160,
      'adultLiteracyRate': 99.8,
      'growthRate': 0.2,
      'urbanPopulationRate': 70,
      'extremePovertyRate': 0.46,
      'medianAge': 40.78
    },
    {
      'region': 'Ethiopia',
      'cellSubscribersPer100': 22,
      'adultLiteracyRate': 39,
      'growthRate': -2.6,
      'urbanPopulationRate': 17,
      'extremePovertyRate': 30.65,
      'medianAge': 17.93
    },
    {
      'region': 'Fiji',
      'cellSubscribersPer100': 98,
      'adultLiteracyRate': null,
      'growthRate': -0.8,
      'urbanPopulationRate': 53,
      'extremePovertyRate': 5.88,
      'medianAge': 26.88
    },
    {
      'region': 'Finland',
      'cellSubscribersPer100': 172,
      'adultLiteracyRate': null,
      'growthRate': -0.4,
      'urbanPopulationRate': 84,
      'extremePovertyRate': null,
      'medianAge': 42.24
    },
    {
      'region': 'France',
      'cellSubscribersPer100': 97,
      'adultLiteracyRate': null,
      'growthRate': -0.6,
      'urbanPopulationRate': 86,
      'extremePovertyRate': null,
      'medianAge': 40.43
    },
    {
      'region': 'Gabon',
      'cellSubscribersPer100': 179,
      'adultLiteracyRate': 89,
      'growthRate': -2.4,
      'urbanPopulationRate': 87,
      'extremePovertyRate': 4.84,
      'medianAge': 20.66
    },
    {
      'region': 'Gambia',
      'cellSubscribersPer100': 85,
      'adultLiteracyRate': 51.1,
      'growthRate': -3.2,
      'urbanPopulationRate': 58,
      'extremePovertyRate': 33.63,
      'medianAge': 16.95
    },
    {
      'region': 'Georgia',
      'cellSubscribersPer100': 108,
      'adultLiteracyRate': 99.7,
      'growthRate': 0.4,
      'urbanPopulationRate': 53,
      'extremePovertyRate': 17.99,
      'medianAge': 37.43
    },
    {
      'region': 'Germany',
      'cellSubscribersPer100': 112,
      'adultLiteracyRate': null,
      'growthRate': 0.1,
      'urbanPopulationRate': 74,
      'extremePovertyRate': null,
      'medianAge': 45.09
    },
    {
      'region': 'Ghana',
      'cellSubscribersPer100': 101,
      'adultLiteracyRate': 71.5,
      'growthRate': -2.2,
      'urbanPopulationRate': 53,
      'extremePovertyRate': 28.59,
      'medianAge': 20.45
    },
    {
      'region': 'Greece',
      'cellSubscribersPer100': 120,
      'adultLiteracyRate': 97.3,
      'growthRate': -0.1,
      'urbanPopulationRate': 62,
      'extremePovertyRate': null,
      'medianAge': 42.47
    },
    {
      'region': 'Grenada',
      'cellSubscribersPer100': 121,
      'adultLiteracyRate': null,
      'growthRate': 0,
      'urbanPopulationRate': 39,
      'extremePovertyRate': null,
      'medianAge': 25.89
    },
    {
      'region': 'Guatemala',
      'cellSubscribersPer100': 138,
      'adultLiteracyRate': 75.9,
      'growthRate': -2.5,
      'urbanPopulationRate': 50,
      'extremePovertyRate': 13.53,
      'medianAge': 19.19
    },
    {
      'region': 'Guinea',
      'cellSubscribersPer100': 42,
      'adultLiteracyRate': 25.3,
      'growthRate': -2.6,
      'urbanPopulationRate': 36,
      'extremePovertyRate': 43.34,
      'medianAge': 18.53
    },
    {
      'region': 'Guinea-Bissau',
      'cellSubscribersPer100': 63,
      'adultLiteracyRate': 55.3,
      'growthRate': -2.4,
      'urbanPopulationRate': 45,
      'extremePovertyRate': 48.9,
      'medianAge': 18.97
    },
    {
      'region': 'Guyana',
      'cellSubscribersPer100': 69,
      'adultLiteracyRate': 85,
      'growthRate': -0.5,
      'urbanPopulationRate': 28,
      'extremePovertyRate': 8.7,
      'medianAge': 22.36
    },
    {
      'region': 'Haiti',
      'cellSubscribersPer100': 60,
      'adultLiteracyRate': 48.7,
      'growthRate': -1.4,
      'urbanPopulationRate': 55,
      'extremePovertyRate': 61.71,
      'medianAge': 21.99
    },
    {
      'region': 'Honduras',
      'cellSubscribersPer100': 93,
      'adultLiteracyRate': 85.1,
      'growthRate': -2,
      'urbanPopulationRate': 53,
      'extremePovertyRate': 17.92,
      'medianAge': 21.57
    },
    {
      'region': 'Hungary',
      'cellSubscribersPer100': 116,
      'adultLiteracyRate': 99,
      'growthRate': 0.2,
      'urbanPopulationRate': 70,
      'extremePovertyRate': 0.17,
      'medianAge': 40.35
    },
    {
      'region': 'Iceland',
      'cellSubscribersPer100': 108,
      'adultLiteracyRate': null,
      'growthRate': -1.2,
      'urbanPopulationRate': 94,
      'extremePovertyRate': null,
      'medianAge': 35.3
    },
    {
      'region': 'India',
      'cellSubscribersPer100': 70,
      'adultLiteracyRate': 62.8,
      'growthRate': -1.6,
      'urbanPopulationRate': 32,
      'extremePovertyRate': 32.68,
      'medianAge': 26.07
    },
    {
      'region': 'Indonesia',
      'cellSubscribersPer100': 114,
      'adultLiteracyRate': 92.8,
      'growthRate': -1.2,
      'urbanPopulationRate': 51,
      'extremePovertyRate': 16.20166494,
      'medianAge': 27.47
    },
    {
      'region': 'Iran (Islamic Republic of)',
      'cellSubscribersPer100': 76,
      'adultLiteracyRate': 85,
      'growthRate': -1.3,
      'urbanPopulationRate': 69,
      'extremePovertyRate': 1.45,
      'medianAge': 27.99
    },
    {
      'region': 'Iraq',
      'cellSubscribersPer100': 82,
      'adultLiteracyRate': 78.5,
      'growthRate': -2.9,
      'urbanPopulationRate': 66,
      'extremePovertyRate': 2.82,
      'medianAge': 19.5
    },
    {
      'region': 'Ireland',
      'cellSubscribersPer100': 107,
      'adultLiteracyRate': null,
      'growthRate': -1.2,
      'urbanPopulationRate': 62,
      'extremePovertyRate': null,
      'medianAge': 34.94
    },
    {
      'region': 'Israel',
      'cellSubscribersPer100': 121,
      'adultLiteracyRate': null,
      'growthRate': -1.3,
      'urbanPopulationRate': 92,
      'extremePovertyRate': null,
      'medianAge': 30.1
    },
    {
      'region': 'Italy',
      'cellSubscribersPer100': 160,
      'adultLiteracyRate': 99,
      'growthRate': -0.3,
      'urbanPopulationRate': 69,
      'extremePovertyRate': null,
      'medianAge': 43.99
    },
    {
      'region': 'Jamaica',
      'cellSubscribersPer100': 96,
      'adultLiteracyRate': 87,
      'growthRate': -0.5,
      'urbanPopulationRate': 52,
      'extremePovertyRate': 0.21,
      'medianAge': 27.5
    },
    {
      'region': 'Japan',
      'cellSubscribersPer100': 111,
      'adultLiteracyRate': null,
      'growthRate': 0,
      'urbanPopulationRate': 92,
      'extremePovertyRate': null,
      'medianAge': 45.53
    },
    {
      'region': 'Jordan',
      'cellSubscribersPer100': 128,
      'adultLiteracyRate': 95.9,
      'growthRate': -4,
      'urbanPopulationRate': 83,
      'extremePovertyRate': 0.12,
      'medianAge': 23.06
    },
    {
      'region': 'Kazakhstan',
      'cellSubscribersPer100': 186,
      'adultLiteracyRate': 99.7,
      'growthRate': -1.1,
      'urbanPopulationRate': 53,
      'extremePovertyRate': 0.11,
      'medianAge': 29.2
    },
    {
      'region': 'Kenya',
      'cellSubscribersPer100': 71,
      'adultLiteracyRate': 87.4,
      'growthRate': -2.7,
      'urbanPopulationRate': 24,
      'extremePovertyRate': 43.37,
      'medianAge': 18.72
    },
    {
      'region': 'Kiribati',
      'cellSubscribersPer100': 16,
      'adultLiteracyRate': null,
      'growthRate': -2,
      'urbanPopulationRate': 44,
      'extremePovertyRate': null,
      'medianAge': 23.15
    },
    {
      'region': 'Kuwait',
      'cellSubscribersPer100': 157,
      'adultLiteracyRate': 93.9,
      'growthRate': -3.9,
      'urbanPopulationRate': 98,
      'extremePovertyRate': null,
      'medianAge': 28.95
    },
    {
      'region': 'Kyrgyzstan',
      'cellSubscribersPer100': 124,
      'adultLiteracyRate': 99.2,
      'growthRate': -1.3,
      'urbanPopulationRate': 35,
      'extremePovertyRate': 5.03,
      'medianAge': 24.34
    },
    {
      'region': 'Lao People\'s Democratic Republic',
      'cellSubscribersPer100': 65,
      'adultLiteracyRate': 72.7,
      'growthRate': -1.9,
      'urbanPopulationRate': 35,
      'extremePovertyRate': 33.88,
      'medianAge': 21.02
    },
    {
      'region': 'Latvia',
      'cellSubscribersPer100': 112,
      'adultLiteracyRate': 99.8,
      'growthRate': 0.6,
      'urbanPopulationRate': 68,
      'extremePovertyRate': 0.19,
      'medianAge': 41.44
    },
    {
      'region': 'Lebanon',
      'cellSubscribersPer100': 81,
      'adultLiteracyRate': 89.6,
      'growthRate': -3.7,
      'urbanPopulationRate': 87,
      'extremePovertyRate': null,
      'medianAge': 29.4
    },
    {
      'region': 'Lesotho',
      'cellSubscribersPer100': 75,
      'adultLiteracyRate': 89.6,
      'growthRate': -1.1,
      'urbanPopulationRate': 28,
      'extremePovertyRate': 43.41,
      'medianAge': 20.53
    },
    {
      'region': 'Liberia',
      'cellSubscribersPer100': 57,
      'adultLiteracyRate': 60.8,
      'growthRate': -2.7,
      'urbanPopulationRate': 49,
      'extremePovertyRate': 83.76,
      'medianAge': 18.43
    },
    {
      'region': 'Libya',
      'cellSubscribersPer100': 156,
      'adultLiteracyRate': 89.5,
      'growthRate': -0.8,
      'urbanPopulationRate': 78,
      'extremePovertyRate': null,
      'medianAge': 26.25
    },
    {
      'region': 'Lithuania',
      'cellSubscribersPer100': 165,
      'adultLiteracyRate': 99.7,
      'growthRate': 0.5,
      'urbanPopulationRate': 67,
      'extremePovertyRate': 0.16,
      'medianAge': 39.09
    },
    {
      'region': 'Luxembourg',
      'cellSubscribersPer100': 145,
      'adultLiteracyRate': null,
      'growthRate': -1.5,
      'urbanPopulationRate': 86,
      'extremePovertyRate': null,
      'medianAge': 39
    },
    {
      'region': 'Madagascar',
      'cellSubscribersPer100': 39,
      'adultLiteracyRate': 64.5,
      'growthRate': -2.8,
      'urbanPopulationRate': 33,
      'extremePovertyRate': 81.29,
      'medianAge': 18.3
    },
    {
      'region': 'Malawi',
      'cellSubscribersPer100': 29,
      'adultLiteracyRate': 74.8,
      'growthRate': -2.9,
      'urbanPopulationRate': 16,
      'extremePovertyRate': 61.64,
      'medianAge': 17.06
    },
    {
      'region': 'Malaysia',
      'cellSubscribersPer100': 141,
      'adultLiteracyRate': 93.1,
      'growthRate': -1.7,
      'urbanPopulationRate': 73,
      'extremePovertyRate': 0,
      'medianAge': 26.99
    },
    {
      'region': 'Maldives',
      'cellSubscribersPer100': 166,
      'adultLiteracyRate': 98.4,
      'growthRate': -1.8,
      'urbanPopulationRate': 42,
      'extremePovertyRate': 1.48,
      'medianAge': 24.53
    },
    {
      'region': 'Mali',
      'cellSubscribersPer100': 98,
      'adultLiteracyRate': 33.4,
      'growthRate': -3,
      'urbanPopulationRate': 36,
      'extremePovertyRate': 50.43,
      'medianAge': 16.39
    },
    {
      'region': 'Malta',
      'cellSubscribersPer100': 127,
      'adultLiteracyRate': 92.4,
      'growthRate': -0.5,
      'urbanPopulationRate': 95,
      'extremePovertyRate': null,
      'medianAge': 40.65
    },
    {
      'region': 'Marshall Islands',
      'cellSubscribersPer100': 7,
      'adultLiteracyRate': null,
      'growthRate': -1.9,
      'urbanPopulationRate': 72,
      'extremePovertyRate': null,
      'medianAge': null
    },
    {
      'region': 'Mauritania',
      'cellSubscribersPer100': 106,
      'adultLiteracyRate': 58.6,
      'growthRate': -2.5,
      'urbanPopulationRate': 42,
      'extremePovertyRate': 23.43,
      'medianAge': 19.71
    },
    {
      'region': 'Mauritius',
      'cellSubscribersPer100': 120,
      'adultLiteracyRate': 88.8,
      'growthRate': -0.4,
      'urbanPopulationRate': 42,
      'extremePovertyRate': null,
      'medianAge': 34.18
    },
    {
      'region': 'Mexico',
      'cellSubscribersPer100': 83,
      'adultLiteracyRate': 93.5,
      'growthRate': -1.7,
      'urbanPopulationRate': 78,
      'extremePovertyRate': 0.72,
      'medianAge': 26.64
    },
    {
      'region': 'Micronesia (Federated States of)',
      'cellSubscribersPer100': 30,
      'adultLiteracyRate': null,
      'growthRate': 0,
      'urbanPopulationRate': 23,
      'extremePovertyRate': 31.15,
      'medianAge': 20.73
    },
    {
      'region': 'Monaco',
      'cellSubscribersPer100': 88,
      'adultLiteracyRate': null,
      'growthRate': -2.7,
      'urbanPopulationRate': 100,
      'extremePovertyRate': null,
      'medianAge': null
    },
    {
      'region': 'Mongolia',
      'cellSubscribersPer100': 121,
      'adultLiteracyRate': 97.4,
      'growthRate': -1.5,
      'urbanPopulationRate': 69,
      'extremePovertyRate': null,
      'medianAge': 26.4
    },
    {
      'region': 'Montenegro',
      'cellSubscribersPer100': 181,
      'adultLiteracyRate': 98.5,
      'growthRate': 0,
      'urbanPopulationRate': 63,
      'extremePovertyRate': 0,
      'medianAge': 36.82
    },
    {
      'region': 'Morocco',
      'cellSubscribersPer100': 120,
      'adultLiteracyRate': 67.1,
      'growthRate': -1.4,
      'urbanPopulationRate': 57,
      'extremePovertyRate': 2.52,
      'medianAge': 26.7
    },
    {
      'region': 'Mozambique',
      'cellSubscribersPer100': 36,
      'adultLiteracyRate': 56.1,
      'growthRate': -2.5,
      'urbanPopulationRate': 31,
      'extremePovertyRate': 59.58,
      'medianAge': 17.26
    },
    {
      'region': 'Myanmar',
      'cellSubscribersPer100': 10,
      'adultLiteracyRate': 92.7,
      'growthRate': -0.8,
      'urbanPopulationRate': 33,
      'extremePovertyRate': null,
      'medianAge': 28.62
    },
    {
      'region': 'Namibia',
      'cellSubscribersPer100': 95,
      'adultLiteracyRate': 88.8,
      'growthRate': -1.8,
      'urbanPopulationRate': 39,
      'extremePovertyRate': 31.91,
      'medianAge': 20.94
    },
    {
      'region': 'Nauru',
      'cellSubscribersPer100': 68,
      'adultLiteracyRate': null,
      'growthRate': 0,
      'urbanPopulationRate': 100,
      'extremePovertyRate': null,
      'medianAge': null
    },
    {
      'region': 'Nepal',
      'cellSubscribersPer100': 60,
      'adultLiteracyRate': 57.4,
      'growthRate': -1.2,
      'urbanPopulationRate': 17,
      'extremePovertyRate': 24.82,
      'medianAge': 22.02
    },
    {
      'region': 'Netherlands',
      'cellSubscribersPer100': 118,
      'adultLiteracyRate': null,
      'growthRate': -0.3,
      'urbanPopulationRate': 84,
      'extremePovertyRate': null,
      'medianAge': 41.47
    },
    {
      'region': 'New Zealand',
      'cellSubscribersPer100': 110,
      'adultLiteracyRate': null,
      'growthRate': -1,
      'urbanPopulationRate': 86,
      'extremePovertyRate': null,
      'medianAge': 36.85
    },
    {
      'region': 'Nicaragua',
      'cellSubscribersPer100': 86,
      'adultLiteracyRate': 78,
      'growthRate': -1.5,
      'urbanPopulationRate': 58,
      'extremePovertyRate': 11.91,
      'medianAge': 22.74
    },
    {
      'region': 'Niger',
      'cellSubscribersPer100': 31,
      'adultLiteracyRate': 28.7,
      'growthRate': -3.8,
      'urbanPopulationRate': 18,
      'extremePovertyRate': 43.62,
      'medianAge': 15.04
    },
    {
      'region': 'Nigeria',
      'cellSubscribersPer100': 67,
      'adultLiteracyRate': 61.3,
      'growthRate': -3,
      'urbanPopulationRate': 50,
      'extremePovertyRate': 67.98,
      'medianAge': 17.84
    },
    {
      'region': 'Niue',
      'cellSubscribersPer100': 0,
      'adultLiteracyRate': null,
      'growthRate': 0,
      'urbanPopulationRate': 38,
      'extremePovertyRate': null,
      'medianAge': null
    },
    {
      'region': 'Norway',
      'cellSubscribersPer100': 117,
      'adultLiteracyRate': null,
      'growthRate': -1,
      'urbanPopulationRate': 80,
      'extremePovertyRate': null,
      'medianAge': 38.88
    },
    {
      'region': 'Oman',
      'cellSubscribersPer100': 159,
      'adultLiteracyRate': 86.9,
      'growthRate': -9.1,
      'urbanPopulationRate': 74,
      'extremePovertyRate': null,
      'medianAge': 25.88
    },
    {
      'region': 'Pakistan',
      'cellSubscribersPer100': 67,
      'adultLiteracyRate': 54.9,
      'growthRate': -1.7,
      'urbanPopulationRate': 37,
      'extremePovertyRate': 21.04,
      'medianAge': 22.23
    },
    {
      'region': 'Palau',
      'cellSubscribersPer100': 83,
      'adultLiteracyRate': null,
      'growthRate': 0,
      'urbanPopulationRate': 84,
      'extremePovertyRate': null,
      'medianAge': null
    },
    {
      'region': 'Panama',
      'cellSubscribersPer100': 178,
      'adultLiteracyRate': 94.1,
      'growthRate': -1.6,
      'urbanPopulationRate': 76,
      'extremePovertyRate': 6.56,
      'medianAge': 27.64
    },
    {
      'region': 'Papua New Guinea',
      'cellSubscribersPer100': 38,
      'adultLiteracyRate': 62.4,
      'growthRate': -2.2,
      'urbanPopulationRate': 13,
      'extremePovertyRate': 35.79,
      'medianAge': 20.72
    },
    {
      'region': 'Paraguay',
      'cellSubscribersPer100': 102,
      'adultLiteracyRate': 93.9,
      'growthRate': -1.7,
      'urbanPopulationRate': 62,
      'extremePovertyRate': 7.16,
      'medianAge': 23.59
    },
    {
      'region': 'Peru',
      'cellSubscribersPer100': 98,
      'adultLiteracyRate': 89.6,
      'growthRate': -1.3,
      'urbanPopulationRate': 78,
      'extremePovertyRate': 4.91,
      'medianAge': 26.16
    },
    {
      'region': 'Philippines',
      'cellSubscribersPer100': 107,
      'adultLiteracyRate': 95.4,
      'growthRate': -1.7,
      'urbanPopulationRate': 49,
      'extremePovertyRate': 18.42,
      'medianAge': 22.74
    },
    {
      'region': 'Poland',
      'cellSubscribersPer100': 140,
      'adultLiteracyRate': 99.7,
      'growthRate': 0,
      'urbanPopulationRate': 61,
      'extremePovertyRate': 0.07,
      'medianAge': 38.55
    },
    {
      'region': 'Portugal',
      'cellSubscribersPer100': 116,
      'adultLiteracyRate': 95.4,
      'growthRate': -0.1,
      'urbanPopulationRate': 62,
      'extremePovertyRate': null,
      'medianAge': 41.81
    },
    {
      'region': 'Qatar',
      'cellSubscribersPer100': 127,
      'adultLiteracyRate': 96.3,
      'growthRate': -7.1,
      'urbanPopulationRate': 99,
      'extremePovertyRate': null,
      'medianAge': 31.64
    },
    {
      'region': 'Republic of Korea',
      'cellSubscribersPer100': 109,
      'adultLiteracyRate': null,
      'growthRate': -0.6,
      'urbanPopulationRate': 83,
      'extremePovertyRate': null,
      'medianAge': 38.85
    },
    {
      'region': 'Republic of Moldova',
      'cellSubscribersPer100': 102,
      'adultLiteracyRate': 99,
      'growthRate': 0.8,
      'urbanPopulationRate': 48,
      'extremePovertyRate': 0.39,
      'medianAge': 35.61
    },
    {
      'region': 'Romania',
      'cellSubscribersPer100': 105,
      'adultLiteracyRate': 97.7,
      'growthRate': 0.2,
      'urbanPopulationRate': 53,
      'extremePovertyRate': 0.4,
      'medianAge': 39.09
    },
    {
      'region': 'Russian Federation',
      'cellSubscribersPer100': 183,
      'adultLiteracyRate': 99.6,
      'growthRate': 0,
      'urbanPopulationRate': 74,
      'extremePovertyRate': 0,
      'medianAge': 38.22
    },
    {
      'region': 'Rwanda',
      'cellSubscribersPer100': 50,
      'adultLiteracyRate': 71.1,
      'growthRate': -2.8,
      'urbanPopulationRate': 19,
      'extremePovertyRate': 63.17,
      'medianAge': 18.05
    },
    {
      'region': 'Saint Kitts and Nevis',
      'cellSubscribersPer100': 157,
      'adultLiteracyRate': null,
      'growthRate': -1.9,
      'urbanPopulationRate': 32,
      'extremePovertyRate': null,
      'medianAge': null
    },
    {
      'region': 'Saint Lucia',
      'cellSubscribersPer100': 126,
      'adultLiteracyRate': null,
      'growthRate': -1.1,
      'urbanPopulationRate': 17,
      'extremePovertyRate': 20.93,
      'medianAge': 30.17
    },
    {
      'region': 'Saint Vincent and the Grenadines',
      'cellSubscribersPer100': 124,
      'adultLiteracyRate': null,
      'growthRate': 0,
      'urbanPopulationRate': 50,
      'extremePovertyRate': null,
      'medianAge': 28.64
    },
    {
      'region': 'Samoa',
      'cellSubscribersPer100': 91,
      'adultLiteracyRate': 98.8,
      'growthRate': -1.1,
      'urbanPopulationRate': 20,
      'extremePovertyRate': null,
      'medianAge': 20.95
    },
    {
      'region': 'San Marino',
      'cellSubscribersPer100': 115,
      'adultLiteracyRate': null,
      'growthRate': 0,
      'urbanPopulationRate': 94,
      'extremePovertyRate': null,
      'medianAge': null
    },
    {
      'region': 'Sao Tome and Principe',
      'cellSubscribersPer100': 65,
      'adultLiteracyRate': 89.2,
      'growthRate': -2.7,
      'urbanPopulationRate': 63,
      'extremePovertyRate': 28.18,
      'medianAge': 19.13
    },
    {
      'region': 'Saudi Arabia',
      'cellSubscribersPer100': 187,
      'adultLiteracyRate': 87.2,
      'growthRate': -1.9,
      'urbanPopulationRate': 83,
      'extremePovertyRate': null,
      'medianAge': 27.03
    },
    {
      'region': 'Senegal',
      'cellSubscribersPer100': 84,
      'adultLiteracyRate': 49.7,
      'growthRate': -2.9,
      'urbanPopulationRate': 43,
      'extremePovertyRate': 29.61,
      'medianAge': 18.01
    },
    {
      'region': 'Serbia',
      'cellSubscribersPer100': 96,
      'adultLiteracyRate': 98,
      'growthRate': 0.5,
      'urbanPopulationRate': 57,
      'extremePovertyRate': 0.21,
      'medianAge': 38.38
    },
    {
      'region': 'Seychelles',
      'cellSubscribersPer100': 148,
      'adultLiteracyRate': 91.8,
      'growthRate': 0,
      'urbanPopulationRate': 54,
      'extremePovertyRate': 0.25,
      'medianAge': 32.26
    },
    {
      'region': 'Sierra Leone',
      'cellSubscribersPer100': 37,
      'adultLiteracyRate': 43.3,
      'growthRate': -1.9,
      'urbanPopulationRate': 40,
      'extremePovertyRate': 51.71,
      'medianAge': 18.98
    },
    {
      'region': 'Singapore',
      'cellSubscribersPer100': 152,
      'adultLiteracyRate': 95.9,
      'growthRate': -2.1,
      'urbanPopulationRate': 100,
      'extremePovertyRate': null,
      'medianAge': 37.88
    },
    {
      'region': 'Slovakia',
      'cellSubscribersPer100': 112,
      'adultLiteracyRate': null,
      'growthRate': -0.1,
      'urbanPopulationRate': 55,
      'extremePovertyRate': 0.06,
      'medianAge': 37.87
    },
    {
      'region': 'Slovenia',
      'cellSubscribersPer100': 109,
      'adultLiteracyRate': 99.7,
      'growthRate': -0.3,
      'urbanPopulationRate': 50,
      'extremePovertyRate': 0.06,
      'medianAge': 42.1
    },
    {
      'region': 'Solomon Islands',
      'cellSubscribersPer100': 55,
      'adultLiteracyRate': 76.6,
      'growthRate': -2.2,
      'urbanPopulationRate': 21,
      'extremePovertyRate': null,
      'medianAge': 19.62
    },
    {
      'region': 'Somalia',
      'cellSubscribersPer100': 23,
      'adultLiteracyRate': null,
      'growthRate': -2.9,
      'urbanPopulationRate': 38,
      'extremePovertyRate': null,
      'medianAge': 16.25
    },
    {
      'region': 'South Africa',
      'cellSubscribersPer100': 131,
      'adultLiteracyRate': 93,
      'growthRate': -0.8,
      'urbanPopulationRate': 62,
      'extremePovertyRate': 13.77,
      'medianAge': 25.7
    },
    {
      'region': 'South Sudan',
      'cellSubscribersPer100': 21,
      'adultLiteracyRate': null,
      'growthRate': -4.3,
      'urbanPopulationRate': 18,
      'extremePovertyRate': null,
      'medianAge': 18.52
    },
    {
      'region': 'Spain',
      'cellSubscribersPer100': 108,
      'adultLiteracyRate': 97.7,
      'growthRate': -0.5,
      'urbanPopulationRate': 78,
      'extremePovertyRate': null,
      'medianAge': 40.99
    },
    {
      'region': 'Sri Lanka',
      'cellSubscribersPer100': 92,
      'adultLiteracyRate': 91.2,
      'growthRate': -0.8,
      'urbanPopulationRate': 15,
      'extremePovertyRate': 4.11,
      'medianAge': 31.12
    },
    {
      'region': 'Sudan',
      'cellSubscribersPer100': 74,
      'adultLiteracyRate': null,
      'growthRate': -2.1,
      'urbanPopulationRate': 33,
      'extremePovertyRate': 19.8,
      'medianAge': 19.02
    },
    {
      'region': 'Suriname',
      'cellSubscribersPer100': 106,
      'adultLiteracyRate': 94.7,
      'growthRate': -0.9,
      'urbanPopulationRate': 70,
      'extremePovertyRate': 15.54,
      'medianAge': 28.18
    },
    {
      'region': 'Swaziland',
      'cellSubscribersPer100': 65,
      'adultLiteracyRate': 87.8,
      'growthRate': -1.6,
      'urbanPopulationRate': 21,
      'extremePovertyRate': 40.63,
      'medianAge': 19.82
    },
    {
      'region': 'Sweden',
      'cellSubscribersPer100': 125,
      'adultLiteracyRate': null,
      'growthRate': -0.7,
      'urbanPopulationRate': 85,
      'extremePovertyRate': null,
      'medianAge': 40.91
    },
    {
      'region': 'Switzerland',
      'cellSubscribersPer100': 130,
      'adultLiteracyRate': null,
      'growthRate': -1,
      'urbanPopulationRate': 74,
      'extremePovertyRate': null,
      'medianAge': 41.85
    },
    {
      'region': 'Syrian Arab Republic',
      'cellSubscribersPer100': 59,
      'adultLiteracyRate': 84.1,
      'growthRate': -0.4,
      'urbanPopulationRate': 56,
      'extremePovertyRate': 1.71,
      'medianAge': 22.21
    },
    {
      'region': 'Tajikistan',
      'cellSubscribersPer100': 82,
      'adultLiteracyRate': 99.7,
      'growthRate': -2.5,
      'urbanPopulationRate': 27,
      'extremePovertyRate': 6.56,
      'medianAge': 21.54
    },
    {
      'region': 'Thailand',
      'cellSubscribersPer100': 127,
      'adultLiteracyRate': 93.5,
      'growthRate': -0.3,
      'urbanPopulationRate': 34,
      'extremePovertyRate': 0.38,
      'medianAge': 36.42
    },
    {
      'region': 'The former Yugoslav Republic of Macedonia',
      'cellSubscribersPer100': 106,
      'adultLiteracyRate': 97.4,
      'growthRate': -0.1,
      'urbanPopulationRate': 59,
      'extremePovertyRate': 0.6,
      'medianAge': 36.79
    },
    {
      'region': 'Timor-Leste',
      'cellSubscribersPer100': 56,
      'adultLiteracyRate': 58.3,
      'growthRate': -1.6,
      'urbanPopulationRate': 29,
      'extremePovertyRate': null,
      'medianAge': 16.4
    },
    {
      'region': 'Togo',
      'cellSubscribersPer100': 50,
      'adultLiteracyRate': 60.4,
      'growthRate': -2.6,
      'urbanPopulationRate': 38,
      'extremePovertyRate': 28.22,
      'medianAge': 18.82
    },
    {
      'region': 'Tonga',
      'cellSubscribersPer100': 53,
      'adultLiteracyRate': 99,
      'growthRate': 0,
      'urbanPopulationRate': 24,
      'extremePovertyRate': null,
      'medianAge': 21.28
    },
    {
      'region': 'Trinidad and Tobago',
      'cellSubscribersPer100': 141,
      'adultLiteracyRate': 98.8,
      'growthRate': -0.3,
      'urbanPopulationRate': 14,
      'extremePovertyRate': 4.16,
      'medianAge': 32.84
    },
    {
      'region': 'Tunisia',
      'cellSubscribersPer100': 118,
      'adultLiteracyRate': 79.1,
      'growthRate': -1.1,
      'urbanPopulationRate': 67,
      'extremePovertyRate': 1.06,
      'medianAge': 29.89
    },
    {
      'region': 'Turkey',
      'cellSubscribersPer100': 91,
      'adultLiteracyRate': 94.1,
      'growthRate': -1.3,
      'urbanPopulationRate': 72,
      'extremePovertyRate': 1.34,
      'medianAge': 29.04
    },
    {
      'region': 'Turkmenistan',
      'cellSubscribersPer100': 76,
      'adultLiteracyRate': 99.6,
      'growthRate': -1.3,
      'urbanPopulationRate': 49,
      'extremePovertyRate': 24.82,
      'medianAge': 25.26
    },
    {
      'region': 'Tuvalu',
      'cellSubscribersPer100': 28,
      'adultLiteracyRate': null,
      'growthRate': 0,
      'urbanPopulationRate': 51,
      'extremePovertyRate': null,
      'medianAge': null
    },
    {
      'region': 'Uganda',
      'cellSubscribersPer100': 45,
      'adultLiteracyRate': 73.2,
      'growthRate': -3.4,
      'urbanPopulationRate': 16,
      'extremePovertyRate': 38.01,
      'medianAge': 15.68
    },
    {
      'region': 'Ukraine',
      'cellSubscribersPer100': 130,
      'adultLiteracyRate': 99.7,
      'growthRate': 0.6,
      'urbanPopulationRate': 69,
      'extremePovertyRate': 0.02,
      'medianAge': 39.62
    },
    {
      'region': 'United Arab Emirates',
      'cellSubscribersPer100': 150,
      'adultLiteracyRate': 90,
      'growthRate': -3.1,
      'urbanPopulationRate': 85,
      'extremePovertyRate': null,
      'medianAge': 29.37
    },
    {
      'region': 'United Kingdom',
      'cellSubscribersPer100': 135,
      'adultLiteracyRate': null,
      'growthRate': -0.6,
      'urbanPopulationRate': 80,
      'extremePovertyRate': null,
      'medianAge': 40.07
    },
    {
      'region': 'United Republic of Tanzania',
      'cellSubscribersPer100': 57,
      'adultLiteracyRate': 67.8,
      'growthRate': -3,
      'urbanPopulationRate': 27,
      'extremePovertyRate': 67.87,
      'medianAge': 17.49
    },
    {
      'region': 'United States of America',
      'cellSubscribersPer100': 95,
      'adultLiteracyRate': null,
      'growthRate': -0.9,
      'urbanPopulationRate': 83,
      'extremePovertyRate': null,
      'medianAge': 37.3
    },
    {
      'region': 'Uruguay',
      'cellSubscribersPer100': 147,
      'adultLiteracyRate': 98.1,
      'growthRate': -0.4,
      'urbanPopulationRate': 93,
      'extremePovertyRate': 0.2,
      'medianAge': 34.16
    },
    {
      'region': 'Uzbekistan',
      'cellSubscribersPer100': 71,
      'adultLiteracyRate': 99.4,
      'growthRate': -1.4,
      'urbanPopulationRate': 36,
      'extremePovertyRate': null,
      'medianAge': 24.88
    },
    {
      'region': 'Vanuatu',
      'cellSubscribersPer100': 59,
      'adultLiteracyRate': 83.2,
      'growthRate': -2,
      'urbanPopulationRate': 25,
      'extremePovertyRate': null,
      'medianAge': 21.56
    },
    {
      'region': 'Venezuela (Bolivarian Republic of)',
      'cellSubscribersPer100': 102,
      'adultLiteracyRate': 95.5,
      'growthRate': -1.5,
      'urbanPopulationRate': 94,
      'extremePovertyRate': 6.63,
      'medianAge': 26.73
    },
    {
      'region': 'Viet Nam',
      'cellSubscribersPer100': 148,
      'adultLiteracyRate': 93.4,
      'growthRate': -1,
      'urbanPopulationRate': 32,
      'extremePovertyRate': 16.85,
      'medianAge': 29.41
    },
    {
      'region': 'Yemen',
      'cellSubscribersPer100': 58,
      'adultLiteracyRate': 65.3,
      'growthRate': -2.3,
      'urbanPopulationRate': 33,
      'extremePovertyRate': 17.53,
      'medianAge': 18.78
    },
    {
      'region': 'Zambia',
      'cellSubscribersPer100': 75,
      'adultLiteracyRate': 71.2,
      'growthRate': -3.2,
      'urbanPopulationRate': 40,
      'extremePovertyRate': 74.45,
      'medianAge': 16.54
    },
    {
      'region': 'Zimbabwe',
      'cellSubscribersPer100': 92,
      'adultLiteracyRate': 83.6,
      'growthRate': -2.7,
      'urbanPopulationRate': 39,
      'extremePovertyRate': null,
      'medianAge': 19.18
    },
    {
      'region': 'Sudan (former)',
      'cellSubscribersPer100': null,
      'adultLiteracyRate': 71.1,
      'growthRate': null,
      'urbanPopulationRate': null,
      'extremePovertyRate': null,
      'medianAge': null
    }
  ];