const restaurants = [
	{
		info: {
			id: '10575',
			name: 'Pizza Hut',
			cloudinaryImageId: '2b4f62d606d1b2bfba9ba9e5386fabb7',
			locality: 'Shanti Nagar',
			areaName: 'Shanti Nagar',
			costForTwo: '₹600 for two',
			cuisines: [ 'Pizzas' ],
			avgRating: 4.1,
			parentId: '721',
			avgRatingString: '4.1',
			totalRatingsString: '5K+',
			sla: {
				deliveryTime: 35,
				lastMileTravel: 2.5,
				serviceability: 'SERVICEABLE',
				slaString: '30-35 mins',
				lastMileTravelString: '2.5 km',
				iconType: 'ICON_TYPE_EMPTY'
			},
			availability: {
				nextCloseTime: '2024-03-02 01:00:00',
				opened: true
			},
			badges: {},
			isOpen: true,
			aggregatedDiscountInfoV2: {},
			type: 'F',
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {}
				}
			},
			differentiatedUi: {
				displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
				differentiatedUiMediaDetails: {
					mediaType: 'ADS_MEDIA_ENUM_IMAGE',
					lottie: {},
					video: {}
				}
			},
			reviewsSummary: {},
			displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
			restaurantOfferPresentationInfo: {}
		},
		analytics: {},
		cta: {
			link: 'https://www.swiggy.com/restaurants/pizza-hut-shanti-nagar-bangalore-10575',
			type: 'WEBLINK'
		}
	},
	{
		info: {
			id: '22037',
			name: 'Wow! Momo',
			cloudinaryImageId: '64fd45fd9f44c1737bc446e470bed666',
			locality: 'Brigade Road',
			areaName: 'Brigade Road',
			costForTwo: '₹250 for two',
			cuisines: [
				'Tibetan',
				'Healthy Food',
				'Asian',
				'Chinese',
				'Snacks',
				'Continental',
				'Desserts',
				'Beverages'
			],
			avgRating: 4.3,
			parentId: '1776',
			avgRatingString: '4.3',
			totalRatingsString: '5K+',
			sla: {
				deliveryTime: 35,
				lastMileTravel: 2.1,
				serviceability: 'SERVICEABLE',
				slaString: '35-40 mins',
				lastMileTravelString: '2.1 km',
				iconType: 'ICON_TYPE_EMPTY'
			},
			availability: {
				nextCloseTime: '2024-03-01 23:00:00',
				opened: true
			},
			badges: {},
			isOpen: true,
			type: 'F',
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {}
				}
			},
			aggregatedDiscountInfoV3: {
				header: '60% OFF',
				subHeader: 'UPTO ₹120'
			},
			differentiatedUi: {
				displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
				differentiatedUiMediaDetails: {
					mediaType: 'ADS_MEDIA_ENUM_IMAGE',
					lottie: {},
					video: {}
				}
			},
			reviewsSummary: {},
			displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
			restaurantOfferPresentationInfo: {}
		},
		analytics: {},
		cta: {
			link: 'https://www.swiggy.com/restaurants/wow-momo-brigade-road-bangalore-22037',
			type: 'WEBLINK'
		}
	},
	{
		info: {
			id: '347868',
			name: 'KFC',
			cloudinaryImageId: 'f01666ac73626461d7455d9c24005cd4',
			locality: 'Cunnigham road',
			areaName: 'Vasanth Nagar',
			costForTwo: '₹400 for two',
			cuisines: [ 'Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food' ],
			avgRating: 4.1,
			parentId: '547',
			avgRatingString: '4.1',
			totalRatingsString: '1K+',
			sla: {
				deliveryTime: 36,
				lastMileTravel: 3,
				serviceability: 'SERVICEABLE',
				slaString: '35-40 mins',
				lastMileTravelString: '3.0 km',
				iconType: 'ICON_TYPE_EMPTY'
			},
			availability: {
				nextCloseTime: '2024-03-02 03:00:00',
				opened: true
			},
			badges: {},
			isOpen: true,
			aggregatedDiscountInfoV2: {},
			type: 'F',
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {}
				}
			},
			differentiatedUi: {
				displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
				differentiatedUiMediaDetails: {
					mediaType: 'ADS_MEDIA_ENUM_IMAGE',
					lottie: {},
					video: {}
				}
			},
			reviewsSummary: {},
			displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
			restaurantOfferPresentationInfo: {}
		},
		analytics: {},
		cta: {
			link: 'https://www.swiggy.com/restaurants/kfc-cunnigham-road-vasanth-nagar-bangalore-347868',
			type: 'WEBLINK'
		}
	},
	{
		info: {
			id: '43836',
			name: "McDonald's",
			cloudinaryImageId: 'f62564e14944753903849c4ef673af4d',
			locality: 'MG Road',
			areaName: 'Ashok Nagar',
			costForTwo: '₹400 for two',
			cuisines: [ 'Burgers', 'Beverages', 'Cafe', 'Desserts' ],
			avgRating: 4.3,
			parentId: '630',
			avgRatingString: '4.3',
			totalRatingsString: '10K+',
			sla: {
				deliveryTime: 25,
				lastMileTravel: 0.7,
				serviceability: 'SERVICEABLE',
				slaString: '20-25 mins',
				lastMileTravelString: '0.7 km',
				iconType: 'ICON_TYPE_EMPTY'
			},
			availability: {
				nextCloseTime: '2024-03-01 23:00:00',
				opened: true
			},
			badges: {
				textExtendedBadges: [
					{
						iconId: 'guiltfree/GF_Logo_android_3x',
						shortDescription: 'options available',
						fontColor: '#7E808C'
					}
				]
			},
			isOpen: true,
			type: 'F',
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {
						badgeObject: [
							{
								attributes: {
									description: '',
									fontColor: '#7E808C',
									iconId: 'guiltfree/GF_Logo_android_3x',
									shortDescription: 'options available'
								}
							}
						]
					}
				}
			},
			aggregatedDiscountInfoV3: {
				header: 'ITEMS',
				subHeader: 'AT ₹199'
			},
			differentiatedUi: {
				displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
				differentiatedUiMediaDetails: {
					mediaType: 'ADS_MEDIA_ENUM_IMAGE',
					lottie: {},
					video: {}
				}
			},
			reviewsSummary: {},
			displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
			restaurantOfferPresentationInfo: {}
		},
		analytics: {},
		cta: {
			link: 'https://www.swiggy.com/restaurants/mcdonalds-mg-road-ashok-nagar-bangalore-43836',
			type: 'WEBLINK'
		}
	},
	{
		info: {
			id: '23847',
			name: "Domino's Pizza",
			cloudinaryImageId: 'fjqcvqfgqlw6h0atques',
			locality: 'Rest House Road',
			areaName: 'Brigade Road',
			costForTwo: '₹400 for two',
			cuisines: [ 'Pizzas', 'Italian', 'Pastas', 'Desserts' ],
			avgRating: 4.4,
			parentId: '2456',
			avgRatingString: '4.4',
			totalRatingsString: '5K+',
			sla: {
				deliveryTime: 25,
				serviceability: 'SERVICEABLE',
				slaString: '25 mins',
				iconType: 'ICON_TYPE_EMPTY'
			},
			availability: {
				nextCloseTime: '2024-03-01 22:59:00',
				opened: true
			},
			badges: {},
			isOpen: true,
			type: 'F',
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {}
				}
			},
			aggregatedDiscountInfoV3: {
				header: '40% OFF',
				subHeader: 'UPTO ₹80'
			},
			differentiatedUi: {
				displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
				differentiatedUiMediaDetails: {
					mediaType: 'ADS_MEDIA_ENUM_IMAGE',
					lottie: {},
					video: {}
				}
			},
			reviewsSummary: {},
			displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
			restaurantOfferPresentationInfo: {}
		},
		analytics: {},
		cta: {
			link: 'https://www.swiggy.com/restaurants/dominos-pizza-rest-house-road-brigade-road-bangalore-23847',
			type: 'WEBLINK'
		}
	},
	{
		info: {
			id: '3369',
			name: 'Truffles',
			cloudinaryImageId: 'cd832b6167eb9f88aeb1ccdebf38d942',
			locality: 'St. Marks Road',
			areaName: 'St. Marks Road',
			costForTwo: '₹450 for two',
			cuisines: [ 'American', 'Desserts', 'Continental', 'Italian' ],
			avgRating: 4.6,
			parentId: '218065',
			avgRatingString: '4.6',
			totalRatingsString: '10K+',
			sla: {
				deliveryTime: 35,
				lastMileTravel: 0.8,
				serviceability: 'SERVICEABLE',
				slaString: '35-40 mins',
				lastMileTravelString: '0.8 km',
				iconType: 'ICON_TYPE_EMPTY'
			},
			availability: {
				nextCloseTime: '2024-03-01 23:30:00',
				opened: true
			},
			badges: {},
			isOpen: true,
			aggregatedDiscountInfoV2: {},
			type: 'F',
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {}
				}
			},
			differentiatedUi: {
				displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
				differentiatedUiMediaDetails: {
					mediaType: 'ADS_MEDIA_ENUM_IMAGE',
					lottie: {},
					video: {}
				}
			},
			reviewsSummary: {},
			displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
			restaurantOfferPresentationInfo: {}
		},
		analytics: {},
		cta: {
			link: 'https://www.swiggy.com/restaurants/truffles-st-marks-road-bangalore-3369',
			type: 'WEBLINK'
		}
	},
	{
		info: {
			id: '29063',
			name: 'Misu',
			cloudinaryImageId: 'lx0tpfgsbqygafwh30wh',
			locality: 'St. Marks Road',
			areaName: 'St. Marks Road',
			costForTwo: '₹1300 for two',
			cuisines: [ 'Asian', 'Chinese', 'Vietnamese', 'Malaysian', 'Sushi', 'Singaporean', 'Desserts' ],
			avgRating: 4.5,
			parentId: '7415',
			avgRatingString: '4.5',
			totalRatingsString: '5K+',
			sla: {
				deliveryTime: 36,
				lastMileTravel: 0.8,
				serviceability: 'SERVICEABLE',
				slaString: '35-40 mins',
				lastMileTravelString: '0.8 km',
				iconType: 'ICON_TYPE_EMPTY'
			},
			availability: {
				nextCloseTime: '2024-03-02 00:00:00',
				opened: true
			},
			badges: {
				imageBadges: [
					{
						imageId: 'newg.png',
						description: 'Gourmet'
					}
				],
				textExtendedBadges: [
					{
						iconId: 'guiltfree/GF_Logo_android_3x',
						shortDescription: 'options available',
						fontColor: '#7E808C'
					}
				]
			},
			isOpen: true,
			type: 'F',
			badgesV2: {
				entityBadges: {
					imageBased: {
						badgeObject: [
							{
								attributes: {
									description: 'Gourmet',
									imageId: 'newg.png'
								}
							}
						]
					},
					textBased: {},
					textExtendedBadges: {
						badgeObject: [
							{
								attributes: {
									description: '',
									fontColor: '#7E808C',
									iconId: 'guiltfree/GF_Logo_android_3x',
									shortDescription: 'options available'
								}
							}
						]
					}
				}
			},
			aggregatedDiscountInfoV3: {
				header: '60% OFF',
				subHeader: 'UPTO ₹120'
			},
			differentiatedUi: {
				displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
				differentiatedUiMediaDetails: {
					mediaType: 'ADS_MEDIA_ENUM_IMAGE',
					lottie: {},
					video: {}
				}
			},
			reviewsSummary: {},
			displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
			restaurantOfferPresentationInfo: {}
		},
		analytics: {},
		cta: {
			link: 'https://www.swiggy.com/restaurants/misu-st-marks-road-bangalore-29063',
			type: 'WEBLINK'
		}
	},
	{
		info: {
			id: '3434',
			name: 'Nandhini Deluxe',
			cloudinaryImageId: 'dlt4ml0id5wei4yi840b',
			locality: 'St. Marks Road',
			areaName: 'St Marks Road',
			costForTwo: '₹500 for two',
			cuisines: [ 'Andhra', 'Biryani', 'Chinese', 'North Indian' ],
			avgRating: 4.3,
			parentId: '2451',
			avgRatingString: '4.3',
			totalRatingsString: '10K+',
			sla: {
				deliveryTime: 31,
				lastMileTravel: 0.9,
				serviceability: 'SERVICEABLE',
				slaString: '30-35 mins',
				lastMileTravelString: '0.9 km',
				iconType: 'ICON_TYPE_EMPTY'
			},
			availability: {
				nextCloseTime: '2024-03-02 00:00:00',
				opened: true
			},
			badges: {},
			isOpen: true,
			type: 'F',
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {}
				}
			},
			aggregatedDiscountInfoV3: {
				header: '40% OFF',
				subHeader: 'UPTO ₹80'
			},
			differentiatedUi: {
				displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
				differentiatedUiMediaDetails: {
					mediaType: 'ADS_MEDIA_ENUM_IMAGE',
					lottie: {},
					video: {}
				}
			},
			reviewsSummary: {},
			displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
			restaurantOfferPresentationInfo: {}
		},
		analytics: {},
		cta: {
			link: 'https://www.swiggy.com/restaurants/nandhini-deluxe-st-marks-road-bangalore-3434',
			type: 'WEBLINK'
		}
	},
	{
		info: {
			id: '17376',
			name: "Glen's Bakehouse",
			cloudinaryImageId: 'm6jahioyu7zrodei5pcq',
			locality: 'Lavelle Road',
			areaName: 'Ashok Nagar',
			costForTwo: '₹500 for two',
			cuisines: [ 'Desserts', 'Bakery', 'Beverages', 'Continental', 'Italian' ],
			avgRating: 4.6,
			parentId: '3220',
			avgRatingString: '4.6',
			totalRatingsString: '10K+',
			sla: {
				deliveryTime: 27,
				lastMileTravel: 0.4,
				serviceability: 'SERVICEABLE',
				slaString: '25-30 mins',
				lastMileTravelString: '0.4 km',
				iconType: 'ICON_TYPE_EMPTY'
			},
			availability: {
				nextCloseTime: '2024-03-02 00:00:00',
				opened: true
			},
			badges: {
				textExtendedBadges: [
					{
						iconId: 'v1705582451/Ratnesh_Badges/Listing_HR.png',
						shortDescription: 'Perfect Cake Delivery',
						fontColor: '#7E808C'
					}
				]
			},
			isOpen: true,
			aggregatedDiscountInfoV2: {},
			type: 'F',
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {
						badgeObject: [
							{
								attributes: {
									description: '',
									fontColor: '#7E808C',
									iconId: 'v1705582451/Ratnesh_Badges/Listing_HR.png',
									shortDescription: 'Perfect Cake Delivery'
								}
							}
						]
					}
				}
			},
			differentiatedUi: {
				displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
				differentiatedUiMediaDetails: {
					mediaType: 'ADS_MEDIA_ENUM_IMAGE',
					lottie: {},
					video: {}
				}
			},
			reviewsSummary: {},
			displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
			restaurantOfferPresentationInfo: {}
		},
		analytics: {},
		cta: {
			link: 'https://www.swiggy.com/restaurants/glens-bakehouse-lavelle-road-ashok-nagar-bangalore-17376',
			type: 'WEBLINK'
		}
	},
	{
		info: {
			id: '146304',
			name: 'Hyderabad Biryaani House',
			cloudinaryImageId: 'taavokxehqfaugbzzhzk',
			locality: 'Victoria Road',
			areaName: 'Ashok Nagar',
			costForTwo: '₹499 for two',
			cuisines: [ 'Indian' ],
			avgRating: 4.3,
			parentId: '2403',
			avgRatingString: '4.3',
			totalRatingsString: '5K+',
			sla: {
				deliveryTime: 29,
				lastMileTravel: 2.8,
				serviceability: 'SERVICEABLE',
				slaString: '25-30 mins',
				lastMileTravelString: '2.8 km',
				iconType: 'ICON_TYPE_EMPTY'
			},
			availability: {
				nextCloseTime: '2024-03-01 15:45:00',
				opened: true
			},
			badges: {},
			isOpen: true,
			type: 'F',
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {}
				}
			},
			aggregatedDiscountInfoV3: {
				header: '10% OFF',
				subHeader: 'ABOVE ₹800',
				discountTag: 'FLAT DEAL'
			},
			differentiatedUi: {
				displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
				differentiatedUiMediaDetails: {
					mediaType: 'ADS_MEDIA_ENUM_IMAGE',
					lottie: {},
					video: {}
				}
			},
			reviewsSummary: {},
			displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
			restaurantOfferPresentationInfo: {}
		},
		analytics: {},
		cta: {
			link:
				'https://www.swiggy.com/restaurants/hyderabad-biryaani-house-victoria-road-ashok-nagar-bangalore-146304',
			type: 'WEBLINK'
		}
	},
	{
		info: {
			id: '51835',
			name: 'Aubree',
			cloudinaryImageId: '65faa4b5046cb2215fe285a8b96c9bd7',
			locality: 'Timmaiah Road',
			areaName: 'Shivajinagar',
			costForTwo: '₹700 for two',
			cuisines: [ 'Desserts', 'Bakery' ],
			avgRating: 4.4,
			veg: true,
			parentId: '3807',
			avgRatingString: '4.4',
			totalRatingsString: '1K+',
			sla: {
				deliveryTime: 34,
				lastMileTravel: 2.8,
				serviceability: 'SERVICEABLE',
				slaString: '30-35 mins',
				lastMileTravelString: '2.8 km',
				iconType: 'ICON_TYPE_EMPTY'
			},
			availability: {
				nextCloseTime: '2024-03-01 21:00:00',
				opened: true
			},
			badges: {
				textExtendedBadges: [
					{
						iconId: 'v1705582451/Ratnesh_Badges/Listing_HR.png',
						shortDescription: 'Perfect Cake Delivery',
						fontColor: '#7E808C'
					}
				]
			},
			isOpen: true,
			type: 'D',
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {
						badgeObject: [
							{
								attributes: {
									description: '',
									fontColor: '#7E808C',
									iconId: 'v1705582451/Ratnesh_Badges/Listing_HR.png',
									shortDescription: 'Perfect Cake Delivery'
								}
							}
						]
					}
				}
			},
			aggregatedDiscountInfoV3: {
				header: '₹125 OFF',
				subHeader: 'ABOVE ₹399',
				discountTag: 'FLAT DEAL'
			},
			differentiatedUi: {
				displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
				differentiatedUiMediaDetails: {
					mediaType: 'ADS_MEDIA_ENUM_IMAGE',
					lottie: {},
					video: {}
				}
			},
			reviewsSummary: {},
			displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
			restaurantOfferPresentationInfo: {}
		},
		analytics: {},
		cta: {
			link: 'https://www.swiggy.com/restaurants/aubree-timmaiah-road-shivajinagar-bangalore-51835',
			type: 'WEBLINK'
		}
	},
	{
		info: {
			id: '58568',
			name: 'Sweet Chariot',
			cloudinaryImageId: 'aun89df8igfy1zu0xf5v',
			locality: 'Brigade Road',
			areaName: 'Ashok Nagar',
			costForTwo: '₹200 for two',
			cuisines: [ 'Desserts' ],
			avgRating: 4.2,
			parentId: '912',
			avgRatingString: '4.2',
			totalRatingsString: '100+',
			sla: {
				deliveryTime: 25,
				lastMileTravel: 1.8,
				serviceability: 'SERVICEABLE',
				slaString: '25-30 mins',
				lastMileTravelString: '1.8 km',
				iconType: 'ICON_TYPE_EMPTY'
			},
			availability: {
				nextCloseTime: '2024-03-01 21:00:00',
				opened: true
			},
			badges: {},
			isOpen: true,
			aggregatedDiscountInfoV2: {},
			type: 'F',
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {}
				}
			},
			differentiatedUi: {
				displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
				differentiatedUiMediaDetails: {
					mediaType: 'ADS_MEDIA_ENUM_IMAGE',
					lottie: {},
					video: {}
				}
			},
			reviewsSummary: {},
			displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
			restaurantOfferPresentationInfo: {}
		},
		analytics: {},
		cta: {
			link: 'https://www.swiggy.com/restaurants/sweet-chariot-brigade-road-ashok-nagar-bangalore-58568',
			type: 'WEBLINK'
		}
	},
	{
		info: {
			id: '342643',
			name: 'The Pizza Bakery - Wood Fired Sourdough',
			cloudinaryImageId: '0335dd45be555d0a4187255e57d2ca88',
			locality: 'Church Street',
			areaName: 'Ashok Nagar',
			costForTwo: '₹700 for two',
			cuisines: [ 'Pizzas', 'Pastas', 'Italian', 'Desserts', 'Continental' ],
			avgRating: 4.5,
			parentId: '11108',
			avgRatingString: '4.5',
			totalRatingsString: '1K+',
			sla: {
				deliveryTime: 34,
				lastMileTravel: 1.3,
				serviceability: 'SERVICEABLE',
				slaString: '30-35 mins',
				lastMileTravelString: '1.3 km',
				iconType: 'ICON_TYPE_EMPTY'
			},
			availability: {
				nextCloseTime: '2024-03-01 23:30:00',
				opened: true
			},
			badges: {
				imageBadges: [
					{
						imageId: 'newg.png',
						description: 'Gourmet'
					}
				],
				textExtendedBadges: [
					{
						iconId: 'guiltfree/GF_Logo_android_3x',
						shortDescription: 'options available',
						fontColor: '#7E808C'
					}
				]
			},
			isOpen: true,
			type: 'F',
			badgesV2: {
				entityBadges: {
					imageBased: {
						badgeObject: [
							{
								attributes: {
									description: 'Gourmet',
									imageId: 'newg.png'
								}
							}
						]
					},
					textBased: {},
					textExtendedBadges: {
						badgeObject: [
							{
								attributes: {
									description: '',
									fontColor: '#7E808C',
									iconId: 'guiltfree/GF_Logo_android_3x',
									shortDescription: 'options available'
								}
							}
						]
					}
				}
			},
			aggregatedDiscountInfoV3: {
				header: '40% OFF',
				subHeader: 'UPTO ₹100'
			},
			differentiatedUi: {
				displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
				differentiatedUiMediaDetails: {
					mediaType: 'ADS_MEDIA_ENUM_IMAGE',
					lottie: {},
					video: {}
				}
			},
			reviewsSummary: {},
			displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
			restaurantOfferPresentationInfo: {}
		},
		analytics: {},
		cta: {
			link:
				'https://www.swiggy.com/restaurants/the-pizza-bakery-wood-fired-sourdough-church-street-ashok-nagar-bangalore-342643',
			type: 'WEBLINK'
		}
	},
	{
		info: {
			id: '25282',
			name: 'Baskin Robbins - Ice Cream Desserts',
			cloudinaryImageId: '85ccae4e3576f9330af102c46ca85395',
			locality: 'Millars Road',
			areaName: 'Vasanth Nagar',
			costForTwo: '₹263 for two',
			cuisines: [ 'Desserts' ],
			avgRating: 4.5,
			veg: true,
			parentId: '5588',
			avgRatingString: '4.5',
			totalRatingsString: '1K+',
			sla: {
				deliveryTime: 31,
				lastMileTravel: 3,
				serviceability: 'SERVICEABLE',
				slaString: '30-35 mins',
				lastMileTravelString: '3.0 km',
				iconType: 'ICON_TYPE_EMPTY'
			},
			availability: {
				nextCloseTime: '2024-03-02 00:00:00',
				opened: true
			},
			badges: {
				imageBadges: [
					{
						imageId: 'v1695133679/badges/Pure_Veg111.png',
						description: 'pureveg'
					}
				],
				textExtendedBadges: [
					{
						iconId: 'v1705582451/Ratnesh_Badges/Listing_HR.png',
						shortDescription: 'Perfect Cake Delivery',
						fontColor: '#7E808C'
					}
				]
			},
			isOpen: true,
			type: 'F',
			badgesV2: {
				entityBadges: {
					imageBased: {
						badgeObject: [
							{
								attributes: {
									description: 'pureveg',
									imageId: 'v1695133679/badges/Pure_Veg111.png'
								}
							}
						]
					},
					textBased: {},
					textExtendedBadges: {
						badgeObject: [
							{
								attributes: {
									description: '',
									fontColor: '#7E808C',
									iconId: 'v1705582451/Ratnesh_Badges/Listing_HR.png',
									shortDescription: 'Perfect Cake Delivery'
								}
							}
						]
					}
				}
			},
			aggregatedDiscountInfoV3: {
				header: '10% OFF',
				subHeader: 'ABOVE ₹1000',
				discountTag: 'FLAT DEAL'
			},
			differentiatedUi: {
				displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
				differentiatedUiMediaDetails: {
					mediaType: 'ADS_MEDIA_ENUM_IMAGE',
					lottie: {},
					video: {}
				}
			},
			reviewsSummary: {},
			displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
			restaurantOfferPresentationInfo: {}
		},
		analytics: {},
		cta: {
			link:
				'https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-millars-road-vasanth-nagar-bangalore-25282',
			type: 'WEBLINK'
		}
	},
	{
		info: {
			id: '15905',
			name: 'Anand Sweets & Savouries',
			cloudinaryImageId: 'me4mzdjxosmk0lg4ndog',
			locality: 'Commercial Street',
			areaName: 'Shivajinagar',
			costForTwo: '₹200 for two',
			cuisines: [ 'Sweets', 'Chaat', 'Snacks', 'Desserts', 'North Indian' ],
			avgRating: 4.7,
			veg: true,
			parentId: '53',
			avgRatingString: '4.7',
			totalRatingsString: '10K+',
			sla: {
				deliveryTime: 41,
				lastMileTravel: 3,
				serviceability: 'SERVICEABLE',
				slaString: '40-45 mins',
				lastMileTravelString: '3.0 km',
				iconType: 'ICON_TYPE_EMPTY'
			},
			availability: {
				nextCloseTime: '2024-03-01 22:00:00',
				opened: true
			},
			badges: {
				imageBadges: [
					{
						imageId: 'v1695133679/badges/Pure_Veg111.png',
						description: 'pureveg'
					}
				],
				textExtendedBadges: [
					{
						iconId: 'guiltfree/GF_Logo_android_3x',
						shortDescription: 'options available',
						fontColor: '#7E808C'
					}
				]
			},
			isOpen: true,
			aggregatedDiscountInfoV2: {},
			type: 'F',
			badgesV2: {
				entityBadges: {
					imageBased: {
						badgeObject: [
							{
								attributes: {
									description: 'pureveg',
									imageId: 'v1695133679/badges/Pure_Veg111.png'
								}
							}
						]
					},
					textBased: {},
					textExtendedBadges: {
						badgeObject: [
							{
								attributes: {
									description: '',
									fontColor: '#7E808C',
									iconId: 'guiltfree/GF_Logo_android_3x',
									shortDescription: 'options available'
								}
							}
						]
					}
				}
			},
			differentiatedUi: {
				displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
				differentiatedUiMediaDetails: {
					mediaType: 'ADS_MEDIA_ENUM_IMAGE',
					lottie: {},
					video: {}
				}
			},
			reviewsSummary: {},
			displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
			restaurantOfferPresentationInfo: {}
		},
		analytics: {},
		cta: {
			link:
				'https://www.swiggy.com/restaurants/anand-sweets-and-savouries-commercial-street-shivajinagar-bangalore-15905',
			type: 'WEBLINK'
		}
	},
	{
		info: {
			id: '48230',
			name: 'Kanti Sweets',
			cloudinaryImageId: 'u0hhfifwmpsnobytv2yf',
			locality: 'Brigade Road',
			areaName: 'Brigade Road',
			costForTwo: '₹150 for two',
			cuisines: [ 'Sweets' ],
			avgRating: 4.6,
			parentId: '4700',
			avgRatingString: '4.6',
			totalRatingsString: '5K+',
			sla: {
				deliveryTime: 29,
				lastMileTravel: 2,
				serviceability: 'SERVICEABLE',
				slaString: '25-30 mins',
				lastMileTravelString: '2.0 km',
				iconType: 'ICON_TYPE_EMPTY'
			},
			availability: {
				nextCloseTime: '2024-03-01 22:00:00',
				opened: true
			},
			badges: {
				imageBadges: [
					{
						imageId: 'v1695133679/badges/Pure_Veg111.png',
						description: 'pureveg'
					}
				]
			},
			isOpen: true,
			aggregatedDiscountInfoV2: {},
			type: 'F',
			badgesV2: {
				entityBadges: {
					imageBased: {
						badgeObject: [
							{
								attributes: {
									description: 'pureveg',
									imageId: 'v1695133679/badges/Pure_Veg111.png'
								}
							}
						]
					},
					textBased: {},
					textExtendedBadges: {}
				}
			},
			differentiatedUi: {
				displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
				differentiatedUiMediaDetails: {
					mediaType: 'ADS_MEDIA_ENUM_IMAGE',
					lottie: {},
					video: {}
				}
			},
			reviewsSummary: {},
			displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
			restaurantOfferPresentationInfo: {}
		},
		analytics: {},
		cta: {
			link: 'https://www.swiggy.com/restaurants/kanti-sweets-brigade-road-bangalore-48230',
			type: 'WEBLINK'
		}
	},
	{
		info: {
			id: '352792',
			name: 'Grameen Kulfi',
			cloudinaryImageId: 'garnimnzruqmizx2acjt',
			locality: 'Robertson Road',
			areaName: 'Frazer Town',
			costForTwo: '₹120 for two',
			cuisines: [ 'Ice Cream', 'Desserts' ],
			avgRating: 4.7,
			veg: true,
			parentId: '12175',
			avgRatingString: '4.7',
			totalRatingsString: '100+',
			sla: {
				deliveryTime: 35,
				lastMileTravel: 4.5,
				serviceability: 'SERVICEABLE',
				slaString: '35-40 mins',
				lastMileTravelString: '4.5 km',
				iconType: 'ICON_TYPE_EMPTY'
			},
			availability: {
				nextCloseTime: '2024-03-01 23:00:00',
				opened: true
			},
			badges: {},
			isOpen: true,
			type: 'F',
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {}
				}
			},
			aggregatedDiscountInfoV3: {
				header: '₹125 OFF',
				subHeader: 'ABOVE ₹349',
				discountTag: 'FLAT DEAL'
			},
			differentiatedUi: {
				displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
				differentiatedUiMediaDetails: {
					mediaType: 'ADS_MEDIA_ENUM_IMAGE',
					lottie: {},
					video: {}
				}
			},
			reviewsSummary: {},
			displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
			restaurantOfferPresentationInfo: {}
		},
		analytics: {},
		cta: {
			link: 'https://www.swiggy.com/restaurants/grameen-kulfi-robertson-road-frazer-town-bangalore-352792',
			type: 'WEBLINK'
		}
	},
	{
		info: {
			id: '53599',
			name: 'Asha Sweet Center - Since 1951',
			cloudinaryImageId: 'k0bd2fwzwswuevlc8dmu',
			locality: '10th Cross Road',
			areaName: 'Malleshwaram',
			costForTwo: '₹250 for two',
			cuisines: [ 'Sweets', 'Snacks', 'Fast Food', 'Bakery', 'Beverages' ],
			avgRating: 4.7,
			veg: true,
			parentId: '472555',
			avgRatingString: '4.7',
			totalRatingsString: '10K+',
			sla: {
				deliveryTime: 36,
				lastMileTravel: 5.7,
				serviceability: 'SERVICEABLE',
				slaString: '35-40 mins',
				lastMileTravelString: '5.7 km',
				iconType: 'ICON_TYPE_EMPTY'
			},
			availability: {
				nextCloseTime: '2024-03-01 21:45:00',
				opened: true
			},
			badges: {
				imageBadges: [
					{
						imageId: 'v1695133679/badges/Pure_Veg111.png',
						description: 'pureveg'
					}
				],
				textExtendedBadges: [
					{
						iconId: 'guiltfree/GF_Logo_android_3x',
						shortDescription: 'options available',
						fontColor: '#7E808C'
					}
				]
			},
			isOpen: true,
			aggregatedDiscountInfoV2: {},
			type: 'F',
			badgesV2: {
				entityBadges: {
					imageBased: {
						badgeObject: [
							{
								attributes: {
									description: 'pureveg',
									imageId: 'v1695133679/badges/Pure_Veg111.png'
								}
							}
						]
					},
					textBased: {},
					textExtendedBadges: {
						badgeObject: [
							{
								attributes: {
									description: '',
									fontColor: '#7E808C',
									iconId: 'guiltfree/GF_Logo_android_3x',
									shortDescription: 'options available'
								}
							}
						]
					}
				}
			},
			differentiatedUi: {
				displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
				differentiatedUiMediaDetails: {
					mediaType: 'ADS_MEDIA_ENUM_IMAGE',
					lottie: {},
					video: {}
				}
			},
			reviewsSummary: {},
			displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
			restaurantOfferPresentationInfo: {}
		},
		analytics: {},
		cta: {
			link:
				'https://www.swiggy.com/restaurants/asha-sweet-center-since-1951-10th-cross-road-malleshwaram-bangalore-53599',
			type: 'WEBLINK'
		}
	},
	{
		info: {
			id: '393107',
			name: 'EatFit',
			cloudinaryImageId: 'a564ace38895abd960157ac2a76aaf2a',
			locality: 'Ali Asker Road',
			areaName: 'Cunningham Road',
			costForTwo: '₹270 for two',
			cuisines: [ 'Chinese', 'Healthy Food', 'Tandoor', 'Pizzas', 'North Indian', 'Thalis', 'Biryani' ],
			avgRating: 4.4,
			parentId: '76139',
			avgRatingString: '4.4',
			totalRatingsString: '1K+',
			sla: {
				deliveryTime: 34,
				lastMileTravel: 3,
				serviceability: 'SERVICEABLE',
				slaString: '30-35 mins',
				lastMileTravelString: '3.0 km',
				iconType: 'ICON_TYPE_EMPTY'
			},
			availability: {
				nextCloseTime: '2024-03-01 23:59:00',
				opened: true
			},
			badges: {
				textExtendedBadges: [
					{
						iconId: 'guiltfree/GF_Logo_android_3x',
						shortDescription: 'brand',
						fontColor: '#7E808C'
					}
				]
			},
			isOpen: true,
			type: 'F',
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {
						badgeObject: [
							{
								attributes: {
									description: '',
									fontColor: '#7E808C',
									iconId: 'guiltfree/GF_Logo_android_3x',
									shortDescription: 'brand'
								}
							}
						]
					}
				}
			},
			aggregatedDiscountInfoV3: {
				header: '₹150 OFF',
				subHeader: 'ABOVE ₹499',
				discountTag: 'FLAT DEAL'
			},
			differentiatedUi: {
				displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
				differentiatedUiMediaDetails: {
					mediaType: 'ADS_MEDIA_ENUM_IMAGE',
					lottie: {},
					video: {}
				}
			},
			reviewsSummary: {},
			displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
			restaurantOfferPresentationInfo: {}
		},
		analytics: {},
		cta: {
			link: 'https://www.swiggy.com/restaurants/eatfit-ali-asker-road-cunningham-road-bangalore-393107',
			type: 'WEBLINK'
		}
	},
	{
		info: {
			id: '124178',
			name: 'Starbucks Coffee',
			cloudinaryImageId: '2418209798927d733a50f5d2ebcc2aee',
			locality: 'Lavelle Road',
			areaName: 'Lavelle Road',
			costForTwo: '₹400 for two',
			cuisines: [ 'Beverages', 'Cafe', 'Snacks', 'Desserts', 'Bakery', 'Ice Cream' ],
			avgRating: 4.4,
			parentId: '195515',
			avgRatingString: '4.4',
			totalRatingsString: '1K+',
			sla: {
				deliveryTime: 25,
				lastMileTravel: 0.5,
				serviceability: 'SERVICEABLE',
				slaString: '20-25 mins',
				lastMileTravelString: '0.5 km',
				iconType: 'ICON_TYPE_EMPTY'
			},
			availability: {
				nextCloseTime: '2024-03-01 23:59:00',
				opened: true
			},
			badges: {
				textExtendedBadges: [
					{
						iconId: 'guiltfree/GF_Logo_android_3x',
						shortDescription: 'options available',
						fontColor: '#7E808C'
					}
				]
			},
			isOpen: true,
			type: 'F',
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {
						badgeObject: [
							{
								attributes: {
									description: '',
									fontColor: '#7E808C',
									iconId: 'guiltfree/GF_Logo_android_3x',
									shortDescription: 'options available'
								}
							}
						]
					}
				}
			},
			aggregatedDiscountInfoV3: {
				header: '40% OFF',
				subHeader: 'UPTO ₹80'
			},
			differentiatedUi: {
				displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
				differentiatedUiMediaDetails: {
					mediaType: 'ADS_MEDIA_ENUM_IMAGE',
					lottie: {},
					video: {}
				}
			},
			reviewsSummary: {},
			displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
			restaurantOfferPresentationInfo: {}
		},
		analytics: {},
		cta: {
			link: 'https://www.swiggy.com/restaurants/starbucks-coffee-lavelle-road-bangalore-124178',
			type: 'WEBLINK'
		}
	}
];

export default restaurants;
