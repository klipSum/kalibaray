// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// ///////////////////////////////////////////////////////////////////////////////////////////
// DECLARE VARIABLES =========================================================================
// ///////////////////////////////////////////////////////////////////////////////////////////
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    /* BODY ELEMENTS STYLES ------------------------------------------ */
    /* /////////////////////////////////////////////////////////////// */

        // VARIABLES xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        // //////////////////////////////////////////////////////////////

            // FOR NAV BAR ONE MAKE /////////////////////////////////////
            // //////////////////////////////////////////////////////////

                var getBody = document.querySelector("body")
                var getNavBarOneCushion = document.querySelector(".navBarOne")

                    // NAV BAR STRINGS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    // //////////////////////////////////////////////////

                        var navItemsStringCollector = ""
                        var navItemLinksStringCollector = ""
                        var navTitleStringCollector = ""

                    // NAV BAR NUMBER SELECTOR xxxxxxxxxxxxxxxxxxxxxxxxxx
                    // //////////////////////////////////////////////////

                        var navBarClassNameNumberSelector = "";

                    // NAV BAR CLASS NAME xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    // //////////////////////////////////////////////////

                        var getNavBarClassName = ""

                    // NAV BAR TITLE NAME xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    // //////////////////////////////////////////////////

                        var getNavBarTitleName = ""

                    // NAV BAR MENU ITEMS SIZING SETTINGS xxxxxxxxxxxxxxx
                    // //////////////////////////////////////////////////

                        var getNavBarLogoAndTitleSideSizing = "50%"
                        var getNavBarMenuItemsSideSizing = "50%"

                    // NAV BAR MENU ITEMS DISPLAY SETTINGS xxxxxxxxxxxxxx
                    // //////////////////////////////////////////////////

                        var getNavBarTitleControl = "block"
                        var getNavBarDesktopMenuItemsSetting = "inline-table"
                        var getNavBarMobileMenuItemsSetting = "none"

                    // COUNTER FOR SECTION DETECTOR LOOP xxxxxxxxxxxxxxxx
                    // //////////////////////////////////////////////////

                        var sectionLoopCounter = 10;

                    // COUNTER OFFICIAL xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    // //////////////////////////////////////////////////

                        var navBarItemsCounter = 0;

                    // NAV BAR ITEM SELECT NUMBER xxxxxxxxxxxxxxxxxxxxxxx
                    // //////////////////////////////////////////////////

                        var navBarItemFunctionSelect = 0;

                    // SCREEN WIDTH SELECTOR xxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    // //////////////////////////////////////////////////

                        var screenWidthSelector = 0;
                        var screenWidthResizerSelector = 0;

        // ARRAYS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        // //////////////////////////////////////////////////////////////

            // FOR ALL NAV BAR COLLECTIONS //////////////////////////////
            // //////////////////////////////////////////////////////////

                var storeNavBarVariations = [

                ]

            // FOR CLASS NUMBER COUNTER /////////////////////////////////
            // //////////////////////////////////////////////////////////

                var classNumberMapper = [

                    "One", "Two", "Three", "Four", "Five",
                    "Six", "Seven", "Eight", "Nine", "Ten",

                    "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen",
                    "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty",

                    "TwentyOne", "TwentyTwo", "TwentyThree", "TwentyFour", "TwentyFive",
                    "TwentySix", "TwentySeven", "TwentyEight", "TwentyNine", "Thirty",

                    "ThirtyOne", "ThirtyTwo", "ThirtyThree", "ThirtyFour", "ThirtyFive",
                    "ThirtySix", "ThirtySeven", "ThirtyEight", "ThirtyNine", "Fourty",

                    "FourtyOne", "FourtyTwo", "FourtyThree", "FourtyFour", "FourtyFive",
                    "FourtySix", "FourtySeven", "FourtyEight", "FourtyNine", "Fifty"

                ]

            // FOR ALL BAR ITEMS ////////////////////////////////////////
            // //////////////////////////////////////////////////////////

                var storeNavBarItems = []
                var storeNavBarTitle = []
                var storeNavBarItemLinks = []
                var storeNavBarItemsClassNames = []
                var storeNavBarSideMenuIconItems = [

                    `images/icons/sideMenuIcons/sideMenuIconOne.png`,
                    `images/icons/sideMenuIcons/sideMenuIconTwo.png`,
                    `images/icons/sideMenuIcons/sideMenuIconThree.png`,
                    `images/icons/sideMenuIcons/sideMenuIconFour.png`,
                    `images/icons/sideMenuIcons/sideMenuIconFive.png`,

                    `images/icons/sideMenuIcons/sideMenuIconSix.png`,
                    `images/icons/sideMenuIcons/sideMenuIconSeven.png`,
                    `images/icons/sideMenuIcons/sideMenuIconEight.png`,
                    `images/icons/sideMenuIcons/sideMenuIconNine.png`,
                    `images/icons/sideMenuIcons/sideMenuIconTen.png`,

                ]
                var storeNavBarMobileClickersClassNames = []

            // FOR NAV BAR SELECTED /////////////////////////////////////
            // //////////////////////////////////////////////////////////

                var storeSelectedNavBar = []

            // FOR NAV BAR SELECTED /////////////////////////////////////
            // //////////////////////////////////////////////////////////

                // NAV BAR LINE ITEMS -----------------------------------
                // //////////////////////////////////////////////////////

                    var storeNavBarMainPlates = [

                        createNavBarOneMainPlate,
                        createNavBarTwoMainPlate,
                        createNavBarThreeMainPlate,
                        createNavBarFourMainPlate,
                        createNavBarFiveMainPlate
                        
                    ]

                // NAV BAR THEME MAIN BACKGROUND ------------------------
                // //////////////////////////////////////////////////////

                    var storeNavBarThemeBackground = [

                        "#B35151", "#DF7cDF", "#2824C9", "#FEAB3D", "#86fe3d"

                    ]

                // NAV BAR MOBILE MENU MAKE -----------------------------
                // //////////////////////////////////////////////////////

                    var storeNavBarMobileMenuMakes = [

                    ]

                // BUILD NAV BAR CONTENT ITEMS --------------------------
                // //////////////////////////////////////////////////////

                    var storeNavBarContentBuilds = [

                    ]

                // BUILD MOBILE SIDE PANELS CONTENT ITEMS ---------------
                // //////////////////////////////////////////////////////

                    var storeNavBarMobileSidePanels = [

                    ]

                // BUILD POPULATE MOBILE MENU ITEMS ---------------------
                // //////////////////////////////////////////////////////

                    var storeNavBarMobileMenuItemsPopulates = [

                    ]


































        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        // ///////////////////////////////////////////////////////////////////////////////////////////
        // NAV BAR CREATION SECTION ==================================================================
        // ///////////////////////////////////////////////////////////////////////////////////////////
        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


            // BUILD ELEMENTS FOR NAV BAR OPTION ONE ------------------------
            // //////////////////////////////////////////////////////////////

                // GET NAV BAR ITEMS FROM TEXT DOC //////////////////////////
                // //////////////////////////////////////////////////////////

                    function getNavBarItemsFromTextDoc () {

                        // RUN FETCH FROM TEXT DOC --------------------------
                        // //////////////////////////////////////////////////

                            // FETCH DOC AND STORE IN TEMP MEMORY xxxxxxxxxxx
                            // //////////////////////////////////////////////


                                fetch("dox/navBarTexts/navOneTexts/navBarOneItemsText.txt")
                                .then(res => res.text())
                                .then((text) => {


                                    // SET TEXT TO STRING AND MAKE READY FOR SPLITS
                                    // //////////////////////////////////////

                                        navItemsStringCollector = text


                                            // CHECK IF TEXT CAPTURE IS EMPTY
                                            // //////////////////////////////

                                                if ( navItemsStringCollector == "" ) {

                                                    for ( navBarDummyPopulate = 0; navBarDummyPopulate < 5; navBarDummyPopulate++ ) {
            
                                                        storeNavBarItems.push(`item${classNumberMapper[navBarDummyPopulate]}`)
            
                                                    }

                                                }

                                            // AND IF TEXT CAPTURE HAS ITEMS
                                            // //////////////////////////////

                                                else {

                                                    // FIRST EMPTY UP NAV BAR STORAGE ARRAY
                                                    // //////////////////////

                                                        storeNavBarItems = []

                                                    // THEN POPULATE NAV BAR ITEMS ARRAY
                                                    // //////////////////////

                                                        var navBarItemsSplits = navItemsStringCollector.split(",").length
                                                        var navBarItemsSplitsFilter = navItemsStringCollector.split(",")
                
                                                        for ( navBarItemsCounter = 0; navBarItemsCounter < navBarItemsSplits; navBarItemsCounter++ ) {
                
                                                            storeNavBarItems.push(navBarItemsSplitsFilter[navBarItemsCounter])
                
                                                        }

                                                }



                                
                                })









                        // RUN AUTO RUN FUNCTIONS AFTER DELAY ---------------
                        // //////////////////////////////////////////////////

                            setTimeout(() => {


                                // CREATE NAV BAR CUSHION 
                                
                                
                                // RUN SIZE DETECTION -----------------------
                                // //////////////////////////////////////////
                    
                                    detectCurrentWindowSize()
                    
                                // RUN LIVING BAR ---------------------------
                                // //////////////////////////////////////////
                                    
                                    detectLivingBar()
                    
                                // RUN LIVING HEADER SECTION ----------------
                                // //////////////////////////////////////////
                    
                                    detectHeaderSection()


                                
                            }, 200);






                    }




                // GET NAV BAR TITLE FROM TEXT DOC //////////////////////////
                // //////////////////////////////////////////////////////////

                    function getNavBarTitleTextItemFromTextDoc () {

                        // RUN FETCH FROM TEXT DOC --------------------------
                        // //////////////////////////////////////////////////

                            // FETCH DOC AND STORE IN TEMP MEMORY xxxxxxxxxxx
                            // //////////////////////////////////////////////

                                fetch("dox/navBarTexts/navOneTexts/navBarOneTitleText.txt")
                                .then(res => res.text())
                                .then((text) => {


                                    // SET TEXT TO STRING AND MAKE READY FOR SPLITS
                                    // //////////////////////////////////////

                                        navTitleStringCollector = text

                                            // CHECK IF TITLE TEXT CAPTURE IS EMPTY
                                            // //////////////////////////////

                                                if ( navTitleStringCollector == "" ) {

                                                    navTitleStringCollector == "default title"

                                                }

                                            // AND IF TITLE TEXT CAPTURE HAS ITEM
                                            // //////////////////////////////

                                                else {

                                                    navTitleStringCollector = text

                                                }

                                
                                })


                    }



                    

                // GET NAV BAR MENU ITEM LINKS FROM TEXT DOC ////////////////
                // //////////////////////////////////////////////////////////

                    function getNavBarItemLinksFromTextDoc () {

                        // RUN FETCH FROM TEXT DOC --------------------------
                        // //////////////////////////////////////////////////

                            // FETCH DOC AND STORE IN TEMP MEMORY xxxxxxxxxxx
                            // //////////////////////////////////////////////


                                fetch("dox/navBarTexts/navOneTexts/navBarOneItemLinksText.txt")
                                .then(res => res.text())
                                .then((text) => {


                                    // SET TEXT TO STRING AND MAKE READY FOR SPLITS
                                    // //////////////////////////////////////

                                        navItemLinksStringCollector = text


                                            // CHECK IF TEXT CAPTURE IS EMPTY
                                            // //////////////////////////////

                                                if ( navItemLinksStringCollector == "" ) {

                                                    for ( navBarDummyPopulate = 0; navBarDummyPopulate < 5; navBarDummyPopulate++ ) {
            
                                                        storeNavBarItemLinks.push(`item${classNumberMapper[navBarDummyPopulate]}`)
            
                                                    }

                                                }

                                            // AND IF TEXT CAPTURE HAS ITEMS
                                            // //////////////////////////////

                                                else {

                                                    // FIRST EMPTY UP NAV BAR STORAGE ARRAY
                                                    // //////////////////////

                                                        storeNavBarItemLinks = []

                                                    // THEN POPULATE NAV BAR ITEMS ARRAY
                                                    // //////////////////////

                                                        var navBarItemLinksSplits = navItemLinksStringCollector.split(",").length
                                                        var navBarItemLinksSplitsFilter = navItemLinksStringCollector.split(",")
                
                                                        for ( navBarItemLinksCounter = 0; navBarItemLinksCounter < navBarItemLinksSplits; navBarItemLinksCounter++ ) {
                
                                                            storeNavBarItemLinks.push(navBarItemLinksSplitsFilter[navBarItemLinksCounter])
                
                                                        }

                                                }



                                
                                })




                            

                    }





        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        // ///////////////////////////////////////////////////////////////////////////////////////////
        // NAV BAR CREATION SECTION ==================================================================
        // ///////////////////////////////////////////////////////////////////////////////////////////
        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>








































        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        // ///////////////////////////////////////////////////////////////////////////////////////////
        // FUNCTIONS =================================================================================
        // ///////////////////////////////////////////////////////////////////////////////////////////
        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>





            // DETECT LIVING BAR xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            // //////////////////////////////////////////////////////////////

                function detectLivingBar () {

                    var getLivingNavBar = getBody.children[0]

                        // CHECK THAT FIRST CHILD IS NAV BAR ----------------
                        // //////////////////////////////////////////////////

                            if ( getLivingNavBar == null || getLivingNavBar == undefined ) {

                                console.log("NO NAV BAR FOUND HERE...")
                                
                            }

                        // IF ALIVE THEN RUN NAV BAR POPULATE ---------------
                        // //////////////////////////////////////////////////

                            else {

                                console.log("FOUND FIRST ELEMENT...")

                                    // CHECK IF FIRST CHILD CLASSNAME INCLUDES NAV BAR KEY WORDS
                                    // //////////////////////////////////////

                                        if ( getLivingNavBar.className.includes("navBar") ) {


                                            // STORE ACTIVE NAV BAR /////////////////
                                            // //////////////////////////////////////

                                                storeSelectedNavBar.push(getLivingNavBar.className)

                                                    // CHECK WHICH NAV BAR IS ALIVE =
                                                    // //////////////////////////////

                                                        for ( navBarNumberCounter = 0; navBarNumberCounter < sectionLoopCounter; navBarNumberCounter ++ ) {



                                                            if ( 
                                                                
                                                                    storeSelectedNavBar[0] == `navBar${classNumberMapper[navBarNumberCounter]}` || 
                                                                    toString(storeSelectedNavBar[0]).includes(`navBar${classNumberMapper[navBarNumberCounter]}`) 
                                                                )

                                                            {

                                                                // PLACE MAIN NAV BAR PLATE /////////////
                                                                // //////////////////////////////////////

                                                                    storeNavBarMainPlates[navBarNumberCounter](classNumberMapper[navBarNumberCounter])

                                                            }



                                                        }


                                        }

                                        else {

                                            console.log("NAV BAR NOT FOUND")

                                        }

                            }

                }
















                

            // DETECT HEADER SECTION xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            // //////////////////////////////////////////////////////////////

                function detectHeaderSection () {

                    var getHeaderSectionChildrenCount = getBody.children.length

                    var gatherSelectedSectionHeaderName = ""


                        for ( childrenCounter = 0; childrenCounter < getHeaderSectionChildrenCount; childrenCounter ++ ) {

                            var getHeaderSectionClassName = getBody.children[childrenCounter]

                                // CHECK IF CLASS NAME IS HEADER MATCH ------
                                // //////////////////////////////////////////

                                    if ( 
                                        
                                            getHeaderSectionClassName.className.includes("headerSection")
                                        
                                        ) 
                                        
                                    {

                                        console.log("HEADER EXISTS...")

                                        // GET MATCHING HEADER SECTION xxxxxx
                                        // //////////////////////////////////

                                            for ( classMatcherCounter = 0; classMatcherCounter < sectionLoopCounter; classMatcherCounter ++ ) {

                                                // CHECK WHICH HEADER SECTION NUMBER IT IS
                                                // //////////////////////////

                                                    if ( getHeaderSectionClassName.className == `headerSection${classNumberMapper[classMatcherCounter]}` ) {

                                                        console.log("GOT THE HEADER SECTION: " + classNumberMapper[classMatcherCounter])

                                                        gatherSelectedSectionHeaderName = `headerSection${classNumberMapper[classMatcherCounter]}`

                                                    }

                                                // IF NOT MATCHED THEN SKIP
                                                // ////////////////////////

                                                    else {

                                                        console.log("NO DIRECT MATCHES...")

                                                    }

                                            }

                                    }



                                // IF DOESNT MATCH OR EXIST -----------------
                                // //////////////////////////////////////////

                                    else {

                                        console.log("HEADER SECTION DOES NOT EXIST...")

                                    }

                        }

                }







                








                

            // //////////////////////////////////////////////////////////////
            // DETECT CURRENT SIZE xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            // //////////////////////////////////////////////////////////////

                function detectCurrentWindowSize () {

                    // DECLARE PRIMARY VARIABLES ////////////////////////////
                    // //////////////////////////////////////////////////////

                        var windowWidth = window.innerWidth

                        console.log("SIZE NOW: " + windowWidth)
                        

                        // CHECK IF WINDOW IS IN SIZE xxxxxxxxxxxxxxxxxxxxxxx
                        // //////////////////////////////////////////////////

                            // FOR SCREEN SIZE 300 --------------------------
                            // //////////////////////////////////////////////

                                if ( windowWidth > 0 && windowWidth < 301 ) {

                                    console.log("300 LOCKED IN...")

                                        // UPDATE WINDOW SIZE FOR COLLECTOR x
                                        // //////////////////////////////////

                                            screenWidthSelector = "200px"
                                            screenWidthResizerSelector = "176px"


                                        // UPDATE LOGO TITLE AND MENU ITEMS SIZING
                                        // //////////////////////////////////

                                            getNavBarLogoAndTitleSideSizing = "76%"
                                            getNavBarMenuItemsSideSizing = "24%"

                                        // UPDATE MOBILE AND DESKTOP MENU ITEMS DISPLAY SETTINGS
                                        // //////////////////////////////////

                                            getNavBarTitleControl = "none"
                                            getNavBarMobileMenuItemsSetting = "inline-table"
                                            getNavBarDesktopMenuItemsSetting = "none"

                                                    

                                                    

                                }

                            // FOR SCREEN SIZE 500 --------------------------
                            // //////////////////////////////////////////////

                                else if ( windowWidth > 300 && windowWidth < 501 ) {

                                    console.log("300 LOCKED IN...")

                                        // UPDATE WINDOW SIZE FOR COLLECTOR x
                                        // //////////////////////////////////

                                            screenWidthSelector = "250px"
                                            screenWidthResizerSelector = "176px"


                                        // UPDATE LOGO TITLE AND MENU ITEMS SIZING
                                        // //////////////////////////////////

                                            getNavBarLogoAndTitleSideSizing = "76%"
                                            getNavBarMenuItemsSideSizing = "24%"

                                        // UPDATE MOBILE AND DESKTOP MENU ITEMS DISPLAY SETTINGS
                                        // //////////////////////////////////

                                            getNavBarTitleControl = "none"
                                            getNavBarMobileMenuItemsSetting = "inline-table"
                                            getNavBarDesktopMenuItemsSetting = "none"

                                                    

                                }

                            // FOR SCREEN SIZE 800 --------------------------
                            // //////////////////////////////////////////////

                                else if ( windowWidth > 500 && windowWidth < 801 ) {

                                    console.log("500 LOCKED IN...")

                                        // UPDATE WINDOW SIZE FOR COLLECTOR x
                                        // //////////////////////////////////

                                            screenWidthSelector = "300px"
                                            screenWidthResizerSelector = "276px"


                                        // UPDATE LOGO TITLE AND MENU ITEMS SIZING
                                        // //////////////////////////////////

                                            getNavBarLogoAndTitleSideSizing = "80%"
                                            getNavBarMenuItemsSideSizing = "20%"

                                        // UPDATE MOBILE AND DESKTOP MENU ITEMS DISPLAY SETTINGS
                                        // //////////////////////////////////

                                            getNavBarTitleControl = "block"
                                            getNavBarMobileMenuItemsSetting = "inline-table"
                                            getNavBarDesktopMenuItemsSetting = "none"

                                                    

                                }

                            // FOR SCREEN SIZE 1000 -------------------------
                            // //////////////////////////////////////////////

                                else if ( windowWidth > 800 && windowWidth < 1001 ) {

                                    console.log("800 LOCKED IN...")

                                        // UPDATE WINDOW SIZE FOR COLLECTOR x
                                        // //////////////////////////////////

                                            screenWidthSelector = "600px"
                                            screenWidthResizerSelector = "576px"


                                        // UPDATE LOGO TITLE AND MENU ITEMS SIZING
                                        // //////////////////////////////////

                                            getNavBarLogoAndTitleSideSizing = "50%"
                                            getNavBarMenuItemsSideSizing = "50%"

                                        // UPDATE MOBILE AND DESKTOP MENU ITEMS DISPLAY SETTINGS
                                        // //////////////////////////////////

                                            getNavBarTitleControl = "block"
                                            getNavBarMobileMenuItemsSetting = "none"
                                            getNavBarDesktopMenuItemsSetting = "inline-table"

                                                    

                                }

                            // FOR SCREEN SIZE 1200 -------------------------
                            // //////////////////////////////////////////////

                                else if ( windowWidth > 1000 && windowWidth < 1201 ) {

                                    console.log("1000 LOCKED IN...")

                                        // UPDATE WINDOW SIZE FOR COLLECTOR x
                                        // //////////////////////////////////

                                            screenWidthSelector = "800px"
                                            screenWidthResizerSelector = "776px"


                                        // UPDATE LOGO TITLE AND MENU ITEMS SIZING
                                        // //////////////////////////////////

                                            getNavBarLogoAndTitleSideSizing = "50%"
                                            getNavBarMenuItemsSideSizing = "50%"

                                        // UPDATE MOBILE AND DESKTOP MENU ITEMS DISPLAY SETTINGS
                                        // //////////////////////////////////

                                            getNavBarTitleControl = "block"
                                            getNavBarMobileMenuItemsSetting = "none"
                                            getNavBarDesktopMenuItemsSetting = "inline-table"

                                                    

                                }

                            // FOR SCREEN SIZE 1200 + -----------------------
                            // //////////////////////////////////////////////

                                else if ( windowWidth > 1200 ) {

                                    console.log("BEYOND LOCKED IN...")

                                        // UPDATE WINDOW SIZE FOR COLLECTOR x
                                        // //////////////////////////////////

                                            screenWidthSelector = "800px"
                                            screenWidthResizerSelector = "776px"


                                        // UPDATE LOGO TITLE AND MENU ITEMS SIZING
                                        // //////////////////////////////////

                                            getNavBarLogoAndTitleSideSizing = "50%"
                                            getNavBarMenuItemsSideSizing = "50%"

                                        // UPDATE MOBILE AND DESKTOP MENU ITEMS DISPLAY SETTINGS
                                        // //////////////////////////////////

                                            getNavBarTitleControl = "block"
                                            getNavBarMobileMenuItemsSetting = "none"
                                            getNavBarDesktopMenuItemsSetting = "inline-table"

                                                    

                                }

                }







                








                

            // //////////////////////////////////////////////////////////////
            // CREATE NAV BARS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            // //////////////////////////////////////////////////////////////

                // CREATE NAV BAR ONE ACTUAL --------------------------------
                // //////////////////////////////////////////////////////////

                    function createNavBarOneMainPlate (cushionNumber) {

                        // GET NAV BAR CUSHION xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        // //////////////////////////////////////////////////

                            var createNavBarCushion = document.querySelector(`.navBar${cushionNumber}`)

                        // CREATE NAV BAR ONE ELEMENTS xxxxxxxxxxxxxxxxxxxxxx
                        // //////////////////////////////////////////////////

                            // CREATE MAIN NAV BAR PLATE AND ELEMENTS =======
                            // //////////////////////////////////////////////

                                var navBarPlateOneMainContainer = document.createElement("div")
                                navBarPlateOneMainContainer.className = `navBarOneMainContainer`

                                    var navBarPlateOneMainBlocker = document.createElement("div")
                                    navBarPlateOneMainBlocker.className = `navBarOneMainBackgroundBlocker`





                            // CREATE MAIN NAV BAR PLATE ELEMENT AND RESIZER 
                            // //////////////////////////////////////////////

                                var navBarPlateOneMainElement = document.createElement("div")
                                navBarPlateOneMainElement.className = `navBarOnePlateElementContainer`

                                    var navBarPlateOneElementResizer = document.createElement("div")
                                    navBarPlateOneElementResizer.className = `navBarOnePlateElementResizer`





                            // CREATE MAIN NAV BAR LOGO AND MENU ITEMS SIDES
                            // //////////////////////////////////////////////

                                var navBarPlateOneLogoTitleSide = document.createElement("div")
                                navBarPlateOneLogoTitleSide.className = `navBarOnePlateElementLogoTitleSideContainer`

                                var navBarPlateOneDesktopMenuItemsSide = document.createElement("div")
                                navBarPlateOneDesktopMenuItemsSide.className = `navBarOnePlateElementDesktopMenuItemsSideContainer`

                                var navBarPlateOneMobileMenuItemsSide = document.createElement("div")
                                navBarPlateOneMobileMenuItemsSide.className = `navBarOnePlateElementMobileMenuItemsSideContainer`





                            // CREATE NAV BAR LOGO AND TITLE ITEMS xxxxxx
                            // //////////////////////////////////////////

                                var createNavBarLogoContainer = document.createElement("div")
                                createNavBarLogoContainer.className = `navBarOneLogoContainer`

                                    var createNavBarLogoActual = document.createElement("div")
                                    createNavBarLogoActual.className = `navBarOneLogoActual`


                                
                                var createNavBarTitleContainer = document.createElement("div")
                                createNavBarTitleContainer.className = `navBarOneTitleContainer`

                                    var createNavBarTitleActual = document.createElement("div")
                                    createNavBarTitleActual.className = `navBarOneTitleActual`






                            // CREATE NAV BAR MENU ITEMS MOBILE xxxxxxxxx
                            // //////////////////////////////////////////

                                var createNavBarMenuItemsMobileButtonContainer = document.createElement("div")
                                createNavBarMenuItemsMobileButtonContainer.className = `navBarOneMenuItemsButtonContainer`

                                    var createNavBarMenuItemsMobileButtonIconMover = document.createElement("div")
                                    createNavBarMenuItemsMobileButtonIconMover.className = `navBarOneMenuItemsButtonIconMover`



                                        var createNavBarMenuItemsmobileButtonIconLineOne = document.createElement("div")
                                        createNavBarMenuItemsmobileButtonIconLineOne.className = `navBarOneMenuItemsButtonIconLineOne`

                                        var createNavBarMenuItemsmobileButtonIconLineTwo = document.createElement("div")
                                        createNavBarMenuItemsmobileButtonIconLineTwo.className = `navBarOneMenuItemsButtonIconLineTwo`

                                        var createNavBarMenuItemsmobileButtonIconLineThree = document.createElement("div")
                                        createNavBarMenuItemsmobileButtonIconLineThree.className = `navBarOneMenuItemsButtonIconLineThree`


                                            // CREATE MOBILE SIDE MENU AND ITEMS
                                            // //////////////////////////

                                                var createNavBarMenuMobileSideMenuContainer = document.createElement("div")
                                                createNavBarMenuMobileSideMenuContainer.className = `navBarOneMobileSideMenuContainer`

                                                    var createNavBarMenuMobileSideMenuResizer = document.createElement("div")
                                                    createNavBarMenuMobileSideMenuResizer.className = `navBarOneMobileSideMenuContentResizer`

                                                        var createNavBarMenuMobileSideMenuHeaderContainer = document.createElement("div")
                                                        createNavBarMenuMobileSideMenuHeaderContainer.className = `navBarOneMobileSideMenuHeaderContainer`





                                                            // CREATE MOBILE SIDE MENU HEADLINE
                                                            // //////////

                                                                var createNavBarMenuMobileSideMenuHeadlineContainer = document.createElement("div")
                                                                createNavBarMenuMobileSideMenuHeadlineContainer.className = `navBarOneMobileSideMenuHeadlineContainer`

                                                                    var createNavBarMenuMobileSideMenuHeadlineTextActual = document.createElement("div")
                                                                    createNavBarMenuMobileSideMenuHeadlineTextActual.className = `navBarOneMobileSideMenuHeadlineText`





                                                            // CREATE MOBILE SIDE MENU CLOSE BUTTON
                                                            // //////////


                                                                var createNavBarMenuMobileSideMenuCloseButtonContainer = document.createElement("div")
                                                                createNavBarMenuMobileSideMenuCloseButtonContainer.className = `navBarOneMobileSideMenuButtonContainer`

                                                                    var createNavBarMenuMobileSideMenuCloseButtonItem = document.createElement("div")
                                                                    createNavBarMenuMobileSideMenuCloseButtonItem.className = `navBarOneMobileSideMenuButtonItem`

                                                                        var createNavBarMenuMobileSideMenuCloseButtonIconMover = document.createElement("div")
                                                                        createNavBarMenuMobileSideMenuCloseButtonIconMover.className = `navBarOneMobileSideMenuButtonIconMover`


                                                                            var createNavBarMenuMobileSideMenuCloseButtonIconLineOne = document.createElement("div")
                                                                            createNavBarMenuMobileSideMenuCloseButtonIconLineOne.className = `navBarOneMobileSideMenuButtonIconLineOne`

                                                                            var createNavBarMenuMobileSideMenuCloseButtonIconLineTwo = document.createElement("div")
                                                                            createNavBarMenuMobileSideMenuCloseButtonIconLineTwo.className = `navBarOneMobileSideMenuButtonIconLineTwo`

                                                                            var createNavBarMenuMobileSideMenuCloseButtonIconLineThree = document.createElement("div")
                                                                            createNavBarMenuMobileSideMenuCloseButtonIconLineThree.className = `navBarOneMobileSideMenuButtonIconLineThree`





                                                            // CREATE MOBILE SIDE MENU ITEMS
                                                            // //////////

                                                                var createNavBarMenuMobileSideMenuItemsContainer = document.createElement("div")
                                                                createNavBarMenuMobileSideMenuItemsContainer.className = `navBarOneMobileSideMenuItemsContainer`

                                                                    var createNavBarMenuMobileSideMenuItemsScrollControl = document.createElement("div")
                                                                    createNavBarMenuMobileSideMenuItemsScrollControl.className = `navBarOneMobileSideMenuItemsScrollContainer`

























                        

                            // STYLE MAIN NAV BAR PLATE AND ELEMENTS ========
                            // //////////////////////////////////////////////

                                // STYLE MAIN NAV BAR ELEMENTS xxxxxxxxxxxxxx
                                // //////////////////////////////////////////

                                    navBarPlateOneMainContainer.style = `
                                    
                                        width:100%;
                                        top:0;
                                        left:0;
                                        right:0;
                                        margin:0px auto;
                                        z-index:2;
                                        position:fixed;
                                        transition:all 600ms ease;
                                        -webkit-transition:all 600ms ease;
                                        -moz-transition:all 600ms ease;
                                        -o-transition:all 600ms ease;
                                        -ms-transition:all 600ms ease;

                                    `

                                        navBarPlateOneMainBlocker.style = `
                                        
                                            width:100%;
                                            height:50px;
                                            top:0;
                                            left:0;
                                            right:0;
                                            margin:0px auto;
                                            position:fixed;
                                            background:${storeNavBarThemeBackground[0]};
                                            transition:all 600ms ease;
                                            -webkit-transition:all 600ms ease;
                                            -moz-transition:all 600ms ease;
                                            -o-transition:all 600ms ease;
                                            -ms-transition:all 600ms ease;

                                        `



                                // STYLE MAIN NAV BAR PLATE ELEMENT AND RESIZER
                                // //////////////////////////////////////////


                                    navBarPlateOneMainElement.style = `
                                    
                                        width:${screenWidthSelector};
                                        top:20px;
                                        left:0;
                                        right:0;
                                        margin:0px auto;
                                        padding:10px 0px;
                                        position:absolute;
                                        background:#FFFFFF;
                                        border-radius:1000px;
                                        box-shadow:0px 30px 30px -10px rgba(0,0,0,0.2);
                                        transition:all 600ms ease;
                                        -webkit-transition:all 600ms ease;
                                        -moz-transition:all 600ms ease;
                                        -o-transition:all 600ms ease;
                                        -ms-transition:all 600ms ease;

                                    `

                                        navBarPlateOneElementResizer.style = `
                                        
                                            width:92%;
                                            height:50px;
                                            top:0;
                                            left:0;
                                            right:0;
                                            bottom:0;
                                            margin:auto;
                                            position:relative;
                                            /*background:#2C2C2C;*/
                                            border-radius:1000px;
                                            transition:all 600ms ease;
                                            -webkit-transition:all 600ms ease;
                                            -moz-transition:all 600ms ease;
                                            -o-transition:all 600ms ease;
                                            -ms-transition:all 600ms ease;

                                        `



                                // STYLE MAIN NAV BAR LOGO AND MENU ITEMS SIDES
                                // //////////////////////////////////////////

                                    navBarPlateOneLogoTitleSide.style = `
                                    
                                        width:${getNavBarLogoAndTitleSideSizing};
                                        height:50px;
                                        float:left;
                                        position:relative;
                                        transition:all 600ms ease;
                                        -webkit-transition:all 600ms ease;
                                        -moz-transition:all 600ms ease;
                                        -o-transition:all 600ms ease;
                                        -ms-transition:all 600ms ease;

                                    `

                                        // STYLE MAIN NAV BAR LOGO AND TITLE ITEMS
                                        // //////////////////////////////////

                                            createNavBarLogoContainer.style = `
                                            
                                                width:45%;
                                                height:50px;
                                                float:left;
                                                position:relative;
                                                background:#3a885a;
                                                transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;

                                            `

                                                createNavBarLogoActual.style = `
                                                
                                                    width:100%;
                                                    height:50px;
                                                    top:0;
                                                    left:0;
                                                    right:0;
                                                    bottom:0;
                                                    margin:auto;
                                                    position:absolute;
                                                    background:#df7cdf;
                                                    transition:all 600ms ease;
                                                    -webkit-transition:all 600ms ease;
                                                    -moz-transition:all 600ms ease;
                                                    -o-transition:all 600ms ease;
                                                    -ms-transition:all 600ms ease;

                                                `


                                            createNavBarTitleContainer.style = `
                                            
                                                width:55%;
                                                height:50px;
                                                float:left;
                                                display:${getNavBarTitleControl};
                                                position:relative;
                                                transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;

                                            `

                                                createNavBarTitleActual.style = `
                                                
                                                    width:100%;
                                                    height:50px;
                                                    coolor:#2C2C2C;
                                                    position:relative;
                                                    font-size:15px;
                                                    text-align:center;
                                                    font-weight:700;
                                                    font-family:arial, sans-serif;
                                                    line-height:50px;
                                                    letter-spacing:1px;
                                                    text-transform:lowercase;
                                                    transition:all 600ms ease;
                                                    -webkit-transition:all 600ms ease;
                                                    -moz-transition:all 600ms ease;
                                                    -o-transition:all 600ms ease;
                                                    -ms-transition:all 600ms ease;

                                                `













                                // STYLE MAIN NAV BAR MENU ITEMS SIDES xxxxxx
                                // //////////////////////////////////////////


                                    // STYLE NAV BAR DESKTOP MENU ITEMS SIDE 
                                    // //////////////////////////////////////

                                        navBarPlateOneDesktopMenuItemsSide.style = `
                                        
                                            width:${getNavBarMenuItemsSideSizing};
                                            height:50px;
                                            float:right;
                                            display:${getNavBarDesktopMenuItemsSetting};
                                            /*background:#3C5472;*/
                                            text-align:right;
                                            position:relative;
                                            transition:all 600ms ease;
                                            -webkit-transition:all 600ms ease;
                                            -moz-transition:all 600ms ease;
                                            -o-transition:all 600ms ease;
                                            -ms-transition:all 600ms ease;

                                        `




                                    // STYLE NAV BAR MOBILE MENU ITEMS SIDE -
                                    // //////////////////////////////////////

                                        navBarPlateOneMobileMenuItemsSide.style = `
                                        
                                            width:${getNavBarMenuItemsSideSizing};
                                            height:50px;
                                            float:right;
                                            display:${getNavBarMobileMenuItemsSetting};
                                            position:relative;
                                            transition:all 600ms ease;
                                            -webkit-transition:all 600ms ease;
                                            -moz-transition:all 600ms ease;
                                            -o-transition:all 600ms ease;
                                            -ms-transition:all 600ms ease;

                                        `






                                            // STYLE MOBILE SIDE MENU -------
                                            // //////////////////////////////

                                                createNavBarMenuMobileSideMenuContainer.style = `
                                                
                                                    width:100%;
                                                    height:100%;
                                                    top:0;
                                                    left:-300%;
                                                    right:0;
                                                    bottom:0;
                                                    opacity:1;
                                                    z-index:2;
                                                    margin:auto;
                                                    display:block;
                                                    position:fixed;
                                                    background:#FFFFFF;
                                                    transition:all 600ms ease;
                                                    -webkit-transition:all 600ms ease;
                                                    -moz-transition:all 600ms ease;
                                                    -o-transition:all 600ms ease;
                                                    -ms-transition:all 600ms ease;

                                                `

                                                    createNavBarMenuMobileSideMenuResizer.style = `
                                                    
                                                        width:80%;
                                                        height:80%;
                                                        top:0;
                                                        left:0;
                                                        right:0;
                                                        bottom:0;
                                                        margin:auto;
                                                        position:absolute;
                                                        transition:all 600ms ease;
                                                        -webkit-transition:all 600ms ease;
                                                        -moz-transition:all 600ms ease;
                                                        -o-transition:all 600ms ease;
                                                        -ms-transition:all 600ms ease;

                                                    `

                                                        createNavBarMenuMobileSideMenuHeaderContainer.style = `
                                                        
                                                            width:100%;
                                                            position:relative;
                                                            transition:all 600ms ease;
                                                            -webkit-transition:all 600ms ease;
                                                            -moz-transition:all 600ms ease;
                                                            -o-transition:all 600ms ease;
                                                            -ms-transition:all 600ms ease;

                                                        `





                                                                // SIDE MENU HEADLINE CONTAINER
                                                                // //////////

                                                                    createNavBarMenuMobileSideMenuHeadlineContainer.style = `
                                                                    
                                                                        width:90%;
                                                                        height:50px;
                                                                        top:0;
                                                                        left:0;
                                                                        display:inline-block;
                                                                        position:absolute;
                                                                        transition:all 600ms ease;
                                                                        -webkit-transition:all 600ms ease;
                                                                        -moz-transition:all 600ms ease;
                                                                        -o-transition:all 600ms ease;
                                                                        -ms-transition:all 600ms ease;

                                                                    `

                                                                        createNavBarMenuMobileSideMenuHeadlineTextActual.style = `
                                                                        
                                                                            font-size:30px;
                                                                            color:#2C2C2C;
                                                                            text-align:left;
                                                                            font-weight:700;
                                                                            font-family:arial, sans-serif;
                                                                            line-height:70px;
                                                                            letter-spacing:5px;
                                                                            transition:all 600ms ease;
                                                                            -webkit-transition:all 600ms ease;
                                                                            -moz-transition:all 600ms ease;
                                                                            -o-transition:all 600ms ease;
                                                                            -ms-transition:all 600ms ease;

                                                                        `





                                                                // CLOSE SIDE MENU BUTTON
                                                                // //////////
                                                                
                                                                    createNavBarMenuMobileSideMenuCloseButtonContainer.style = `
                                                                    
                                                                        width:10%;
                                                                        height:50px;
                                                                        top:0;
                                                                        right:0;
                                                                        display:inline-block;
                                                                        position:absolute;
                                                                        transition:all 600ms ease;
                                                                        -webkit-transition:all 600ms ease;
                                                                        -moz-transition:all 600ms ease;
                                                                        -o-transition:all 600ms ease;
                                                                        -ms-transition:all 600ms ease;

                                                                    `

                                                                        createNavBarMenuMobileSideMenuCloseButtonItem.style = `
                                                                        
                                                                            width:50px;
                                                                            height:50px;
                                                                            cursor:pointer;
                                                                            position:relative;
                                                                            background:#FFFFFF;
                                                                            border-radius:1000px;
                                                                            box-shadow:0px 20px 30px -10px rgba(0, 0, 0, 0.5);
                                                                            transition:all 600ms ease;
                                                                            -webkit-transition:all 600ms ease;
                                                                            -moz-transition:all 600ms ease;
                                                                            -o-transition:all 600ms ease;
                                                                            -ms-transition:all 600ms ease;

                                                                        `

                                                                            createNavBarMenuMobileSideMenuCloseButtonIconMover.style = `
                                                                            
                                                                                width:20px;
                                                                                height:25px;
                                                                                top:0;
                                                                                left:0;
                                                                                right:0;
                                                                                bottom:0;
                                                                                margin:auto;
                                                                                position:absolute;
                                                                                transition:all 600ms ease;
                                                                                -webkit-transition:all 600ms ease;
                                                                                -moz-transition:all 600ms ease;
                                                                                -o-transition:all 600ms ease;
                                                                                -ms-transition:all 600ms ease;

                                                                            `


                                                                                createNavBarMenuMobileSideMenuCloseButtonIconLineOne.style = `
                                                                                
                                                                                    width:100%;
                                                                                    height:3px;
                                                                                    inset:1px 0px 0px 0px;
                                                                                    margin:auto;
                                                                                    opacity:1;
                                                                                    position:absolute;
                                                                                    transform:rotateZ(45deg);
                                                                                    background:rgb(44, 44, 44);
                                                                                    border-radius:1000px;
                                                                                    transition:all 600ms ease;
                                                                                    -webkit-transition:all 600ms ease;
                                                                                    -moz-transition:all 600ms ease;
                                                                                    -o-transition:all 600ms ease;
                                                                                    -ms-transition:all 600ms ease;

                                                                                `


                                                                                createNavBarMenuMobileSideMenuCloseButtonIconLineTwo.style = `
                                                                                
                                                                                    width:100%;
                                                                                    height:3px;
                                                                                    inset:1px 0px 0px 0px;
                                                                                    margin:auto;
                                                                                    opacity:0;
                                                                                    position:absolute;
                                                                                    transform:rotateZ(0deg);
                                                                                    background:rgb(44, 44, 44);
                                                                                    border-radius:1000px;
                                                                                    transition:all 600ms ease;
                                                                                    -webkit-transition:all 600ms ease;
                                                                                    -moz-transition:all 600ms ease;
                                                                                    -o-transition:all 600ms ease;
                                                                                    -ms-transition:all 600ms ease;

                                                                                `


                                                                                createNavBarMenuMobileSideMenuCloseButtonIconLineThree.style = `
                                                                                
                                                                                    width:100%;
                                                                                    height:3px;
                                                                                    inset:1px 0px 0px 0px;
                                                                                    margin:auto;
                                                                                    opacity:1;
                                                                                    position:absolute;
                                                                                    transform:rotateZ(-45deg);
                                                                                    background:rgb(44, 44, 44);
                                                                                    border-radius:1000px;
                                                                                    transition:all 600ms ease;
                                                                                    -webkit-transition:all 600ms ease;
                                                                                    -moz-transition:all 600ms ease;
                                                                                    -o-transition:all 600ms ease;
                                                                                    -ms-transition:all 600ms ease;

                                                                                `






                                                                // SIDE MENU MENU ITEM CONTENT CONTAINER
                                                                // ///////////

                                                                    createNavBarMenuMobileSideMenuItemsContainer.style = `
                                                                    
                                                                        width:100%;
                                                                        top:100px;
                                                                        position:relative;
                                                                        transition:all 600ms ease;
                                                                        -webkit-transition:all 600ms ease;
                                                                        -moz-transition:all 600ms ease;
                                                                        -o-transition:all 600ms ease;
                                                                        -ms-transition:all 600ms ease;

                                                                    `

                                                                        createNavBarMenuMobileSideMenuItemsScrollControl.style = `
                                                                        
                                                                            width:100%;
                                                                            overflow:hidden;
                                                                            position:relative;
                                                                            transition:all 600ms ease;
                                                                            -webkit-transition:all 600ms ease;
                                                                            -moz-transition:all 600ms ease;
                                                                            -o-transition:all 600ms ease;
                                                                            -ms-transition:all 600ms ease;

                                                                        `

                                                                    





                                            // STYLE MOBILE ITEMS MENU ICON ELEMENTS
                                            // //////////////////////////////


                                                createNavBarMenuItemsMobileButtonContainer.style = `
                                                
                                                    width:50px;
                                                    height:50px;
                                                    cursor:pointer;
                                                    margin:auto;
                                                    position:relative;
                                                    background:#FFFFFF;
                                                    border-radius:1000px;
                                                    box-shadow:0px 20px 30px -10px rgba(0,0,0,0.5);
                                                    transition:all 600ms ease;
                                                    -webkit-transition:all 600ms ease;
                                                    -moz-transition:all 600ms ease;
                                                    -o-transition:all 600ms ease;
                                                    -ms-transition:all 600ms ease;

                                                `

                                                    createNavBarMenuItemsMobileButtonIconMover.style = `
                                                    
                                                        width:20px;
                                                        height:25px;
                                                        top:0;
                                                        left:0;
                                                        right:0;
                                                        bottom:0;
                                                        margin:auto;
                                                        position:absolute;
                                                        transition:all 600ms ease;
                                                        -webkit-transition:all 600ms ease;
                                                        -moz-transition:all 600ms ease;
                                                        -o-transition:all 600ms ease;
                                                        -ms-transition:all 600ms ease;

                                                    `

                                                        createNavBarMenuItemsmobileButtonIconLineOne.style = `
                                                        
                                                            width:100%;
                                                            height:3px;
                                                            top:-14px;
                                                            left:0;
                                                            right:0;
                                                            bottom:0;
                                                            margin:auto;
                                                            position:absolute;
                                                            background:#2C2C2C;
                                                            border-radius:1000px;
                                                            transition:all 600ms ease;
                                                            -webkit-transition:all 600ms ease;
                                                            -moz-transition:all 600ms ease;
                                                            -o-transition:all 600ms ease;
                                                            -ms-transition:all 600ms ease;

                                                        `

                                                        createNavBarMenuItemsmobileButtonIconLineTwo.style = `
                                                        
                                                            width:100%;
                                                            height:3px;
                                                            top:0;
                                                            left:0;
                                                            right:0;
                                                            bottom:0;
                                                            margin:auto;
                                                            position:absolute;
                                                            background:#2C2C2C;
                                                            border-radius:1000px;
                                                            transition:all 600ms ease;
                                                            -webkit-transition:all 600ms ease;
                                                            -moz-transition:all 600ms ease;
                                                            -o-transition:all 600ms ease;
                                                            -ms-transition:all 600ms ease;

                                                        `

                                                        createNavBarMenuItemsmobileButtonIconLineThree.style = `
                                                        
                                                            width:100%;
                                                            height:3px;
                                                            top:15px;
                                                            left:0;
                                                            right:0;
                                                            bottom:0;
                                                            margin:auto;
                                                            position:absolute;
                                                            background:#2C2C2C;
                                                            border-radius:1000px;
                                                            transition:all 600ms ease;
                                                            -webkit-transition:all 600ms ease;
                                                            -moz-transition:all 600ms ease;
                                                            -o-transition:all 600ms ease;
                                                            -ms-transition:all 600ms ease;

                                                        `

                                            




















                        

                            // ADD TEXT TO ITEMS ============================
                            // //////////////////////////////////////////////

                                createNavBarTitleActual.textContent = `${navTitleStringCollector}`

                                createNavBarMenuMobileSideMenuHeadlineTextActual.textContent = `MENU`

                                            




















                        

                            // APPEND MAIN NAV BAR PLATE AND ELEMENTS =======
                            // //////////////////////////////////////////////

                                createNavBarCushion.appendChild(navBarPlateOneMainContainer)

                                    navBarPlateOneMainContainer.appendChild(navBarPlateOneMainBlocker)



                            // APPEND MAIN NAV BAR PLATE ELEMENT AND RESIZER
                            // //////////////////////////////////////////

                                navBarPlateOneMainBlocker.appendChild(navBarPlateOneMainElement)

                                    navBarPlateOneMainElement.appendChild(navBarPlateOneElementResizer)



                            // APPEND MAIN NAV BAR LOGO AND MENU ITEMS SIDES
                            // //////////////////////////////////////////

                                navBarPlateOneElementResizer.appendChild(navBarPlateOneLogoTitleSide)


                                    // APPEND MAIN NAV BAR LOGO AND TITLE ITEMS
                                    // //////////////////////////////////

                                        navBarPlateOneLogoTitleSide.appendChild(createNavBarLogoContainer)

                                            createNavBarLogoContainer.appendChild(createNavBarLogoActual)
                                        

                                        navBarPlateOneLogoTitleSide.appendChild(createNavBarTitleContainer)

                                            createNavBarTitleContainer.appendChild(createNavBarTitleActual)


















                                    // //////////////////////////////////
                                    // MENU ITEMS ASSIGNS FOR DESKTOP ===
                                    // //////////////////////////////////


                                    
                                    // APPEND MAIN NAV BAR MENU ITEMS CONTAINERS
                                    // //////////////////////////////////

                                        navBarPlateOneElementResizer.appendChild(navBarPlateOneDesktopMenuItemsSide)

                                            // RUN LOOP TO APPEND MENU ITEMS
                                            // //////////////////////////

                                                for ( itemsGenerateCounter = 0; itemsGenerateCounter < 5; itemsGenerateCounter ++ ) {


                                                    // CHECK IF NAV MENU ITEMS ARE INVALID OR DON'T EXIST
                                                    // /////////////////////////////////

                                                        if ( 
                                                            
                                                                storeNavBarItems[itemsGenerateCounter] == null || 
                                                                storeNavBarItems[itemsGenerateCounter] == undefined
                                                            
                                                            ) 
                                                            
                                                        {
                                                            
                                                        }


                                                    // CHECK IF NAV MENU ITEMS ARE VALID OR EXISTS
                                                    // /////////////////////////////////

                                                        else {

                                                            // CREATE NEW ITEMS FOR DESKTOP MENU
                                                            // //////////////////////

                                                                var createNavBarOneMenuItem = document.createElement("div")
                                                                createNavBarOneMenuItem.className = `navBarOneMenuItem${classNumberMapper[itemsGenerateCounter]}Container`

                                                                    var createNavBarOneMenuItemResizer = document.createElement("div")
                                                                    createNavBarOneMenuItemResizer.className = `navBarOneMenuItem${classNumberMapper[itemsGenerateCounter]}Resizer`



                                                            // STYLE NEW ITEMS FOR DESKTOP MENU
                                                            // /////////////////////////////////

                                                                createNavBarOneMenuItem.style = `
                                                                
                                                                    width:20%;
                                                                    height:50px;
                                                                    cursor:pointer;
                                                                    display:inline-block;
                                                                    position:relative;
                                                                    /*background:${storeNavBarThemeBackground[itemsGenerateCounter]};*/
                                                                    transition:all 600ms ease;
                                                                    -webkit-transition:all 600ms ease;
                                                                    -moz-transition:all 600ms ease;
                                                                    -o-transition:all 600ms ease;
                                                                    -ms-transition:all 600ms ease;

                                                                `

                                                                    createNavBarOneMenuItemResizer.style = `
                                                                    
                                                                        width:80%;
                                                                        height:50px;
                                                                        left:0px;
                                                                        right:0px;
                                                                        color:rgba(44, 44, 44, 0.2);
                                                                        margin:0px auto;
                                                                        position:relative;
                                                                        font-size:15px;
                                                                        font-weight:700;
                                                                        font-family:arial, sans-serif;
                                                                        line-height:50px;
                                                                        text-align:center;
                                                                        letter-spacing:2px;
                                                                        transition:all 600ms ease;
                                                                        -webkit-transition:all 600ms ease;
                                                                        -moz-transition:all 600ms ease;
                                                                        -o-transition:all 600ms ease;
                                                                        -ms-transition:all 600ms ease;

                                                                    `



                                                            // ADD TEXT TO MENU ITEM BLOCK =====
                                                            // /////////////////////////////////

                                                                createNavBarOneMenuItemResizer.textContent = `${storeNavBarItems[itemsGenerateCounter]}`



                                                            // STORE MENU ITEM CLASSNAME IN ARRAY
                                                            // /////////////////////////////////


                                                                storeNavBarItemsClassNames.push(`navBarOneMenuItem${classNumberMapper[itemsGenerateCounter]}Container`)



                                                            // APPEND MENU ITEM BLOCKS TO DESKTOP SIDE CONTAINER
                                                            // /////////////////////////////////

                                                                navBarPlateOneDesktopMenuItemsSide.appendChild(createNavBarOneMenuItem)

                                                                    createNavBarOneMenuItem.appendChild(createNavBarOneMenuItemResizer)



                                                        }


                                                }



















                                



                                    // ASSIGN EVENT LISTENERS TO NEWLY CREATED MENU ELEMENTS
                                    // //////////////////////////////////

                                        // FOR DESKTOP NAV BAR ITEMS ----
                                        // //////////////////////////////




                                            storeNavBarItemsClassNames.forEach((navItem) => {

                                                var getCurrentMenuItem = document.querySelector(`.${navItem}`)
                                                var getItemChild = getCurrentMenuItem.children[0]

                                                // HOVER EFFECTS ========
                                                // //////////////////////

                                                    getCurrentMenuItem.addEventListener("mouseover", function () {

                                                        getItemChild.style = `
                                                        
                                                            width:80%;
                                                            height:50px;
                                                            left:0px;
                                                            right:0px;
                                                            color:rgba(44, 44, 44, 1.0);
                                                            margin:0px auto;
                                                            position:relative;
                                                            font-size:15px;
                                                            font-weight:700;
                                                            font-family:arial, sans-serif;
                                                            line-height:50px;
                                                            text-align:center;
                                                            letter-spacing:2px;
                                                            transition:all 600ms ease;
                                                            -webkit-transition:all 600ms ease;
                                                            -moz-transition:all 600ms ease;
                                                            -o-transition:all 600ms ease;
                                                            -ms-transition:all 600ms ease;

                                                        `

                                                    })

                                                    getCurrentMenuItem.addEventListener("mouseout", function () {

                                                        getItemChild.style = `
                                                        
                                                            width:80%;
                                                            height:50px;
                                                            left:0px;
                                                            right:0px;
                                                            color:rgba(44, 44, 44, 0.2);
                                                            margin:0px auto;
                                                            position:relative;
                                                            font-size:15px;
                                                            font-weight:700;
                                                            font-family:arial, sans-serif;
                                                            line-height:50px;
                                                            text-align:center;
                                                            letter-spacing:2px;
                                                            transition:all 600ms ease;
                                                            -webkit-transition:all 600ms ease;
                                                            -moz-transition:all 600ms ease;
                                                            -o-transition:all 600ms ease;
                                                            -ms-transition:all 600ms ease;

                                                        `

                                                    })



                                                // CLICKS ===============
                                                // //////////////////////

                                                    getCurrentMenuItem.addEventListener("click", function () {

                                                        window.open(`${storeNavBarItemLinks[storeNavBarItemsClassNames.indexOf(navItem)]}`, `_blank`)

                                                    })

                                            })

                                            

                                            













                                        


                                



                                    // APPEND MAIN NAV BAR MOBILE SIDE MENU
                                    // //////////////////////////////////

                                        getBody.appendChild(createNavBarMenuMobileSideMenuContainer)

                                            createNavBarMenuMobileSideMenuContainer.appendChild(createNavBarMenuMobileSideMenuResizer)

                                                createNavBarMenuMobileSideMenuResizer.appendChild(createNavBarMenuMobileSideMenuHeaderContainer)



                                                    createNavBarMenuMobileSideMenuHeaderContainer.appendChild(createNavBarMenuMobileSideMenuHeadlineContainer)

                                                        createNavBarMenuMobileSideMenuHeadlineContainer.appendChild(createNavBarMenuMobileSideMenuHeadlineTextActual)

                                                    
                                                    createNavBarMenuMobileSideMenuHeaderContainer.appendChild(createNavBarMenuMobileSideMenuCloseButtonContainer)

                                                        createNavBarMenuMobileSideMenuCloseButtonContainer.appendChild(createNavBarMenuMobileSideMenuCloseButtonItem)

                                                            createNavBarMenuMobileSideMenuCloseButtonItem.appendChild(createNavBarMenuMobileSideMenuCloseButtonIconMover)


                                                                createNavBarMenuMobileSideMenuCloseButtonIconMover.appendChild(createNavBarMenuMobileSideMenuCloseButtonIconLineOne)

                                                                createNavBarMenuMobileSideMenuCloseButtonIconMover.appendChild(createNavBarMenuMobileSideMenuCloseButtonIconLineTwo)

                                                                createNavBarMenuMobileSideMenuCloseButtonIconMover.appendChild(createNavBarMenuMobileSideMenuCloseButtonIconLineThree)

                                        


                                



                                    // APPEND MAIN NAV BAR MOBILE MENU ITEMS CONTAINERS
                                    // //////////////////////////////////

                                        navBarPlateOneElementResizer.appendChild(navBarPlateOneMobileMenuItemsSide)

                                        navBarPlateOneMobileMenuItemsSide.appendChild(createNavBarMenuItemsMobileButtonContainer)

                                            createNavBarMenuItemsMobileButtonContainer.appendChild(createNavBarMenuItemsMobileButtonIconMover)

                                                createNavBarMenuItemsMobileButtonIconMover.appendChild(createNavBarMenuItemsmobileButtonIconLineOne)

                                                createNavBarMenuItemsMobileButtonIconMover.appendChild(createNavBarMenuItemsmobileButtonIconLineTwo)

                                                createNavBarMenuItemsMobileButtonIconMover.appendChild(createNavBarMenuItemsmobileButtonIconLineThree)

                                        


                                























                                    // //////////////////////////////////
                                    // MENU ITEMS ASSIGNS FOR MOBILE ====
                                    // //////////////////////////////////


                                    
                                    // APPEND MOBILE SIDE MENU ITEMS CONTAINERS
                                    // //////////////////////////////////

                                        createNavBarMenuMobileSideMenuResizer.appendChild(createNavBarMenuMobileSideMenuItemsContainer)

                                            createNavBarMenuMobileSideMenuItemsContainer.appendChild(createNavBarMenuMobileSideMenuItemsScrollControl)


                                    // //////////////////////////////////
                                    // MENU ITEMS ASSIGNS FOR MOBILE ====
                                    // //////////////////////////////////

                                        for ( menuItemsPopulateCounter = 0; menuItemsPopulateCounter < storeNavBarItems.length; menuItemsPopulateCounter++ ) {

                                            // CREATE NAV LIST ITEM
                                            // //////////////////////////

                                                var createNavBarMenuMobileSideMenuItemBlockContainer = document.createElement("div")
                                                createNavBarMenuMobileSideMenuItemBlockContainer.className = `navBarOneMobileSideMenuItem${classNumberMapper[menuItemsPopulateCounter]}BlockContainer`






                                                    var createNavBarMenuMobileSideMenuItemBlockTextSide = document.createElement("div")
                                                    createNavBarMenuMobileSideMenuItemBlockTextSide.className = `navBarOneMobileSideMenuItem${classNumberMapper[menuItemsPopulateCounter]}BlockTextSideContainer`

                                                        var createNavBarMenuMobileSideMenuItemBlockTextActual = document.createElement("div")
                                                        createNavBarMenuMobileSideMenuItemBlockTextActual.className = `navBarOneMobileSideMenuItem${classNumberMapper[menuItemsPopulateCounter]}BlockTextActual`



                                                            var createNavBarMenuMobileSideMenuItemBlockTextUnderlinerContainer = document.createElement("div")
                                                            createNavBarMenuMobileSideMenuItemBlockTextUnderlinerContainer.className = `navBarOneMobileSideMenuItem${classNumberMapper[menuItemsPopulateCounter]}BlockTextUnderlinerContainer`

                                                                var createNavBarMenuMobileSideMenuItemBlockTextUnderlinerActual = document.createElement("div")
                                                                createNavBarMenuMobileSideMenuItemBlockTextUnderlinerActual.className = `navBarOneMobileSideMenuItem${classNumberMapper[menuItemsPopulateCounter]}BlockTextUnderlinerActual`








                                                    var createNavBarMenuMobileSideMenuItemBlockIconSide = document.createElement("div")
                                                    createNavBarMenuMobileSideMenuItemBlockIconSide.className = `navBarOneMobileSideMenuItem${classNumberMapper[menuItemsPopulateCounter]}BlockIconSideContainer`

                                                        var createNavBarMenuMobileSideMenuItemBlockIconCircle = document.createElement("div")
                                                        createNavBarMenuMobileSideMenuItemBlockIconCircle.className = `navBarOneMobileSideMenuItem${classNumberMapper[menuItemsPopulateCounter]}BlockIconCircle`

                                                            var createNavBarMenuMobileSideMenuItemBlockIconMover = document.createElement("div")
                                                            createNavBarMenuMobileSideMenuItemBlockIconMover.className = `navBarOneMobileSideMenuItem${classNumberMapper[menuItemsPopulateCounter]}BlockIconMover`

                                                                var createNavBarMenuMobileSideMenuItemBlockIconLineOne = document.createElement("div")
                                                                createNavBarMenuMobileSideMenuItemBlockIconLineOne.className = `navBarOneMobileSideMenuItem${classNumberMapper[menuItemsPopulateCounter]}BlockIconLineOne`

                                                                var createNavBarMenuMobileSideMenuItemBlockIconLineTwo = document.createElement("div")
                                                                createNavBarMenuMobileSideMenuItemBlockIconLineTwo.className = `navBarOneMobileSideMenuItem${classNumberMapper[menuItemsPopulateCounter]}BlockIconLineTwo`

                                                                var createNavBarMenuMobileSideMenuItemBlockIconLineThree = document.createElement("div")
                                                                createNavBarMenuMobileSideMenuItemBlockIconLineThree.className = `navBarOneMobileSideMenuItem${classNumberMapper[menuItemsPopulateCounter]}BlockIconLineThree`

















                                            // STYLE ELEMENTS -----------
                                            // //////////////////////////

                                                createNavBarMenuMobileSideMenuItemBlockContainer.style = `
                                                
                                                    width:100%;
                                                    height:70px;
                                                    cursor:pointer;
                                                    position:relative;
                                                    transition:all 600ms ease;
                                                    -webkit-transition:all 600ms ease;
                                                    -moz-transition:all 600ms ease;
                                                    -o-transition:all 600ms ease;
                                                    -ms-transition:all 600ms ease;




                                                `




                                                    createNavBarMenuMobileSideMenuItemBlockTextSide.style = `
                                                    
                                                        width:90%;
                                                        height:70px;
                                                        top:0px;
                                                        left:0px;
                                                        display:inline-block;
                                                        position:absolute;
                                                        transition:all 600ms ease;
                                                        -webkit-transition:all 600ms ease;
                                                        -moz-transition:all 600ms ease;
                                                        -o-transition:all 600ms ease;
                                                        -ms-transition:all 600ms ease;


                                                    `

                                                        createNavBarMenuMobileSideMenuItemBlockTextActual.style = `
                                                        
                                                            font-size:20px;
                                                            color:#2C2C2C;
                                                            text-align:left;
                                                            font-weight:700;
                                                            font-family:arial, sans-serif;
                                                            line-height:65px;
                                                            padding-left:0px;
                                                            letter-spacing:3px;
                                                            transition:all 600ms ease;
                                                            -webkit-transition:all 600ms ease;
                                                            -moz-transition:all 600ms ease;
                                                            -o-transition:all 600ms ease;
                                                            -ms-transition:all 600ms ease;

                                                        `


                                                            createNavBarMenuMobileSideMenuItemBlockTextUnderlinerContainer.style = `
                                                            
                                                                width:100%;
                                                                height:3px;
                                                                bottom:0;
                                                                position:absolute;
                                                                background:#2C2C2C;
                                                                transition:all 600ms ease;
                                                                -webkit-transition:all 600ms ease;
                                                                -moz-transition:all 600ms ease;
                                                                -o-transition:all 600ms ease;
                                                                -ms-transition:all 600ms ease;

                                                            `



















                                                    createNavBarMenuMobileSideMenuItemBlockIconSide.style = `
                                                    
                                                        width:10%;
                                                        height:70px;
                                                        top:0px;
                                                        right:0px;
                                                        display:inline-block;
                                                        position:absolute;
                                                        transition:all 600ms ease;
                                                        -webkit-transition:all 600ms ease;
                                                        -moz-transition:all 600ms ease;
                                                        -o-transition:all 600ms ease;
                                                        -ms-transition:all 600ms ease;

                                                    `

                                                        createNavBarMenuMobileSideMenuItemBlockIconCircle.style = `
                                                        
                                                            width:30px;
                                                            height:30px;
                                                            top:-5px;
                                                            left:0;
                                                            right:0;
                                                            bottom:0;
                                                            margin:auto;
                                                            border:3px solid #2C2C2C;
                                                            position:absolute;
                                                            border-radius:1000px;
                                                            transition:all 600ms ease;
                                                            -webkit-transition:all 600ms ease;
                                                            -moz-transition:all 600ms ease;
                                                            -o-transition:all 600ms ease;
                                                            -ms-transition:all 600ms ease;

                                                        `

                                                            createNavBarMenuMobileSideMenuItemBlockIconMover.style = `
                                                            
                                                                width:20px;
                                                                height:20px;
                                                                top:0;
                                                                left:0;
                                                                right:0;
                                                                bottom:0;
                                                                margin:auto;
                                                                position:absolute;
                                                                transition:all 600ms ease;
                                                                -webkit-transition:all 600ms ease;
                                                                -moz-transition:all 600ms ease;
                                                                -o-transition:all 600ms ease;
                                                                -ms-transition:all 600ms ease;

                                                            `





                                                                createNavBarMenuMobileSideMenuItemBlockIconLineOne.style = `
                                                                
                                                                    width:6px;
                                                                    height:3px;
                                                                    top:-6px;
                                                                    left:0;
                                                                    right:-3px;
                                                                    bottom:0;
                                                                    margin:auto;
                                                                    background:#2C2C2C;
                                                                    position:absolute;
                                                                    transform:rotateZ(45deg);
                                                                    border-radius:1000px;
                                                                    transition:all 600ms ease;
                                                                    -webkit-transition:all 600ms ease;
                                                                    -moz-transition:all 600ms ease;
                                                                    -o-transition:all 600ms ease;
                                                                    -ms-transition:all 600ms ease;

                                                                `

                                                                createNavBarMenuMobileSideMenuItemBlockIconLineTwo.style = `
                                                                
                                                                    width:12px;
                                                                    height:3px;
                                                                    top:1px;
                                                                    left:0;
                                                                    right:0;
                                                                    bottom:0;
                                                                    margin:auto;
                                                                    background:#2C2C2C;
                                                                    position:absolute;
                                                                    transform:rotateZ(0deg);
                                                                    border-radius:1000px;
                                                                    transition:all 600ms ease;
                                                                    -webkit-transition:all 600ms ease;
                                                                    -moz-transition:all 600ms ease;
                                                                    -o-transition:all 600ms ease;
                                                                    -ms-transition:all 600ms ease;

                                                                `

                                                                createNavBarMenuMobileSideMenuItemBlockIconLineThree.style = `
                                                                
                                                                    width:6px;
                                                                    height:3px;
                                                                    top:6px;
                                                                    left:0;
                                                                    right:-3px;
                                                                    bottom:0;
                                                                    margin:auto;
                                                                    background:#2C2C2C;
                                                                    position:absolute;
                                                                    transform:rotateZ(-45deg);
                                                                    border-radius:1000px;
                                                                    transition:all 600ms ease;
                                                                    -webkit-transition:all 600ms ease;
                                                                    -moz-transition:all 600ms ease;
                                                                    -o-transition:all 600ms ease;
                                                                    -ms-transition:all 600ms ease;

                                                                `

















                                            // ADD TEXT TO ITEM BLOCKS --
                                            // //////////////////////////

                                                createNavBarMenuMobileSideMenuItemBlockTextActual.textContent = `${storeNavBarItems[menuItemsPopulateCounter]}`










                                                    






                                            // APPEND ELEMENTS ----------
                                            // //////////////////////////
                                             
                                                createNavBarMenuMobileSideMenuItemsScrollControl.appendChild(createNavBarMenuMobileSideMenuItemBlockContainer)




                                                    createNavBarMenuMobileSideMenuItemBlockContainer.appendChild(createNavBarMenuMobileSideMenuItemBlockTextSide)

                                                        createNavBarMenuMobileSideMenuItemBlockTextSide.appendChild(createNavBarMenuMobileSideMenuItemBlockTextActual)



                                                        createNavBarMenuMobileSideMenuItemBlockContainer.appendChild(createNavBarMenuMobileSideMenuItemBlockTextUnderlinerContainer)

                                                            createNavBarMenuMobileSideMenuItemBlockTextUnderlinerContainer.appendChild(createNavBarMenuMobileSideMenuItemBlockTextUnderlinerActual)

                                                            

                                                    

                                                    createNavBarMenuMobileSideMenuItemBlockContainer.appendChild(createNavBarMenuMobileSideMenuItemBlockIconSide)

                                                        createNavBarMenuMobileSideMenuItemBlockIconSide.appendChild(createNavBarMenuMobileSideMenuItemBlockIconCircle)

                                                            createNavBarMenuMobileSideMenuItemBlockIconCircle.appendChild(createNavBarMenuMobileSideMenuItemBlockIconMover)



                                                                createNavBarMenuMobileSideMenuItemBlockIconMover.appendChild(createNavBarMenuMobileSideMenuItemBlockIconLineOne)

                                                                createNavBarMenuMobileSideMenuItemBlockIconMover.appendChild(createNavBarMenuMobileSideMenuItemBlockIconLineTwo)

                                                                createNavBarMenuMobileSideMenuItemBlockIconMover.appendChild(createNavBarMenuMobileSideMenuItemBlockIconLineThree)










                                                    






                                            // ADD EVENT LISTENERS FOR ITEMS
                                            // //////////////////////////

                                               var getListedItems = document.querySelector(`.navBarOneMobileSideMenuItemsScrollContainer`) 

                                               var getListeItemsChildren = getListedItems.children

                                               var getListemItemsCounter = getListedItems.children.length

                                               var sideMenuItemsClassNamesArray = []

                                               var sideMenuItemsTextClassNamesArray = []


                                                    // RUN LOOP FOR ARRAY POPULATION
                                                    // //////////////////

                                                        for ( sideMenuItemCounter = 0; sideMenuItemCounter < getListemItemsCounter; sideMenuItemCounter++ ) {

                                                            // IF DOESN NOT EXIST
                                                            // //////////

                                                                if ( 
                                                                    
                                                                        getListeItemsChildren[sideMenuItemCounter] == null || 
                                                                        getListeItemsChildren[sideMenuItemCounter] == undefined 
                                                                    
                                                                    ) 
                                                                    
                                                                {

                                                                }

                                                            // IF EXISTS
                                                            // //////////

                                                                else {

                                                                    var getSideMenuItemsTextObject = document.querySelector(`.navBarOneMobileSideMenuItem${classNumberMapper[sideMenuItemCounter]}BlockTextActual`)

                                                                    sideMenuItemsClassNamesArray.push(getListeItemsChildren[sideMenuItemCounter].className)
                                                                    sideMenuItemsTextClassNamesArray.push(getSideMenuItemsTextObject)

                                                                }

                                                        }


                                                    // RUN LOOP FOR CHILDREN COUNTER AND ASSIGN EVENTS
                                                    // //////////////////

                                                        sideMenuItemsClassNamesArray.forEach((itemChaser) => {

                                                            var getListedItemAssigner = sideMenuItemsTextClassNamesArray[sideMenuItemsClassNamesArray.indexOf(itemChaser)]


                                                                // FOR HOVERS 
                                                                // //////

                                                                    // MOUSE OVER OR MOUSE ENTER
                                                                    // //

                                                                        getListedItemAssigner.addEventListener("mouseover", function () {

                                                                            sideMenuItemsTextClassNamesArray[sideMenuItemsClassNamesArray.indexOf(itemChaser)].style = `
                                                                            
                                                                                font-size:20px;
                                                                                color:#2C2C2C;
                                                                                text-align:left;
                                                                                font-weight:700;
                                                                                font-family:arial, sans-serif;
                                                                                line-height:65px;
                                                                                padding-left:20px;
                                                                                letter-spacing:3px;
                                                                                transition:all 600ms ease;
                                                                                -webkit-transition:all 600ms ease;
                                                                                -moz-transition:all 600ms ease;
                                                                                -o-transition:all 600ms ease;
                                                                                -ms-transition:all 600ms ease;

                                                                            `

                                                                        })

                                                                    // MOUSE OUT OR MOUSE LEAVE
                                                                    // //

                                                                        getListedItemAssigner.addEventListener("mouseout", function () {

                                                                            sideMenuItemsTextClassNamesArray[sideMenuItemsClassNamesArray.indexOf(itemChaser)].style = `
                                                                            
                                                                                font-size:20px;
                                                                                color:#2C2C2C;
                                                                                text-align:left;
                                                                                font-weight:700;
                                                                                font-family:arial, sans-serif;
                                                                                line-height:65px;
                                                                                padding-left:0px;
                                                                                letter-spacing:3px;
                                                                                transition:all 600ms ease;
                                                                                -webkit-transition:all 600ms ease;
                                                                                -moz-transition:all 600ms ease;
                                                                                -o-transition:all 600ms ease;
                                                                                -ms-transition:all 600ms ease;

                                                                            `

                                                                        })







                                                                // FOR CLICKS 
                                                                // //////

                                                                    getListedItemAssigner.addEventListener("click", function () {

                                                                        window.open(`${storeNavBarItemLinks[sideMenuItemsClassNamesArray.indexOf(itemChaser)]}`, `_blank`)

                                                                    })

                                                        })



                                        }










                                                    






                                        // ADD EVENT LISTENERS FOR CLOSE MENU BUTTON
                                        // //////////////////////////

                                            var getSideMenuSlider = document.querySelector(`.navBarOneMobileSideMenuContainer`)

                                            var getSideMenuCloseButtonALoaded = document.querySelector(`.navBarOneMobileSideMenuButtonContainer`)


                                            var getSideMenuCloseButtonIconLineOne = document.querySelector(`.navBarOneMobileSideMenuButtonIconLineOne`)
                                            var getSideMenuCloseButtonIconLineTwo = document.querySelector(`.navBarOneMobileSideMenuButtonIconLineTwo`)
                                            var getSideMenuCloseButtonIconLineThree = document.querySelector(`.navBarOneMobileSideMenuButtonIconLineThree`)


                                            getSideMenuCloseButtonALoaded.addEventListener("click", function () {



                                                getSideMenuCloseButtonIconLineOne.style = `
                                                
                                                    width:100%;
                                                    height:3px;
                                                    inset:-14px 0px 0px 0px;
                                                    margin:auto;
                                                    opacity:1;
                                                    position:absolute;
                                                    transform:rotateZ(0deg);
                                                    background:rgb(44, 44, 44);
                                                    border-radius:1000px;
                                                    transition:all 600ms ease;
                                                    -webkit-transition:all 600ms ease;
                                                    -moz-transition:all 600ms ease;
                                                    -o-transition:all 600ms ease;
                                                    -ms-transition:all 600ms ease;

                                                `

                                                getSideMenuCloseButtonIconLineTwo.style = `
                                                
                                                    width:100%;
                                                    height:3px;
                                                    inset:1px 0px 0px 0px;
                                                    margin:auto;
                                                    opacity:1;
                                                    position:absolute;
                                                    transform:rotateZ(0deg);
                                                    background:rgb(44, 44, 44);
                                                    border-radius:1000px;
                                                    transition:all 600ms ease;
                                                    -webkit-transition:all 600ms ease;
                                                    -moz-transition:all 600ms ease;
                                                    -o-transition:all 600ms ease;
                                                    -ms-transition:all 600ms ease;

                                                `

                                                getSideMenuCloseButtonIconLineThree.style = `
                                                
                                                    width:100%;
                                                    height:3px;
                                                    inset:17px 0px 0px 0px;
                                                    margin:auto;
                                                    opacity:1;
                                                    position:absolute;
                                                    transform:rotateZ(0deg);
                                                    background:rgb(44, 44, 44);
                                                    border-radius:1000px;
                                                    transition:all 600ms ease;
                                                    -webkit-transition:all 600ms ease;
                                                    -moz-transition:all 600ms ease;
                                                    -o-transition:all 600ms ease;
                                                    -ms-transition:all 600ms ease;

                                                `



                                                    // SLIDE SIDE MOBILE SIDE MENU TO DEFAULT
                                                    // //////////////

                                                        getSideMenuSlider.style = `
                                                        
                                                            width:100%;
                                                            height:100%;
                                                            top:0;
                                                            left:-300%;
                                                            right:0;
                                                            bottom:0;
                                                            z-index:2;
                                                            margin:auto;
                                                            position:fixed;
                                                            background:#FFFFFF;
                                                            transition:all 600ms ease;
                                                            -webkit-transition:all 600ms ease;
                                                            -moz-transition:all 600ms ease;
                                                            -o-transition:all 600ms ease;
                                                            -ms-transition:all 600ms ease;


                                                        `

                                                

                                            })







                                        // FOR DESKTOP NAV BAR ITEMS ----
                                        // //////////////////////////////

                                            var getSideMenu = document.querySelector(".navBarOnePlateElementMobileMenuItemsSideContainer")
                                            var getMobileSideMenuContainer = document.querySelector(".navBarOneMobileSideMenuContainer")

                                            getSideMenu.addEventListener("click", function () {

                                                var getSideMenuCloseButtonIconLineOne = document.querySelector(".navBarOneMobileSideMenuButtonIconLineOne")
                                                var getSideMenuCloseButtonIconLineTwo = document.querySelector(".navBarOneMobileSideMenuButtonIconLineTwo")
                                                var getSideMenuCloseButtonIconLineThree = document.querySelector(".navBarOneMobileSideMenuButtonIconLineThree")

                                                getMobileSideMenuContainer.style = `
                                                
                                                    width:100%;
                                                    height:100%;
                                                    top:0;
                                                    left:0%;
                                                    right:0;
                                                    bottom:0;
                                                    z-index:2;
                                                    margin:auto;
                                                    position:fixed;
                                                    background:#FFFFFF;
                                                    transition:all 600ms ease;
                                                    -webkit-transition:all 600ms ease;
                                                    -moz-transition:all 600ms ease;
                                                    -o-transition:all 600ms ease;
                                                    -ms-transition:all 600ms ease;
                                                
                                                `

                                                    // SIDE MENU CLOSE MENU BUTTON ICON LINES
                                                    // //////////////////

                                                        getSideMenuCloseButtonIconLineOne.style = `
                                                
                                                            width:100%;
                                                            height:3px;
                                                            inset:0px 0px 0px 0px;
                                                            margin:auto;
                                                            opacity:1;
                                                            position:absolute;
                                                            transform:rotateZ(45deg);
                                                            background:rgb(44, 44, 44);
                                                            border-radius:1000px;
                                                            transition:all 600ms ease;
                                                            -webkit-transition:all 600ms ease;
                                                            -moz-transition:all 600ms ease;
                                                            -o-transition:all 600ms ease;
                                                            -ms-transition:all 600ms ease;

                                                        `

                                                        getSideMenuCloseButtonIconLineTwo.style = `
                                                        
                                                            width:100%;
                                                            height:3px;
                                                            inset:1px 0px 0px 0px;
                                                            margin:auto;
                                                            opacity:0;
                                                            position:absolute;
                                                            transform:rotateZ(0deg);
                                                            background:rgb(44, 44, 44);
                                                            border-radius:1000px;
                                                            transition:all 600ms ease;
                                                            -webkit-transition:all 600ms ease;
                                                            -moz-transition:all 600ms ease;
                                                            -o-transition:all 600ms ease;
                                                            -ms-transition:all 600ms ease;

                                                        `

                                                        getSideMenuCloseButtonIconLineThree.style = `
                                                        
                                                            width:100%;
                                                            height:3px;
                                                            inset:0px 0px 0px 0px;
                                                            margin:auto;
                                                            opacity:1;
                                                            position:absolute;
                                                            transform:rotateZ(-45deg);
                                                            background:rgb(44, 44, 44);
                                                            border-radius:1000px;
                                                            transition:all 600ms ease;
                                                            -webkit-transition:all 600ms ease;
                                                            -moz-transition:all 600ms ease;
                                                            -o-transition:all 600ms ease;
                                                            -ms-transition:all 600ms ease;

                                                        `



                                            })



                    }





                // CREATE NAV BAR TWO ACTUAL --------------------------------
                // //////////////////////////////////////////////////////////

                    function createNavBarTwoMainPlate (cushionNumber) {

                        // GET NAV BAR CUSHION xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        // //////////////////////////////////////////////////

                            var createNavBarCushion = document.querySelector(`.navBar${cushionNumber}`)

                        // CREATE NAV BAR TWO ELEMENTS xxxxxxxxxxxxxxxxxxxxxx
                        // //////////////////////////////////////////////////

                            // CREATE MAIN NAV BAR PLATE AND ELEMENTS =======
                            // //////////////////////////////////////////////

                                var navBarPlateTwoMainContainer = document.createElement("div")
                                navBarPlateTwoMainContainer.className = `navBarTwoMainContainer`

                                    var navBarPlateTwoMainBlocker = document.createElement("div")
                                    navBarPlateTwoMainBlocker.className = `navBarTwoMainBackgroundBlocker`





                            // CREATE MAIN NAV BAR PLATE ELEMENT AND RESIZER 
                            // //////////////////////////////////////////////

                                var navBarPlateTwoMainElement = document.createElement("div")
                                navBarPlateTwoMainElement.className = `navBarTwoPlateElementContainer`

                                    var navBarPlateTwoElementResizer = document.createElement("div")
                                    navBarPlateTwoElementResizer.className = `navBarTwoPlateElementResizer`





                            // CREATE MAIN NAV BAR LOGO AND MENU ITEMS SIDES
                            // //////////////////////////////////////////////

                                var navBarPlateTwoLogoSide = document.createElement("div")
                                navBarPlateTwoLogoSide.className = `navBarTwoPlateElementLogoTitleSideContainer`

                                    var createNavBarPlateTwoLogoContainer = document.createElement("div")
                                    createNavBarPlateTwoLogoContainer.className = `navBarTwoPlateLogoContainer`

                                        var createNavBarPlateTwoLogoActual = document.createElement("div")
                                        createNavBarPlateTwoLogoActual.className = `navBarTwoPlateLogoActual`








                                // CREATE MENU LIST ITEMS --------------------
                                // ///////////////////////////////////////////

                                    // FOR DESKTOP MENU LIST ITEMS ...........
                                    // ///////////////////////////////////////

                                        var navBarPlateTwoDesktopMenuItemsSide = document.createElement("div")
                                        navBarPlateTwoDesktopMenuItemsSide.className = `navBarTwoPlateElementDesktopMenuItemsSideContainer`

                                    // FOR MOBILE MENU LIST ITEMS ............
                                    // ///////////////////////////////////////

                                        var navBarPlateTwoMobileMenuItemsSide = document.createElement("div")
                                        navBarPlateTwoMobileMenuItemsSide.className = `navBarTwoPlateElementMobileMenuItemsSideContainer`








                                            // CREATE MOBILE MENU BUTTONS AND ICON CONTAINERS
                                            // ///////////////////////////////

                                                var createNavBarTwoMenuItemsMobileButtonContainer = document.createElement("div")
                                                createNavBarTwoMenuItemsMobileButtonContainer.className = `navBarTwoMenuItemsButtonContainer`
                
                                                    var createNavBarTwoMenuItemsMobileButtonIconMover = document.createElement("div")
                                                    createNavBarTwoMenuItemsMobileButtonIconMover.className = `navBarTwoMenuItemsButtonIconMover`
                
                
                
                                                        var createNavBarTwoMenuItemsmobileButtonIconLineOne = document.createElement("div")
                                                        createNavBarTwoMenuItemsmobileButtonIconLineOne.className = `navBarTwoMenuItemsButtonIconLineOne`
                
                                                        var createNavBarTwoMenuItemsmobileButtonIconLineTwo = document.createElement("div")
                                                        createNavBarTwoMenuItemsmobileButtonIconLineTwo.className = `navBarTwoMenuItemsButtonIconLineTwo`
                
                                                        var createNavBarTwoMenuItemsmobileButtonIconLineThree = document.createElement("div")
                                                        createNavBarTwoMenuItemsmobileButtonIconLineThree.className = `navBarTwoMenuItemsButtonIconLineThree`








                                            // CREATE MOBILE MENU LIST ITEMS 
                                            // ///////////////////////////////

                                                var createNavBarTwoMenuItemsMobileSideMenu = document.createElement("div")
                                                createNavBarTwoMenuItemsMobileSideMenu.className = `navBarTwoPlateElementMobileMenuItemsSideContentContainer`

                                                    var createNavBarTwoMenuItemsMobileSideMenuResizer = document.createElement("div")
                                                    createNavBarTwoMenuItemsMobileSideMenuResizer.className = `navBarTwoPlateElementMobileMenuItemsSideResizer`


                                                        // HEADER AND SIDE MENU CLOSE BUTTON CONTAINER
                                                        // ///////////////////

                                                            var createNavBarTwoMenuItemsMobileSideMenuHeadlineCloseMenuButtonContainer = document.createElement("div")
                                                            createNavBarTwoMenuItemsMobileSideMenuHeadlineCloseMenuButtonContainer.className = `navBarTwoPlateElementMobileMenuItemsSideHeadlineCloseMenuButtonContainer`


                                                                // HEADLINER TEXT CONTAINER
                                                                // ///////////

                                                                    var createNavBarTwoMenuItemsMobileSideMenuHeadlineSideContainer = document.createElement("div")
                                                                    createNavBarTwoMenuItemsMobileSideMenuHeadlineSideContainer.className = `navBarTwoPlateElementMobileMenuItemsSideHeadlineSideContainer`

                                                                        var createNavBarTwoMenuItemsMobileSideMenuHeadlineTextContainer = document.createElement("div")
                                                                        createNavBarTwoMenuItemsMobileSideMenuHeadlineTextContainer.className = `navBarTwoPlateElementMobileMenuItemsSideHeadlineTextContainer`

                                                                            var createNavBarTwoMenuItemsMobileSideMenuHeadlineTextActual = document.createElement("div")
                                                                            createNavBarTwoMenuItemsMobileSideMenuHeadlineTextActual.className = `navBarTwoPlateElementMobileMenuItemsSideHeadlineTextActual`


                                                                // MENU BUTTON CLOSE MENU CONTAINER
                                                                // ///////////

                                                                    var createNavBarTwoMenuItemsMobileSideMenuCloseButtonSideContainer = document.createElement("div")
                                                                    createNavBarTwoMenuItemsMobileSideMenuCloseButtonSideContainer.className = `navBarTwoPlateElementMobileMenuItemsSideCloseMenuButtonSideContainer`

                                                                        var createNavBarTwoMenuItemsMobileSideMenuCloseButtonContainer = document.createElement("div")
                                                                        createNavBarTwoMenuItemsMobileSideMenuCloseButtonContainer.className = `navBarTwoPlateElementMobileMenuItemsSideCloseMenuButtonContainer`

                                                                            // MENU BUTTON CLOSE MENU BUTTON ICON 
                                                                            // 

                                                                                var createNavBarTwoMenuItemsMobileSideMenuCloseButtonIconMover = document.createElement("div")
                                                                                createNavBarTwoMenuItemsMobileSideMenuCloseButtonIconMover.className = `navBarTwoPlateElementMobileMenuItemsSideCloseMenuButtonIconMover`

                                                                                    var createNavBarTwoMenuItemsMobileSideMenuCloseButtonIconLineOne = document.createElement("div")
                                                                                    createNavBarTwoMenuItemsMobileSideMenuCloseButtonIconLineOne.className = `navBarTwoPlateElementMobileMenuItemsSideCloseMenuButtonIconLineOne`

                                                                                    var createNavBarTwoMenuItemsMobileSideMenuCloseButtonIconLineTwo = document.createElement("div")
                                                                                    createNavBarTwoMenuItemsMobileSideMenuCloseButtonIconLineTwo.className = `navBarTwoPlateElementMobileMenuItemsSideCloseMenuButtonIconLineTwo`

                                                                                    var createNavBarTwoMenuItemsMobileSideMenuCloseButtonIconLineThree = document.createElement("div")
                                                                                    createNavBarTwoMenuItemsMobileSideMenuCloseButtonIconLineThree.className = `navBarTwoPlateElementMobileMenuItemsSideCloseMenuButtonIconLineThree`


                                                                // MENU ITEMS LIST CONTAINER
                                                                // ///////////

                                                                    var createNavBarTwoMenuItemsSideMenuListItemsContainer = document.createElement("div")
                                                                    createNavBarTwoMenuItemsSideMenuListItemsContainer.className = `navBarTwoPlateElementMobileMenuSideItemsListContainer`



























                        

                            // STYLE MAIN NAV BAR PLATE AND ELEMENTS ========
                            // //////////////////////////////////////////////

                                // STYLE MAIN NAV BAR ELEMENTS xxxxxxxxxxxxxx
                                // //////////////////////////////////////////

                                    navBarPlateTwoMainContainer.style = `
                                    
                                        width:100%;
                                        top:0;
                                        left:0;
                                        right:0;
                                        margin:0px auto;
                                        z-index:2;
                                        position:fixed;
                                        transition:all 600ms ease;
                                        -webkit-transition:all 600ms ease;
                                        -moz-transition:all 600ms ease;
                                        -o-transition:all 600ms ease;
                                        -ms-transition:all 600ms ease;

                                    `

                                        navBarPlateTwoMainBlocker.style = `
                                        
                                            width:100%;
                                            height:50px;
                                            top:0;
                                            left:0;
                                            right:0;
                                            margin:0px auto;
                                            position:fixed;
                                            background:${storeNavBarThemeBackground[0]};
                                            transition:all 600ms ease;
                                            -webkit-transition:all 600ms ease;
                                            -moz-transition:all 600ms ease;
                                            -o-transition:all 600ms ease;
                                            -ms-transition:all 600ms ease;

                                        `



                                // STYLE MAIN NAV BAR PLATE ELEMENT AND RESIZER
                                // //////////////////////////////////////////


                                    navBarPlateTwoMainElement.style = `
                                    
                                        width:${screenWidthSelector};
                                        top:20px;
                                        left:0;
                                        right:0;
                                        margin:0px auto;
                                        backdrop-filter:blur(10px);
                                        padding:10px 0px;
                                        position:absolute;
                                        background:rgba(255, 255, 255, 0.8);
                                        border-radius:8px;
                                        box-shadow:0px 30px 30px -10px rgba(0,0,0,0.2);
                                        transition:all 600ms ease;
                                        -webkit-transition:all 600ms ease;
                                        -moz-transition:all 600ms ease;
                                        -o-transition:all 600ms ease;
                                        -ms-transition:all 600ms ease;

                                    `

                                        navBarPlateTwoElementResizer.style = `
                                        
                                            width:92%;
                                            height:50px;
                                            top:0;
                                            left:0;
                                            right:0;
                                            bottom:0;
                                            margin:auto;
                                            position:relative;
                                            /*background:#2C2C2C;*/
                                            border-radius:1000px;
                                            transition:all 600ms ease;
                                            -webkit-transition:all 600ms ease;
                                            -moz-transition:all 600ms ease;
                                            -o-transition:all 600ms ease;
                                            -ms-transition:all 600ms ease;

                                        `



                                // STYLE MAIN NAV BAR LOGO SIDE =============
                                // //////////////////////////////////////////

                                    navBarPlateTwoLogoSide.style = `
                                    
                                        width:${getNavBarLogoAndTitleSideSizing};
                                        height:50px;
                                        float:left;
                                        position:relative;
                                        transition:all 600ms ease;
                                        -webkit-transition:all 600ms ease;
                                        -moz-transition:all 600ms ease;
                                        -o-transition:all 600ms ease;
                                        -ms-transition:all 600ms ease;

                                    `

                                        createNavBarPlateTwoLogoContainer.style = `
                                        
                                            width:100%;
                                            height:50px;
                                            float:left;
                                            position:relative;
                                            background:#3a885a;
                                            transition:all 600ms ease;
                                            -webkit-transition:all 600ms ease;
                                            -moz-transition:all 600ms ease;
                                            -o-transition:all 600ms ease;
                                            -ms-transition:all 600ms ease;

                                        `

                                            createNavBarPlateTwoLogoActual.style = `
                                            
                                                width:150px;
                                                height:50px;
                                                top:0;
                                                left:0;
                                                bottom:0;
                                                margin:auto;
                                                position:absolute;
                                                background:#df7cdf;
                                                transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;

                                            `



                                // STYLE MAIN NAV BAR MENU ITEMS SIDES ======
                                // //////////////////////////////////////////

                                    // FOR MOBILE MENU ATTRIBUTES -----------
                                    // //////////////////////////////////////

                                        navBarPlateTwoDesktopMenuItemsSide.style = `
                                        
                                            width:${getNavBarMenuItemsSideSizing};
                                            height:50px;
                                            float:right;
                                            display:${getNavBarDesktopMenuItemsSetting};
                                            /*background:#3C5472;*/
                                            text-align:right;
                                            position:relative;
                                            transition:all 600ms ease;
                                            -webkit-transition:all 600ms ease;
                                            -moz-transition:all 600ms ease;
                                            -o-transition:all 600ms ease;
                                            -ms-transition:all 600ms ease;

                                        `

                                    // FOR DESKTOP MENU ATTRIBUTES ----------
                                    // //////////////////////////////////////

                                        navBarPlateTwoMobileMenuItemsSide.style = `
                                        
                                            width:${getNavBarMenuItemsSideSizing};
                                            height:50px;
                                            float:right;
                                            display:${getNavBarMobileMenuItemsSetting};
                                            position:relative;
                                            transition:all 600ms ease;
                                            -webkit-transition:all 600ms ease;
                                            -moz-transition:all 600ms ease;
                                            -o-transition:all 600ms ease;
                                            -ms-transition:all 600ms ease;

                                        `


                                            // STYLE MOBILE ITEMS MENU ICON ELEMENTS
                                            // //////////////////////////////


                                                createNavBarTwoMenuItemsMobileButtonContainer.style = `
                                                
                                                    width:50px;
                                                    height:50px;
                                                    cursor:pointer;
                                                    margin:auto;
                                                    position:relative;
                                                    background:#FFFFFF;
                                                    border-radius:8px;
                                                    box-shadow:0px 20px 30px -10px rgba(0,0,0,0.5);
                                                    transition:all 600ms ease;
                                                    -webkit-transition:all 600ms ease;
                                                    -moz-transition:all 600ms ease;
                                                    -o-transition:all 600ms ease;
                                                    -ms-transition:all 600ms ease;

                                                `

                                                    createNavBarTwoMenuItemsMobileButtonIconMover.style = `
                                                    
                                                        width:20px;
                                                        height:25px;
                                                        top:0;
                                                        left:0;
                                                        right:0;
                                                        bottom:0;
                                                        margin:auto;
                                                        position:absolute;
                                                        transition:all 600ms ease;
                                                        -webkit-transition:all 600ms ease;
                                                        -moz-transition:all 600ms ease;
                                                        -o-transition:all 600ms ease;
                                                        -ms-transition:all 600ms ease;

                                                    `

                                                        createNavBarTwoMenuItemsmobileButtonIconLineOne.style = `
                                                        
                                                            width:100%;
                                                            height:3px;
                                                            top:-14px;
                                                            left:0;
                                                            right:0;
                                                            bottom:0;
                                                            margin:auto;
                                                            position:absolute;
                                                            background:#2C2C2C;
                                                            border-radius:1000px;
                                                            transition:all 600ms ease;
                                                            -webkit-transition:all 600ms ease;
                                                            -moz-transition:all 600ms ease;
                                                            -o-transition:all 600ms ease;
                                                            -ms-transition:all 600ms ease;

                                                        `

                                                        createNavBarTwoMenuItemsmobileButtonIconLineTwo.style = `
                                                        
                                                            width:100%;
                                                            height:3px;
                                                            top:0;
                                                            left:0;
                                                            right:0;
                                                            bottom:0;
                                                            margin:auto;
                                                            position:absolute;
                                                            background:#2C2C2C;
                                                            border-radius:1000px;
                                                            transition:all 600ms ease;
                                                            -webkit-transition:all 600ms ease;
                                                            -moz-transition:all 600ms ease;
                                                            -o-transition:all 600ms ease;
                                                            -ms-transition:all 600ms ease;

                                                        `

                                                        createNavBarTwoMenuItemsmobileButtonIconLineThree.style = `
                                                        
                                                            width:100%;
                                                            height:3px;
                                                            top:15px;
                                                            left:0;
                                                            right:0;
                                                            bottom:0;
                                                            margin:auto;
                                                            position:absolute;
                                                            background:#2C2C2C;
                                                            border-radius:1000px;
                                                            transition:all 600ms ease;
                                                            -webkit-transition:all 600ms ease;
                                                            -moz-transition:all 600ms ease;
                                                            -o-transition:all 600ms ease;
                                                            -ms-transition:all 600ms ease;

                                                        `








                                                            // STYLE MOBILE MENU LIST ITEMS
                                                            // //////////////

                                                                createNavBarTwoMenuItemsMobileSideMenu.style = `
                                                                
                                                                    width:100%;
                                                                    height:100%;
                                                                    top:0;
                                                                    left:0%;
                                                                    right:0;
                                                                    bottom:0;
                                                                    margin:auto;
                                                                    opacity:0;
                                                                    z-index:-1;
                                                                    display:none;
                                                                    position:fixed;
                                                                    background:rgba(255,255,255,0.8);
                                                                    backdrop-filter:blur(0px);
                                                                    transition:all 600ms ease;
                                                                    -webkit-transition:all 600ms ease;
                                                                    -moz-transition:all 600ms ease;
                                                                    -o-transition:all 600ms ease;
                                                                    -ms-transition:all 600ms ease;

                                                                `

                                                                    createNavBarTwoMenuItemsMobileSideMenuResizer.style = `
                                                                    
                                                                        width:80%;
                                                                        height:80%;
                                                                        top:0;
                                                                        left:0;
                                                                        right:0;
                                                                        bottom:0;
                                                                        margin:auto;
                                                                        overflow:auto;
                                                                        position:absolute;
                                                                        transition:all 600ms ease;
                                                                        -webkit-transition:all 600ms ease;
                                                                        -moz-transition:all 600ms ease;
                                                                        -o-transition:all 600ms ease;
                                                                        -ms-transition:all 600ms ease;

                                                                    `



                                                                        // STYLE HEADER AND SIDE MENU CLOSE BUTTON CONTAINER
                                                                        // ///////////////////

                                                                            createNavBarTwoMenuItemsMobileSideMenuHeadlineCloseMenuButtonContainer.style = `
                                                                            
                                                                                width:100%;
                                                                                top:0;
                                                                                padding:20px 0px;
                                                                                margin:0px auto;
                                                                                position:relative;
                                                                                transition:all 600ms ease;
                                                                                -webkit-transition:all 600ms ease;
                                                                                -moz-transition:all 600ms ease;
                                                                                -o-transition:all 600ms ease;
                                                                                -ms-transition:all 600ms ease;

                                                                            `


                                                                                // HEADLINER TEXT CONTAINER
                                                                                // ///////////

                                                                                    createNavBarTwoMenuItemsMobileSideMenuHeadlineSideContainer.style = `
                                                                                    
                                                                                        width:80%;
                                                                                        height:50px;
                                                                                        left:0px;
                                                                                        display:inline-block;
                                                                                        position:relative;
                                                                                        transition:all 600ms ease;
                                                                                        -webkit-transition:all 600ms ease;
                                                                                        -moz-transition:all 600ms ease;
                                                                                        -o-transition:all 600ms ease;
                                                                                        -ms-transition:all 600ms ease;

                                                                                    `

                                                                                        createNavBarTwoMenuItemsMobileSideMenuHeadlineTextContainer.style = `
                                                                                        
                                                                                            width:100%;
                                                                                            height:50px;
                                                                                            top:0;
                                                                                            left:0;
                                                                                            right:0;
                                                                                            bottom:0;
                                                                                            margin:auto;
                                                                                            position:absolute;
                                                                                            transition:all 600ms ease;
                                                                                            -webkit-transition:all 600ms ease;
                                                                                            -moz-transition:all 600ms ease;
                                                                                            -o-transition:all 600ms ease;
                                                                                            -ms-transition:all 600ms ease;

                                                                                        `

                                                                                            createNavBarTwoMenuItemsMobileSideMenuHeadlineTextActual.style = `
                                                                                            
                                                                                                font-size:30px;
                                                                                                color:#2C2C2C;
                                                                                                text-align:left;
                                                                                                font-weight:700;
                                                                                                font-family:arial, sans-serif;
                                                                                                line-height:60px;
                                                                                                letter-spacing:5px;
                                                                                                transition:all 600ms ease;
                                                                                                -webkit-transition:all 600ms ease;
                                                                                                -moz-transition:all 600ms ease;
                                                                                                -o-transition:all 600ms ease;
                                                                                                -ms-transition:all 600ms ease;

                                                                                            `



                                                                                // MENU BUTTON CLOSE MENU CONTAINER
                                                                                // ///////////

                                                                                    createNavBarTwoMenuItemsMobileSideMenuCloseButtonSideContainer.style = `
                                                                                    
                                                                                        width:20%;
                                                                                        height:50px;
                                                                                        right:0px;
                                                                                        display:inline-block;
                                                                                        position:relative;
                                                                                        transition:all 600ms ease;
                                                                                        -webkit-transition:all 600ms ease;
                                                                                        -moz-transition:all 600ms ease;
                                                                                        -o-transition:all 600ms ease;
                                                                                        -ms-transition:all 600ms ease;

                                                                                    `

                                                                                        createNavBarTwoMenuItemsMobileSideMenuCloseButtonContainer.style = `
                                                                                        
                                                                                            width:50px;
                                                                                            height:50px;
                                                                                            top:0;
                                                                                            left:0;
                                                                                            right:0;
                                                                                            bottom:0;
                                                                                            cursor:pointer;
                                                                                            margin:auto;
                                                                                            position:absolute;
                                                                                            box-shadow:0px 20px 30px -10px rgba(0,0,0,0.5);
                                                                                            background:#FFFFFF;
                                                                                            border-radius:8px;
                                                                                            transition:all 600ms ease;
                                                                                            -webkit-transition:all 600ms ease;
                                                                                            -moz-transition:all 600ms ease;
                                                                                            -o-transition:all 600ms ease;
                                                                                            -ms-transition:all 600ms ease;

                                                                                        `

                                                                                            // MENU BUTTON CLOSE MENU BUTTON ICON 
                                                                                            // 

                                                                                                createNavBarTwoMenuItemsMobileSideMenuCloseButtonIconMover.style = `
                                                                                                
                                                                                                    width:25px;
                                                                                                    height:30px;
                                                                                                    top:0;
                                                                                                    left:0;
                                                                                                    right:0;
                                                                                                    bottom:0;
                                                                                                    margin:auto;
                                                                                                    position:absolute;
                                                                                                    transition:all 600ms ease;
                                                                                                    -webkit-transition:all 600ms ease;
                                                                                                    -moz-transition:all 600ms ease;
                                                                                                    -o-transition:all 600ms ease;
                                                                                                    -ms-transition:all 600ms ease;

                                                                                                `

                                                                                                    createNavBarTwoMenuItemsMobileSideMenuCloseButtonIconLineOne.style = `
                                                                                                    
                                                                                                        width:20px;
                                                                                                        height:3px;
                                                                                                        top:0;
                                                                                                        left:0;
                                                                                                        right:0;
                                                                                                        bottom:0;
                                                                                                        margin:auto;
                                                                                                        opacity:1;
                                                                                                        position:absolute;
                                                                                                        transform:rotateZ(45deg);
                                                                                                        background:#2C2C2C;
                                                                                                        transition:all 600ms ease;
                                                                                                        -webkit-transition:all 600ms ease;
                                                                                                        -moz-transition:all 600ms ease;
                                                                                                        -o-transition:all 600ms ease;
                                                                                                        -ms-transition:all 600ms ease;

                                                                                                    `

                                                                                                    createNavBarTwoMenuItemsMobileSideMenuCloseButtonIconLineTwo.style = `
                                                                                                    
                                                                                                        width:20px;
                                                                                                        height:3px;
                                                                                                        top:1px;
                                                                                                        left:0;
                                                                                                        right:0;
                                                                                                        bottom:0;
                                                                                                        margin:auto;
                                                                                                        opacity:0;
                                                                                                        position:absolute;
                                                                                                        transform:rotateZ(0deg);
                                                                                                        background:#2C2C2C;
                                                                                                        transition:all 600ms ease;
                                                                                                        -webkit-transition:all 600ms ease;
                                                                                                        -moz-transition:all 600ms ease;
                                                                                                        -o-transition:all 600ms ease;
                                                                                                        -ms-transition:all 600ms ease;

                                                                                                    `

                                                                                                    createNavBarTwoMenuItemsMobileSideMenuCloseButtonIconLineThree.style = `
                                                                                                    
                                                                                                        width:20px;
                                                                                                        height:3px;
                                                                                                        top:0;
                                                                                                        left:0;
                                                                                                        right:0;
                                                                                                        bottom:0;
                                                                                                        margin:auto;
                                                                                                        opacity:1;
                                                                                                        position:absolute;
                                                                                                        transform:rotateZ(-45deg);
                                                                                                        background:#2C2C2C;
                                                                                                        transition:all 600ms ease;
                                                                                                        -webkit-transition:all 600ms ease;
                                                                                                        -moz-transition:all 600ms ease;
                                                                                                        -o-transition:all 600ms ease;
                                                                                                        -ms-transition:all 600ms ease;

                                                                                                    `


                                                                        // STYLE MENU ITEMS LIST CONTAINER
                                                                        // ///////////

                                                                            createNavBarTwoMenuItemsSideMenuListItemsContainer.style = `
                                                                            
                                                                                width:100%;
                                                                                top:0;
                                                                                padding:20px 0px;
                                                                                margin:0px auto;
                                                                                position:relative;
                                                                                transition:all 600ms ease;
                                                                                -webkit-transition:all 600ms ease;
                                                                                -moz-transition:all 600ms ease;
                                                                                -o-transition:all 600ms ease;
                                                                                -ms-transition:all 600ms ease;

                                                                            `

                                            




















                        

                            // APPEND TEXT ELEMENTS TO RELATED TO ELEMENTS ==
                            // //////////////////////////////////////////////

                                // APPEND TEXT ELEMENTS TO SIDE MENU BLOCK --
                                // //////////////////////////////////////////

                                    createNavBarTwoMenuItemsMobileSideMenuHeadlineTextActual.textContent = `MENU`

                                            




















                        

                            // APPEND MAIN NAV BAR PLATE AND ELEMENTS =======
                            // //////////////////////////////////////////////

                                createNavBarCushion.appendChild(navBarPlateTwoMainContainer)

                                    navBarPlateTwoMainContainer.appendChild(navBarPlateTwoMainBlocker)



                            // APPEND MAIN NAV BAR PLATE ELEMENT AND RESIZER
                            // //////////////////////////////////////////////

                                navBarPlateTwoMainBlocker.appendChild(navBarPlateTwoMainElement)

                                    navBarPlateTwoMainElement.appendChild(navBarPlateTwoElementResizer)



                            // APPEND MAIN NAV BAR LOGO SIDE CONTAINER ======
                            // //////////////////////////////////////////////

                                navBarPlateTwoElementResizer.appendChild(navBarPlateTwoLogoSide)

                                    navBarPlateTwoLogoSide.appendChild(createNavBarPlateTwoLogoContainer)

                                        createNavBarPlateTwoLogoContainer.appendChild(createNavBarPlateTwoLogoActual)



                            // APPEND MAIN NAV BAR MENU ITEMS SIDE CONTAINER 
                            // //////////////////////////////////////////////

                                navBarPlateTwoElementResizer.appendChild(navBarPlateTwoDesktopMenuItemsSide)

                                navBarPlateTwoElementResizer.appendChild(navBarPlateTwoMobileMenuItemsSide)



                            // APPEND MAIN NAV BAR MENU ICON CONTAINER ====== 
                            // //////////////////////////////////////////////

                                navBarPlateTwoMobileMenuItemsSide.appendChild(createNavBarTwoMenuItemsMobileButtonContainer)

                                    createNavBarTwoMenuItemsMobileButtonContainer.appendChild(createNavBarTwoMenuItemsMobileButtonIconMover)

                                        createNavBarTwoMenuItemsMobileButtonIconMover.appendChild(createNavBarTwoMenuItemsmobileButtonIconLineOne)

                                        createNavBarTwoMenuItemsMobileButtonIconMover.appendChild(createNavBarTwoMenuItemsmobileButtonIconLineTwo)

                                        createNavBarTwoMenuItemsMobileButtonIconMover.appendChild(createNavBarTwoMenuItemsmobileButtonIconLineThree)








                                            // APPEND MOBILE MENU LIST ITEMS
                                            // //////////////

                                                getBody.appendChild(createNavBarTwoMenuItemsMobileSideMenu)

                                                    createNavBarTwoMenuItemsMobileSideMenu.appendChild(createNavBarTwoMenuItemsMobileSideMenuResizer)




                                                        // APPEND HEADER AND SIDE MENU CLOSE BUTTON CONTAINER
                                                        // ///////////////////

                                                            createNavBarTwoMenuItemsMobileSideMenuResizer.appendChild(createNavBarTwoMenuItemsMobileSideMenuHeadlineCloseMenuButtonContainer)

                                                                createNavBarTwoMenuItemsMobileSideMenuHeadlineCloseMenuButtonContainer.appendChild(createNavBarTwoMenuItemsMobileSideMenuHeadlineSideContainer)


                                                                    // APPEND HEADLINER TEXT CONTAINER
                                                                    // ///////////

                                                                        createNavBarTwoMenuItemsMobileSideMenuHeadlineSideContainer.appendChild(createNavBarTwoMenuItemsMobileSideMenuHeadlineTextContainer)

                                                                            createNavBarTwoMenuItemsMobileSideMenuHeadlineTextContainer.appendChild(createNavBarTwoMenuItemsMobileSideMenuHeadlineTextActual)



                                                        // APPEND MENU BUTTON CLOSE MENU CONTAINER
                                                        // ///////////

                                                            createNavBarTwoMenuItemsMobileSideMenuHeadlineCloseMenuButtonContainer.appendChild(createNavBarTwoMenuItemsMobileSideMenuCloseButtonSideContainer)

                                                                createNavBarTwoMenuItemsMobileSideMenuCloseButtonSideContainer.appendChild(createNavBarTwoMenuItemsMobileSideMenuCloseButtonContainer)

                                                                    // MENU BUTTON CLOSE MENU BUTTON ICON 
                                                                    // 

                                                                        createNavBarTwoMenuItemsMobileSideMenuCloseButtonContainer.appendChild(createNavBarTwoMenuItemsMobileSideMenuCloseButtonIconMover)

                                                                            createNavBarTwoMenuItemsMobileSideMenuCloseButtonIconMover.appendChild(createNavBarTwoMenuItemsMobileSideMenuCloseButtonIconLineOne)

                                                                            createNavBarTwoMenuItemsMobileSideMenuCloseButtonIconMover.appendChild(createNavBarTwoMenuItemsMobileSideMenuCloseButtonIconLineTwo)

                                                                            createNavBarTwoMenuItemsMobileSideMenuCloseButtonIconMover.appendChild(createNavBarTwoMenuItemsMobileSideMenuCloseButtonIconLineThree)


                                                        // APPEND MENU ITEMS LIST CONTAINER
                                                        // ///////////

                                                            createNavBarTwoMenuItemsMobileSideMenuResizer.appendChild(createNavBarTwoMenuItemsSideMenuListItemsContainer)
















                            // APPEND SIDE MENU LIST ITEMS -----------
                            // ///////////////////////////////////////


                                // ARRAYS FOR COLLECTIONS xxxxxxxxxxx 
                                // //////////////////////////////////

                                    var collectListItemsArray = []


                                    // CHECK IF MENU ITEMS ALREADY EXIST OR NOT
                                    // //////////////////


                                        // IF MENU ITEMS EXIST ALREADY THEN CLEAR AND START OVER
                                        // /////////////


                                            var getListItemsContainerMain = document.querySelector(`.navBarTwoPlateElementMobileMenuSideItemsListContainer`)

                                                // IF CHILDREN LENGTH MORE THAN 0 RESET AND RESTART
                                                // /////

                                                    if ( getListItemsContainerMain.children.length > 0 ) 
                                                        
                                                    {


                                                    }

                                                // IF CHILDREN LENGTH EQUALS 0 ADD NEW COPY
                                                // /////

                                                    else if ( getListItemsContainerMain.children.length == 0 ) 
                                                        
                                                    {


                                                        


                                                        // RUN CREATE ITEMS BLOCK xxxxxxxxxxx
                                                        // //////////////////////////////////

                                                            for ( mobileItemsPopulateCounter = 0; mobileItemsPopulateCounter < 5; mobileItemsPopulateCounter++ ) {


                                                                // IF MENU ITEM DOESNT EXIST
                                                                // //////////////////////////

                                                                    if ( 
                                                                        
                                                                            storeNavBarItems[mobileItemsPopulateCounter] == null  || 
                                                                            storeNavBarItems[mobileItemsPopulateCounter] == undefined 
                                                                        
                                                                        ) 
                                                                        
                                                                    {

                                                                    }


                                                                // IF MENU ITEM EXISTS ------
                                                                // //////////////////////////

                                                                    else {


                                                                        // BUILD SIDE MENU LIST ITEM
                                                                        // //////////////////

                                                                            // CREATE LIST ITEM VARIABLES
                                                                            // //////////////

                                                                                var createNavBarTwoSideMenuItemContainer = document.createElement("div")
                                                                                createNavBarTwoSideMenuItemContainer.className = `navBarTwoMobileSideMenuListItem${classNumberMapper[mobileItemsPopulateCounter]}`

                                                                                    var createNavBarTwoSideMenuItemTextContainer = document.createElement("div")
                                                                                    createNavBarTwoSideMenuItemTextContainer.className = `navBarTwoMobileSideMenuListItem${classNumberMapper[mobileItemsPopulateCounter]}TextContainer`

                                                                                        var createNavBarTwoSideMenuItemTextActual = document.createElement("div")
                                                                                        createNavBarTwoSideMenuItemTextActual.className = `navBarTwoMobileSideMenuListItem${classNumberMapper[mobileItemsPopulateCounter]}TextActual`






                                                                                    var createNavBarTwoSideMenuItemUnderlinerContainer = document.createElement("div")
                                                                                    createNavBarTwoSideMenuItemUnderlinerContainer.className = `navBarTwoMobileSideMenuListItem${classNumberMapper[mobileItemsPopulateCounter]}UnderlinerContainer`

                                                                                        var createNavBarTwoSideMenuItemUnderlinerActual = document.createElement("div")
                                                                                        createNavBarTwoSideMenuItemUnderlinerActual.className = `navBarTwoMobileSideMenuListItem${classNumberMapper[mobileItemsPopulateCounter]}UnderlinerActual`








                                                                            // STYLE LIST ITEM VARIABLES
                                                                            // //////////////

                                                                                createNavBarTwoSideMenuItemContainer.style = `
                                                                                
                                                                                    width:100%;
                                                                                    position:relative;
                                                                                    transition:all 600ms ease;
                                                                                    -webkit-transition:all 600ms ease;
                                                                                    -moz-transition:all 600ms ease;
                                                                                    -o-transition:all 600ms ease;
                                                                                    -ms-transition:all 600ms ease;

                                                                                `

                                                                                    createNavBarTwoSideMenuItemTextContainer.style = `
                                                                                    
                                                                                        width:100%;
                                                                                        top:0;
                                                                                        position:relative;
                                                                                        transition:all 600ms ease;
                                                                                        -webkit-transition:all 600ms ease;
                                                                                        -moz-transition:all 600ms ease;
                                                                                        -o-transition:all 600ms ease;
                                                                                        -ms-transition:all 600ms ease;

                                                                                    `

                                                                                        createNavBarTwoSideMenuItemTextActual.style = `
                                                                                        
                                                                                            width:100%;
                                                                                            height:50px;
                                                                                            color:#2c2c2c;
                                                                                            cursor:pointer;
                                                                                            margin:0px auto;
                                                                                            padding:10px 0px 10px 0px;
                                                                                            position:relative;
                                                                                            font-size:25px;
                                                                                            font-weight:700;
                                                                                            font-family:arial, sans-serif;
                                                                                            text-align:left;
                                                                                            line-height:50px;
                                                                                            letter-spacing:5px;
                                                                                            transition:all 600ms ease;
                                                                                            -webkit-transition:all 600ms ease;
                                                                                            -moz-transition:all 600ms ease;
                                                                                            -o-transition:all 600ms ease;
                                                                                            -ms-transition:all 600ms ease;

                                                                                        `






                                                                                    createNavBarTwoSideMenuItemUnderlinerContainer.style = `
                                                                                    
                                                                                        width:100%;
                                                                                        bottom:0;
                                                                                        position:relative;
                                                                                        transition:all 600ms ease;
                                                                                        -webkit-transition:all 600ms ease;
                                                                                        -moz-transition:all 600ms ease;
                                                                                        -o-transition:all 600ms ease;
                                                                                        -ms-transition:all 600ms ease;

                                                                                    `

                                                                                        createNavBarTwoSideMenuItemUnderlinerActual.style = `
                                                                                        
                                                                                            width:100%;
                                                                                            height:5px;
                                                                                            background:#2C2C2C;
                                                                                            transition:all 600ms ease;
                                                                                            -webkit-transition:all 600ms ease;
                                                                                            -moz-transition:all 600ms ease;
                                                                                            -o-transition:all 600ms ease;
                                                                                            -ms-transition:all 600ms ease;

                                                                                        `








                                                                            // ADD LIST ITEM TEXT CONTENT
                                                                            // //////////////

                                                                                createNavBarTwoSideMenuItemTextActual.textContent = `${storeNavBarItems[mobileItemsPopulateCounter]}`








                                                                            // APPEND ITEMS TO SIDE MENU LIST CONTAINER
                                                                            // //////////////

                                                                                var getSideMenuItemsListContainer = document.querySelector(`.navBarTwoPlateElementMobileMenuSideItemsListContainer`)



                                                                                getSideMenuItemsListContainer.appendChild(createNavBarTwoSideMenuItemContainer)





                                                                                    createNavBarTwoSideMenuItemContainer.appendChild(createNavBarTwoSideMenuItemTextContainer)

                                                                                        createNavBarTwoSideMenuItemTextContainer.appendChild(createNavBarTwoSideMenuItemTextActual)


                                                                                    createNavBarTwoSideMenuItemContainer.appendChild(createNavBarTwoSideMenuItemUnderlinerContainer)

                                                                                        createNavBarTwoSideMenuItemUnderlinerContainer.appendChild(createNavBarTwoSideMenuItemUnderlinerActual)








                                                                            // ADD EVENT LISTENERS TO LIST ITEMS
                                                                            // //////////////

                                                                            
                                                                                var getSideMenuItemsListTextBoxEntire = document.querySelector(`.navBarTwoMobileSideMenuListItem${classNumberMapper[mobileItemsPopulateCounter]}TextActual`)



                                                                                    // PUSH OBJECTIVES INTO OBJECT COLLECTOR
                                                                                    // /////////

                                                                                        collectListItemsArray.push(getSideMenuItemsListTextBoxEntire)



                                                                                    // RUN EACH LOOP TO GET EVENTS
                                                                                    // /////////


                                                                                        collectListItemsArray.forEach((objectSelector) => {



                                                                                            // CREATE INDEX OF SELECTED OBJECT
                                                                                            // /

                                                                                                var getIndexOfSelectedObject = collectListItemsArray.indexOf(objectSelector)

                                                                                                var getSelectedObjectLink = storeNavBarItemLinks[getIndexOfSelectedObject]


                                                                                            // HOVER EVENTS 
                                                                                            // /

                                                                                                // FOR MOUSE OVER
                                                                                                // 

                                                                                                    objectSelector.addEventListener("mouseover", function () {

                                                                                                        console.log("THIS ONE IS: " + objectSelector.className)

                                                                                                        objectSelector.style = `
                                                                                                        
                                                                                                            width:100%;
                                                                                                            height:50px;
                                                                                                            color:#2c2c2c;
                                                                                                            cursor:pointer;
                                                                                                            margin:0px auto;
                                                                                                            padding:10px 0px 30px 0px;
                                                                                                            position:relative;
                                                                                                            font-size:25px;
                                                                                                            font-weight:700;
                                                                                                            font-family:arial, sans-serif;
                                                                                                            text-align:left;
                                                                                                            line-height:50px;
                                                                                                            letter-spacing:5px;
                                                                                                            transition:all 600ms ease;
                                                                                                            -webkit-transition:all 600ms ease;
                                                                                                            -moz-transition:all 600ms ease;
                                                                                                            -o-transition:all 600ms ease;
                                                                                                            -ms-transition:all 600ms ease;

                                                                                                        `
                                    
                                                                                                    })

                                                                                                    

                                                                                                // FOR MOUSE OUT
                                                                                                // 

                                                                                                    objectSelector.addEventListener("mouseout", function () {

                                                                                                        console.log("THIS ONE IS: " + objectSelector.className)

                                                                                                        objectSelector.style = `
                                                                                                        
                                                                                                            width:100%;
                                                                                                            height:50px;
                                                                                                            color:#2c2c2c;
                                                                                                            cursor:pointer;
                                                                                                            margin:0px auto;
                                                                                                            padding:10px 0px 10px 0px;
                                                                                                            position:relative;
                                                                                                            font-size:25px;
                                                                                                            font-weight:700;
                                                                                                            font-family:arial, sans-serif;
                                                                                                            text-align:left;
                                                                                                            line-height:50px;
                                                                                                            letter-spacing:5px;
                                                                                                            transition:all 600ms ease;
                                                                                                            -webkit-transition:all 600ms ease;
                                                                                                            -moz-transition:all 600ms ease;
                                                                                                            -o-transition:all 600ms ease;
                                                                                                            -ms-transition:all 600ms ease;

                                                                                                        `
                                    
                                                                                                    })


                                                                                            // CLICKER EVENTS
                                                                                            // /

                                                                                                objectSelector.addEventListener("click", function () {

                                                                                                    window.open(`${getSelectedObjectLink}`, `_blank`)
                                
                                                                                                })



                                                                                        })





                                                                    }

                                                            }

                                                        
                                                    }
















                            // ADD EVENT LISTENERS TO MAIN ELEMENTS --
                            // ///////////////////////////////////////


                                var getNavBarMainOpenMenuButton = document.querySelector(`.navBarTwoMenuItemsButtonContainer`)

                                var getsideMenuCloseButton = document.querySelector(`.navBarTwoPlateElementMobileMenuItemsSideCloseMenuButtonContainer`)
                                var getsideMenuCloseButtonIconLineOne = document.querySelector(`.navBarTwoPlateElementMobileMenuItemsSideCloseMenuButtonIconLineOne`)
                                var getsideMenuCloseButtonIconLineTwo = document.querySelector(`.navBarTwoPlateElementMobileMenuItemsSideCloseMenuButtonIconLineTwo`)
                                var getsideMenuCloseButtonIconLineThree = document.querySelector(`.navBarTwoPlateElementMobileMenuItemsSideCloseMenuButtonIconLineThree`)

                                var getSideMobileMenuContainer = document.querySelector(`.navBarTwoPlateElementMobileMenuItemsSideContentContainer`)







                                    // OPEN SIDE MENU BUTTON CLICKER
                                    // ///////////////////////////////

                                        getNavBarMainOpenMenuButton.addEventListener("click", function () {

                                            // CHANGE SIDE MENU CLOSE BUTTON ICON LINES TO OPENED
                                            // ///////////////////////

                                                getsideMenuCloseButtonIconLineOne.style = `
                                                
                                                    width:20px;
                                                    height:3px;
                                                    top:0;
                                                    left:0;
                                                    right:0;
                                                    bottom:0;
                                                    margin:auto;
                                                    opacity:1;
                                                    position:absolute;
                                                    transform:rotateZ(45deg);
                                                    background:#2C2C2C;
                                                    transition:all 600ms ease;
                                                    -webkit-transition:all 600ms ease;
                                                    -moz-transition:all 600ms ease;
                                                    -o-transition:all 600ms ease;
                                                    -ms-transition:all 600ms ease;

                                                `

                                                getsideMenuCloseButtonIconLineTwo.style = `
                                                
                                                    width:20px;
                                                    height:3px;
                                                    top:1px;
                                                    left:0;
                                                    right:0;
                                                    bottom:0;
                                                    margin:auto;
                                                    opacity:0;
                                                    position:absolute;
                                                    transform:rotateZ(0deg);
                                                    background:rgb(44, 44, 44);
                                                    border-radius:1000px;
                                                    transition:all 600ms ease;
                                                    -webkit-transition:all 600ms ease;
                                                    -moz-transition:all 600ms ease;
                                                    -o-transition:all 600ms ease;
                                                    -ms-transition:all 600ms ease;

                                                `

                                                getsideMenuCloseButtonIconLineThree.style = `
                                                
                                                    width:20px;
                                                    height:3px;
                                                    top:0;
                                                    left:0;
                                                    right:0;
                                                    bottom:0;
                                                    margin:auto;
                                                    opacity:1;
                                                    position:absolute;
                                                    transform:rotateZ(-45deg);
                                                    background:#2C2C2C;
                                                    transition:all 600ms ease;
                                                    -webkit-transition:all 600ms ease;
                                                    -moz-transition:all 600ms ease;
                                                    -o-transition:all 600ms ease;
                                                    -ms-transition:all 600ms ease;

                                                `




                                            // REVIVE MENU //////////////////
                                            // //////////////////////////////

                                                getSideMobileMenuContainer.style = `
                                                
                                                    width:100%;
                                                    height:100%;
                                                    top:0;
                                                    left:0%;
                                                    right:0;
                                                    bottom:0;
                                                    margin:auto;
                                                    opacity:0;
                                                    z-index:2;
                                                    display:block;
                                                    position:fixed;
                                                    background:rgba(255,255,255,0.8);
                                                    backdrop-filter:blur(0px);
                                                    transition:all 600ms ease;
                                                    -webkit-transition:all 600ms ease;
                                                    -moz-transition:all 600ms ease;
                                                    -o-transition:all 600ms ease;
                                                    -ms-transition:all 600ms ease;

                                                `


                                                    // THEN FADE IN CONTENT MENU
                                                    // //////////////////////

                                                        setTimeout(() => {

                                                            getSideMobileMenuContainer.style = `
                                                
                                                                width:100%;
                                                                height:100%;
                                                                top:0;
                                                                left:0%;
                                                                right:0;
                                                                bottom:0;
                                                                margin:auto;
                                                                opacity:1;
                                                                z-index:2;
                                                                display:block;
                                                                position:fixed;
                                                                background:rgba(255,255,255,0.8);
                                                                backdrop-filter:blur(10px);
                                                                transition:all 600ms ease;
                                                                -webkit-transition:all 600ms ease;
                                                                -moz-transition:all 600ms ease;
                                                                -o-transition:all 600ms ease;
                                                                -ms-transition:all 600ms ease;

                                                            `

                                                        }, 100)

                                        })









                                    // SIDE MENU CLOSE BUTTON CLICKER
                                    // ///////////////////////////////

                                        getsideMenuCloseButton.addEventListener("click", function () {




                                            // CHANGE SIDE MENU CLOSE BUTTON ICON LINES TO DEFAULT
                                            // ///////////////////////

                                                getsideMenuCloseButtonIconLineOne.style = `
                                                
                                                    width:20px;
                                                    height:3px;
                                                    top:-13px;
                                                    left:0;
                                                    right:0;
                                                    bottom:0;
                                                    margin:auto;
                                                    opacity:1;
                                                    position:absolute;
                                                    transform:rotateZ(0deg);
                                                    background:#2C2C2C;
                                                    transition:all 600ms ease;
                                                    -webkit-transition:all 600ms ease;
                                                    -moz-transition:all 600ms ease;
                                                    -o-transition:all 600ms ease;
                                                    -ms-transition:all 600ms ease;

                                                `

                                                getsideMenuCloseButtonIconLineTwo.style = `
                                                
                                                    width:20px;
                                                    height:3px;
                                                    top:1px;
                                                    left:0;
                                                    right:0;
                                                    bottom:0;
                                                    margin:auto;
                                                    opacity:1;
                                                    position:absolute;
                                                    transform:rotateZ(0deg);
                                                    background:rgb(44, 44, 44);
                                                    border-radius:1000px;
                                                    transition:all 600ms ease;
                                                    -webkit-transition:all 600ms ease;
                                                    -moz-transition:all 600ms ease;
                                                    -o-transition:all 600ms ease;
                                                    -ms-transition:all 600ms ease;

                                                `

                                                getsideMenuCloseButtonIconLineThree.style = `
                                                
                                                    width:20px;
                                                    height:3px;
                                                    top:15px;
                                                    left:0;
                                                    right:0;
                                                    bottom:0;
                                                    margin:auto;
                                                    opacity:1;
                                                    position:absolute;
                                                    transform:rotateZ(0deg);
                                                    background:#2C2C2C;
                                                    transition:all 600ms ease;
                                                    -webkit-transition:all 600ms ease;
                                                    -moz-transition:all 600ms ease;
                                                    -o-transition:all 600ms ease;
                                                    -ms-transition:all 600ms ease;

                                                `




                                            // FADE OUT CONTENT MENU ////////
                                            // //////////////////////////////

                                                getSideMobileMenuContainer.style = `
                                                
                                                    width:100%;
                                                    height:100%;
                                                    top:0;
                                                    left:0%;
                                                    right:0;
                                                    bottom:0;
                                                    margin:auto;
                                                    opacity:0;
                                                    z-index:2;
                                                    display:block;
                                                    position:fixed;
                                                    background:rgba(255,255,255,0.8);
                                                    backdrop-filter:blur(0px);
                                                    transition:all 600ms ease;
                                                    -webkit-transition:all 600ms ease;
                                                    -moz-transition:all 600ms ease;
                                                    -o-transition:all 600ms ease;
                                                    -ms-transition:all 600ms ease;

                                                `


                                                    // THEN KILL MENU -------
                                                    // //////////////////////

                                                        setTimeout(() => {

                                                            getSideMobileMenuContainer.style = `
                                                        
                                                                width:100%;
                                                                height:100%;
                                                                top:0;
                                                                left:0%;
                                                                right:0;
                                                                bottom:0;
                                                                margin:auto;
                                                                opacity:0;
                                                                z-index:-1;
                                                                display:none;
                                                                position:fixed;
                                                                background:rgba(255,255,255,0.8);
                                                                backdrop-filter:blur(0px);
                                                                transition:all 600ms ease;
                                                                -webkit-transition:all 600ms ease;
                                                                -moz-transition:all 600ms ease;
                                                                -o-transition:all 600ms ease;
                                                                -ms-transition:all 600ms ease;

                                                            `

                                                        }, 500)







                                        })

                        

                    }





                // CREATE NAV BAR THREE ACTUAL ------------------------------
                // //////////////////////////////////////////////////////////

                    function createNavBarThreeMainPlate (cushionNumber) {

                        // GET NAV BAR CUSHION xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        // //////////////////////////////////////////////////

                            var createNavBarCushion = document.querySelector(`.navBar${cushionNumber}`)

                        // CREATE NAV BAR TWO ELEMENTS xxxxxxxxxxxxxxxxxxxxxx
                        // //////////////////////////////////////////////////

                            // CREATE MAIN NAV BAR PLATE AND ELEMENTS =======
                            // //////////////////////////////////////////////

                                var navBarPlateThreeMainContainer = document.createElement("div")
                                navBarPlateThreeMainContainer.className = `navBarThreeMainContainer`





                            // CREATE MAIN NAV BAR PLATE ELEMENT ============ 
                            // //////////////////////////////////////////////

                                var navBarPlateThreeMainElement = document.createElement("div")
                                navBarPlateThreeMainElement.className = `navBarThreePlateElementContainer`





                            // CREATE MAIN NAV BAR PLATE ELEMENT RESIZER ==== 
                            // //////////////////////////////////////////////

                                var navBarPlateThreeMainElementResizer = document.createElement("div")
                                navBarPlateThreeMainElementResizer.className = `navBarThreePlateElementContainerResizer`





                            // CREATE MAIN NAV BAR LOGO SIDE CONTAINER ======
                            // //////////////////////////////////////////////

                                var navBarPlateThreeLogoSide = document.createElement("div")
                                navBarPlateThreeLogoSide.className = `navBarThreePlateLogoSideContainer`

                                    var createNavBarPlateThreeLogoContainer = document.createElement("div")
                                    createNavBarPlateThreeLogoContainer.className = `navBarThreePlateLogoContainer`

                                        var createNavBarPlateThreeLogoActual = document.createElement("div")
                                        createNavBarPlateThreeLogoActual.className = `navBarThreePlateLogoActual`





                            // CREATE MAIN NAV BAR MENU SIDE CONTAINER ======
                            // //////////////////////////////////////////////

                                var navBarPlateThreeMenuSide = document.createElement("div")
                                navBarPlateThreeMenuSide.className = `navBarThreePlateMenuSideContainer`

                                    var navBarPlateThreeMenuButtonContainer = document.createElement("div")
                                    navBarPlateThreeMenuButtonContainer.className = `navBarThreePlateMenuButtonContainer`

                                        var navBarPlateThreeMenuButtonActual = document.createElement("div")
                                        navBarPlateThreeMenuButtonActual.className = `navBarThreePlateMenuButtonActual`




                                            // CREATE BUTTON CLICKER CONTAINER -----
                                            // //////////////////////////////

                                                var navBarPlateThreeMenuButtonClickerContainer = document.createElement("div")
                                                navBarPlateThreeMenuButtonClickerContainer.className = `navBarThreePlateMenuButtonClickersContainer`

                                                    var navBarPlateThreeMenuButtonClickerOn = document.createElement("div")
                                                    navBarPlateThreeMenuButtonClickerOn.className = `navBarThreePlateMenuButtonClickerOn`

                                                    var navBarPlateThreeMenuButtonClickerOff = document.createElement("div")
                                                    navBarPlateThreeMenuButtonClickerOff.className = `navBarThreePlateMenuButtonClickerOff`




                                            // CREATE BUTTON CLICKER CONTAINER -----
                                            // //////////////////////////////

                                                var navBarPlateThreeMenuButtonIconMover = document.createElement("div")
                                                navBarPlateThreeMenuButtonIconMover.className = `navBarThreePlateMenuButtonIconMover`

                                                    var navBarPlateThreeMenuButtonIconLineOne = document.createElement("div")
                                                    navBarPlateThreeMenuButtonIconLineOne.className = `navBarThreePlateMenuButtonIconLineOne`

                                                    var navBarPlateThreeMenuButtonIconLineTwo = document.createElement("div")
                                                    navBarPlateThreeMenuButtonIconLineTwo.className = `navBarThreePlateMenuButtonIconLineTwo`

                                                    var navBarPlateThreeMenuButtonIconLineThree = document.createElement("div")
                                                    navBarPlateThreeMenuButtonIconLineThree.className = `navBarThreePlateMenuButtonIconLineThree`




                                            // CREATE SIDE MENU CONTAINER ----------
                                            // //////////////////////////////

                                                var navBarPlateThreeSideMenuContainer = document.createElement("div")
                                                navBarPlateThreeSideMenuContainer.className = `navBarThreePlateSideMenuMainContainer`



                                                    // CREATE SIDE MENU MENU POINTER CONTAINER
                                                    // /////////////////////

                                                        var navBarPlateThreeSideMenPointerContainer = document.createElement("div")
                                                        navBarPlateThreeSideMenPointerContainer.className = `navBarThreePlateSideMenuPointerContainer`

                                                            var navBarPlateThreeSideMenPointerActual = document.createElement("div")
                                                            navBarPlateThreeSideMenPointerActual.className = `navBarThreePlateSideMenuPointerActual`



                                                    // CREATE SIDE MENU CONTENT CONTAINER ELEMENT
                                                    // /////////////////////

                                                        var navBarPlateThreeSideMenContentContainer = document.createElement("div")
                                                        navBarPlateThreeSideMenContentContainer.className = `navBarThreePlateSideMenuContentContainerElement`

                                                            var navBarPlateThreeSideMenContentResizer = document.createElement("div")
                                                            navBarPlateThreeSideMenContentResizer.className = `navBarThreePlateSideMenuContentResizer`



























                        

                            // STYLE MAIN NAV BAR PLATE AND ELEMENTS ========
                            // //////////////////////////////////////////////

                                // STYLE MAIN NAV BAR ELEMENTS xxxxxxxxxxxxxx
                                // //////////////////////////////////////////

                                    navBarPlateThreeMainContainer.style = `
                                    
                                        width:100%;
                                        top:0;
                                        left:0;
                                        right:0;
                                        margin:0px auto;
                                        z-index:2;
                                        position:fixed;
                                        transition:all 600ms ease;
                                        -webkit-transition:all 600ms ease;
                                        -moz-transition:all 600ms ease;
                                        -o-transition:all 600ms ease;
                                        -ms-transition:all 600ms ease;

                                    `

                                // STYLE MAIN NAV BAR PLATE ELEMENT xxxxxxxxx
                                // //////////////////////////////////////////

                                    navBarPlateThreeMainElement.style = `
                                    
                                        width:200px;
                                        top:20px;
                                        left:0;
                                        right:0;
                                        margin:0px auto;
                                        padding:10px 0px;
                                        position:absolute;
                                        border-radius:1000px;
                                        transition:all 600ms ease;
                                        -webkit-transition:all 600ms ease;
                                        -moz-transition:all 600ms ease;
                                        -o-transition:all 600ms ease;
                                        -ms-transition:all 600ms ease;

                                    `

                                // STYLE MAIN NAV BAR PLATE ELEMENT RESIZER x
                                // //////////////////////////////////////////

                                    navBarPlateThreeMainElementResizer.style = `
                                    
                                        width:88%;
                                        height:50px;
                                        top:0;
                                        left:0;
                                        right:0;
                                        bottom:0;
                                        margin:auto;
                                        position:relative;
                                        border-radius:1000px;
                                        transition:all 600ms ease;
                                        -webkit-transition:all 600ms ease;
                                        -moz-transition:all 600ms ease;
                                        -o-transition:all 600ms ease;
                                        -ms-transition:all 600ms ease;

                                    `




                                        // STYLE MAIN NAV BAR LOGO SIDE CONTAINER
                                        // //////////////////////////////////

                                            navBarPlateThreeLogoSide.style = `
                                            
                                                width:80%;
                                                height:50px;
                                                float:left;
                                                position:relative;
                                                transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;

                                            `

                                                createNavBarPlateThreeLogoContainer.style = `
                                                
                                                    width:90%;
                                                    height:50px;
                                                    float:left;
                                                    position:relative;
                                                    background:#FFFFFF;
                                                    border-radius:8px;
                                                    box-shadow:0px 20px 20px -10px rgba(0,0,0,0.5);
                                                    transition:all 600ms ease;
                                                    -webkit-transition:all 600ms ease;
                                                    -moz-transition:all 600ms ease;
                                                    -o-transition:all 600ms ease;
                                                    -ms-transition:all 600ms ease;

                                                `

                                                    createNavBarPlateThreeLogoActual.style = `
                                                    
                                                        width:115px;
                                                        height:40px;
                                                        top:0;
                                                        left:0;
                                                        right:0;
                                                        bottom:0;
                                                        margin:auto;
                                                        position:absolute;
                                                        background:#2C2C2C;
                                                        transition:all 600ms ease;
                                                        -webkit-transition:all 600ms ease;
                                                        -moz-transition:all 600ms ease;
                                                        -o-transition:all 600ms ease;
                                                        -ms-transition:all 600ms ease;

                                                    `



                                        // STYLE MAIN NAV BAR MENU OPEN CLOSE CONTAINER
                                        // //////////////////////////////////////

                                            navBarPlateThreeMenuSide.style = `
                                            
                                                width:20%;
                                                height:50px;
                                                float:right;
                                                position:relative;
                                                transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;

                                            `

                                                navBarPlateThreeMenuButtonContainer.style = `
                                                
                                                    width:50px;
                                                    height:50px;
                                                    position:relative;
                                                    background:#FFFFFF;
                                                    border-radius:1000px;
                                                    box-shadow:0px 20px 20px -10px rgba(0,0,0,0.5);
                                                    transition:all 600ms ease;
                                                    -webkit-transition:all 600ms ease;
                                                    -moz-transition:all 600ms ease;
                                                    -o-transition:all 600ms ease;
                                                    -ms-transition:all 600ms ease;

                                                `

                                                    navBarPlateThreeMenuButtonActual.style = `
                                                    
                                                        width:35px;
                                                        height:35px;
                                                        top:0;
                                                        left:0;
                                                        right:0;
                                                        bottom:0;
                                                        margin:auto;
                                                        position:absolute;
                                                        background:#FFFFFF;
                                                        border-radius:1000px;
                                                        box-shadow:0px 15px 20px -10px rgba(0,0,0,0.7);
                                                        transition:all 600ms ease;
                                                        -webkit-transition:all 600ms ease;
                                                        -moz-transition:all 600ms ease;
                                                        -o-transition:all 600ms ease;
                                                        -ms-transition:all 600ms ease;

                                                    `




                                                        // STYLE BUTTON CLICKER CONTAINER
                                                        // //////////////////////

                                                            navBarPlateThreeMenuButtonClickerContainer.style = `
                                                            
                                                                width:100%;
                                                                height:100%;
                                                                top:0;
                                                                left:0;
                                                                right:0;
                                                                bottom:0;
                                                                margin:auto;
                                                                z-index:1;
                                                                position:absolute;
                                                                transition:all 600ms ease;
                                                                -webkit-transition:all 600ms ease;
                                                                -moz-transition:all 600ms ease;
                                                                -o-transition:all 600ms ease;
                                                                -ms-transition:all 600ms ease;

                                                            `

                                                                navBarPlateThreeMenuButtonClickerOn.style = `
                                                                
                                                                    width:100%;
                                                                    height:100%;
                                                                    top:0;
                                                                    left:0;
                                                                    right:0;
                                                                    bottom:0;
                                                                    margin:auto;
                                                                    cursor:pointer;
                                                                    z-index:1;
                                                                    position:absolute;
                                                                    transition:all 600ms ease;
                                                                    -webkit-transition:all 600ms ease;
                                                                    -moz-transition:all 600ms ease;
                                                                    -o-transition:all 600ms ease;
                                                                    -ms-transition:all 600ms ease; 

                                                                `

                                                                navBarPlateThreeMenuButtonClickerOff.style = `
                                                                
                                                                    width:100%;
                                                                    height:100%;
                                                                    top:0;
                                                                    left:0;
                                                                    right:0;
                                                                    bottom:0;
                                                                    margin:auto;
                                                                    cursor:pointer;
                                                                    z-index:0;
                                                                    position:absolute;
                                                                    transition:all 600ms ease;
                                                                    -webkit-transition:all 600ms ease;
                                                                    -moz-transition:all 600ms ease;
                                                                    -o-transition:all 600ms ease;
                                                                    -ms-transition:all 600ms ease;

                                                                `




                                                        // BUTTON CLICKER CONTAINER
                                                        // //////////////////////

                                                            navBarPlateThreeMenuButtonIconMover.style = `
                                                            
                                                                width:20px;
                                                                height:30px;
                                                                top:0;
                                                                left:0;
                                                                right:0;
                                                                bottom:0;
                                                                margin:auto;
                                                                z-index:0;
                                                                position:absolute;
                                                                background:#FFFFFF;
                                                                transition:all 600ms ease;
                                                                -webkit-transition:all 600ms ease;
                                                                -moz-transition:all 600ms ease;
                                                                -o-transition:all 600ms ease;
                                                                -ms-transition:all 600ms ease;

                                                            `

                                                                navBarPlateThreeMenuButtonIconLineOne.style = `
                                                                
                                                                    width:20px;
                                                                    height:3px;
                                                                    top:-15px;
                                                                    left:0;
                                                                    right:0;
                                                                    bottom:0;
                                                                    background:#2C2C2C;
                                                                    margin:auto;
                                                                    opacity:1;
                                                                    position:absolute;
                                                                    transform:rotateZ(0deg);
                                                                    transition:all 600ms ease;
                                                                    -webkit-transition:all 600ms ease;
                                                                    -moz-transition:all 600ms ease;
                                                                    -o-transition:all 600ms ease;
                                                                    -ms-transition:all 600ms ease;

                                                                `

                                                                navBarPlateThreeMenuButtonIconLineTwo.style = `
                                                                
                                                                    width:20px;
                                                                    height:3px;
                                                                    top:-1px;
                                                                    left:0;
                                                                    right:0;
                                                                    bottom:0;
                                                                    background:#2C2C2C;
                                                                    margin:auto;
                                                                    opacity:1;
                                                                    position:absolute;
                                                                    transform:rotateZ(0deg);
                                                                    transition:all 600ms ease;
                                                                    -webkit-transition:all 600ms ease;
                                                                    -moz-transition:all 600ms ease;
                                                                    -o-transition:all 600ms ease;
                                                                    -ms-transition:all 600ms ease;

                                                                `

                                                                navBarPlateThreeMenuButtonIconLineThree.style = `
                                                                
                                                                    width:20px;
                                                                    height:3px;
                                                                    top:13px;
                                                                    left:0;
                                                                    right:0;
                                                                    bottom:0;
                                                                    background:#2C2C2C;
                                                                    margin:auto;
                                                                    opacity:1;
                                                                    position:absolute;
                                                                    transform:rotateZ(0deg);
                                                                    transition:all 600ms ease;
                                                                    -webkit-transition:all 600ms ease;
                                                                    -moz-transition:all 600ms ease;
                                                                    -o-transition:all 600ms ease;
                                                                    -ms-transition:all 600ms ease;

                                                                `




                                                        // STYLE SIDE MENU CONTAINER
                                                        // //////////////////////

                                                            navBarPlateThreeSideMenuContainer.style = `
                                                            
                                                                width:250px;
                                                                top:50px;
                                                                left:0;
                                                                right:0;
                                                                bottom:0;
                                                                margin:auto;
                                                                opacity:0;
                                                                display:none;
                                                                position:relative;
                                                                transition:all 600ms ease;
                                                                -webkit-transition:all 600ms ease;
                                                                -moz-transition:all 600ms ease;
                                                                -o-transition:all 600ms ease;
                                                                -ms-transition:all 600ms ease;

                                                            `

                                                                // STYLE SIDE MENU MENU POINTER CONTAINER
                                                                // //////////////

                                                                    navBarPlateThreeSideMenPointerContainer.style = `
                                                                    
                                                                        width:100%;
                                                                        height:20px;
                                                                        left:0px;
                                                                        right:0px;
                                                                        margin:0px auto;
                                                                        position:rleative;
                                                                        transition:all 600ms ease;
                                                                        -webkit-transition:all 600ms ease;
                                                                        -moz-transition:all 600ms ease;
                                                                        -o-transition:all 600ms ease;
                                                                        -ms-transition:all 600ms ease;

                                                                    `

                                                                        navBarPlateThreeSideMenPointerActual.style = `
                                                                        
                                                                            width:20px;
                                                                            height:20px;
                                                                            top:0px;
                                                                            left:77px;
                                                                            right:0px;
                                                                            margin:0px auto;
                                                                            display:inline-block;
                                                                            position:relative;
                                                                            background:#FFFFFF;
                                                                            border-radius:5px;
                                                                            transform:rotateZ(45deg);
                                                                            transition:all 600ms ease;
                                                                            -webkit-transition:all 600ms ease;
                                                                            -moz-transition:all 600ms ease;
                                                                            -o-transition:all 600ms ease;
                                                                            -ms-transition:all 600ms ease;

                                                                        `



                                                                // STYLE SIDE MENU CONTENT CONTAINER ELEMENT
                                                                // //////////////

                                                                    navBarPlateThreeSideMenContentContainer.style = `
                                                                    
                                                                        width:100%;
                                                                        top:-12px;
                                                                        left:0:
                                                                        right:0;
                                                                        bottom:0;
                                                                        padding:20px 0px;
                                                                        position:relative;
                                                                        background:#FFFFFF;
                                                                        box-shadow:0px 20px 30px -10px rgba(0,0,0,0.5);
                                                                        border-radius:10px;
                                                                        transition:all 600ms ease;
                                                                        -webkit-transition:all 600ms ease;
                                                                        -moz-transition:all 600ms ease;
                                                                        -o-transition:all 600ms ease;
                                                                        -ms-transition:all 600ms ease;

                                                                    `

                                                                        navBarPlateThreeSideMenContentResizer.style = `
                                                                        
                                                                            width:80%;
                                                                            top:0;
                                                                            left:0;
                                                                            right:0;
                                                                            bottom:0;
                                                                            margin:auto;
                                                                            transition:all 600ms ease;
                                                                            -webkit-transition:all 600ms ease;
                                                                            -moz-transition:all 600ms ease;
                                                                            -o-transition:all 600ms ease;
                                                                            -ms-transition:all 600ms ease;

                                                                        `



























                        

                            // APPEND MAIN NAV BAR PLATE AND ELEMENTS =======
                            // //////////////////////////////////////////////

                                createNavBarCushion.appendChild(navBarPlateThreeMainContainer)

                                navBarPlateThreeMainContainer.appendChild(navBarPlateThreeMainElement)



                                    // APPEND MAIN NAV BAR CONTENT RESIZER --
                                    // //////////////////////////////////////

                                        navBarPlateThreeMainElement.appendChild(navBarPlateThreeMainElementResizer)



                                    // APPEND MAIN NAV BAR LOGO SIDE CONTAINER
                                    // //////////////////////////////////////

                                        navBarPlateThreeMainElementResizer.appendChild(navBarPlateThreeLogoSide)

                                            navBarPlateThreeLogoSide.appendChild(createNavBarPlateThreeLogoContainer)

                                                createNavBarPlateThreeLogoContainer.appendChild(createNavBarPlateThreeLogoActual)



                                    // APPEND MAIN NAV BAR MENU ITEMS SIDES =
                                    // //////////////////////////////////////

                                        navBarPlateThreeMainElementResizer.appendChild(navBarPlateThreeMenuSide)

                                            navBarPlateThreeMenuSide.appendChild(navBarPlateThreeMenuButtonContainer)

                                                navBarPlateThreeMenuButtonContainer.appendChild(navBarPlateThreeMenuButtonActual)




                                                        // APPEND BUTTON CLICKER CONTAINER
                                                        // //////////////////////

                                                            navBarPlateThreeMenuButtonActual.appendChild(navBarPlateThreeMenuButtonClickerContainer)

                                                                navBarPlateThreeMenuButtonClickerContainer.appendChild(navBarPlateThreeMenuButtonClickerOn)
                                                                navBarPlateThreeMenuButtonClickerContainer.appendChild(navBarPlateThreeMenuButtonClickerOff)




                                                        // APPEND BUTTON CLICKER CONTAINER
                                                        // //////////////////////

                                                            navBarPlateThreeMenuButtonActual.appendChild(navBarPlateThreeMenuButtonIconMover)

                                                                navBarPlateThreeMenuButtonIconMover.appendChild(navBarPlateThreeMenuButtonIconLineOne)
                                                                navBarPlateThreeMenuButtonIconMover.appendChild(navBarPlateThreeMenuButtonIconLineTwo)
                                                                navBarPlateThreeMenuButtonIconMover.appendChild(navBarPlateThreeMenuButtonIconLineThree)




                                                        // APPEND SIDE MENU CONTAINER
                                                        // //////////////////////

                                                            navBarPlateThreeMainContainer.appendChild(navBarPlateThreeSideMenuContainer)

                                                                // APPEND SIDE MENU MENU POINTER CONTAINER
                                                                // //////////////

                                                                    navBarPlateThreeSideMenuContainer.appendChild(navBarPlateThreeSideMenPointerContainer)

                                                                        navBarPlateThreeSideMenPointerContainer.appendChild(navBarPlateThreeSideMenPointerActual)



                                                                // APPEND SIDE MENU CONTENT CONTAINER ELEMENT
                                                                // //////////////

                                                                    navBarPlateThreeSideMenuContainer.appendChild(navBarPlateThreeSideMenContentContainer)

                                                                        navBarPlateThreeSideMenContentContainer.appendChild(navBarPlateThreeSideMenContentResizer)





























                        

                            // ADD EVENT LISTENERS FOR OBJECTS ==============
                            // //////////////////////////////////////////////

                                // EVENT LISTENERS FOR OPEN CLOSE MAIN MENU BUTTONS
                                // /////////////////////////////////////////

                                    // FOR OPEN MAIN MENU BUTTON CLICKER ---
                                    // /////////////////////////////////////

                                        navBarPlateThreeMenuButtonClickerOn.addEventListener("click", function () {

                                            console.log("MENU IS OPEN...")

                                            // SEND CLICKED BUTTON TO BACK =
                                            // /////////////////////////////

                                                navBarPlateThreeMenuButtonClickerOn.style = `
                                                
                                                    width:100%;
                                                    height:100%;
                                                    top:0;
                                                    left:0;
                                                    right:0;
                                                    bottom:0;
                                                    margin:auto;
                                                    cursor:pointer;
                                                    z-index:-1;
                                                    position:absolute;
                                                    transition:all 600ms ease;
                                                    -webkit-transition:all 600ms ease;
                                                    -moz-transition:all 600ms ease;
                                                    -o-transition:all 600ms ease;
                                                    -ms-transition:all 600ms ease;

                                                `

                                            // BRING UNCLICKED BUTTON TO FRONT
                                            // /////////////////////////////

                                                navBarPlateThreeMenuButtonClickerOff.style = `
                                                
                                                    width:100%;
                                                    height:100%;
                                                    top:0;
                                                    left:0;
                                                    right:0;
                                                    bottom:0;
                                                    margin:auto;
                                                    cursor:pointer;
                                                    z-index:1;
                                                    position:absolute;
                                                    transition:all 600ms ease;
                                                    -webkit-transition:all 600ms ease;
                                                    -moz-transition:all 600ms ease;
                                                    -o-transition:all 600ms ease;
                                                    -ms-transition:all 600ms ease;

                                                `

                                            // CHANGE MENU ICON LINES TO OPENED
                                            // /////////////////////////////

                                                navBarPlateThreeMenuButtonIconLineOne.style = `
                                                
                                                    width:20px;
                                                    height:3px;
                                                    top:-1px;
                                                    left:0;
                                                    right:0;
                                                    bottom:0;
                                                    background:#2C2C2C;
                                                    margin:auto;
                                                    opacity:1;
                                                    position:absolute;
                                                    transform:rotateZ(45deg);
                                                    transition:all 600ms ease;
                                                    -webkit-transition:all 600ms ease;
                                                    -moz-transition:all 600ms ease;
                                                    -o-transition:all 600ms ease;
                                                    -ms-transition:all 600ms ease;

                                                `

                                                navBarPlateThreeMenuButtonIconLineTwo.style = `
                                                
                                                    width:20px;
                                                    height:3px;
                                                    top:-1px;
                                                    left:0;
                                                    right:0;
                                                    bottom:0;
                                                    background:#2C2C2C;
                                                    margin:auto;
                                                    opacity:0;
                                                    position:absolute;
                                                    transform:rotateZ(0deg);
                                                    transition:all 600ms ease;
                                                    -webkit-transition:all 600ms ease;
                                                    -moz-transition:all 600ms ease;
                                                    -o-transition:all 600ms ease;
                                                    -ms-transition:all 600ms ease;

                                                `

                                                navBarPlateThreeMenuButtonIconLineThree.style = `
                                                
                                                    width:20px;
                                                    height:3px;
                                                    top:-1px;
                                                    left:0;
                                                    right:0;
                                                    bottom:0;
                                                    background:#2C2C2C;
                                                    margin:auto;
                                                    opacity:1;
                                                    position:absolute;
                                                    transform:rotateZ(-45deg);
                                                    transition:all 600ms ease;
                                                    -webkit-transition:all 600ms ease;
                                                    -moz-transition:all 600ms ease;
                                                    -o-transition:all 600ms ease;
                                                    -ms-transition:all 600ms ease;

                                                `

                                            // CHANGE MENU CONTAINER LINES TO OPENED
                                            // /////////////////////////////

                                                navBarPlateThreeSideMenuContainer.style = `
                                                
                                                    width:250px;
                                                    top:50px;
                                                    left:0;
                                                    right:0;
                                                    bottom:0;
                                                    margin:auto;
                                                    opacity:0;
                                                    display:block;
                                                    position:relative;
                                                    transition:all 600ms ease;
                                                    -webkit-transition:all 600ms ease;
                                                    -moz-transition:all 600ms ease;
                                                    -o-transition:all 600ms ease;
                                                    -ms-transition:all 600ms ease;

                                                `

                                                    // THEN FADE MENU IN xxx
                                                    // /////////////////////

                                                        setTimeout(() => {

                                                            navBarPlateThreeSideMenuContainer.style = `
                                                            
                                                                width:250px;
                                                                top:100px;
                                                                left:0;
                                                                right:0;
                                                                bottom:0;
                                                                margin:auto;
                                                                opacity:1;
                                                                display:block;
                                                                position:relative;
                                                                transition:all 600ms ease;
                                                                -webkit-transition:all 600ms ease;
                                                                -moz-transition:all 600ms ease;
                                                                -o-transition:all 600ms ease;
                                                                -ms-transition:all 600ms ease;
    
                                                            `


                                                        }, 50)
                                                

                                        })

                                    // FOR OPEN MAIN MENU BUTTON CLICKER ---
                                    // /////////////////////////////////////

                                        navBarPlateThreeMenuButtonClickerOff.addEventListener("click", function () {

                                            console.log("MENU IS CLOSED...")

                                            // SEND CLICKED BUTTON TO BACK =
                                            // /////////////////////////////

                                                navBarPlateThreeMenuButtonClickerOff.style = `
                                                
                                                    width:100%;
                                                    height:100%;
                                                    top:0;
                                                    left:0;
                                                    right:0;
                                                    bottom:0;
                                                    margin:auto;
                                                    cursor:pointer;
                                                    z-index:-1;
                                                    position:absolute;
                                                    transition:all 600ms ease;
                                                    -webkit-transition:all 600ms ease;
                                                    -moz-transition:all 600ms ease;
                                                    -o-transition:all 600ms ease;
                                                    -ms-transition:all 600ms ease;

                                                `

                                            // BRING UNCLICKED BUTTON TO FRONT
                                            // /////////////////////////////

                                                navBarPlateThreeMenuButtonClickerOn.style = `
                                                
                                                    width:100%;
                                                    height:100%;
                                                    top:0;
                                                    left:0;
                                                    right:0;
                                                    bottom:0;
                                                    margin:auto;
                                                    cursor:pointer;
                                                    z-index:1;
                                                    position:absolute;
                                                    transition:all 600ms ease;
                                                    -webkit-transition:all 600ms ease;
                                                    -moz-transition:all 600ms ease;
                                                    -o-transition:all 600ms ease;
                                                    -ms-transition:all 600ms ease;

                                                `

                                            // CHANGE MENU ICON LINES TO DEFAULT
                                            // /////////////////////////////

                                                navBarPlateThreeMenuButtonIconLineOne.style = `
                                                
                                                    width:20px;
                                                    height:3px;
                                                    top:-15px;
                                                    left:0;
                                                    right:0;
                                                    bottom:0;
                                                    background:#2C2C2C;
                                                    margin:auto;
                                                    opacity:1;
                                                    position:absolute;
                                                    transform:rotateZ(0deg);
                                                    transition:all 600ms ease;
                                                    -webkit-transition:all 600ms ease;
                                                    -moz-transition:all 600ms ease;
                                                    -o-transition:all 600ms ease;
                                                    -ms-transition:all 600ms ease;

                                                `

                                                navBarPlateThreeMenuButtonIconLineTwo.style = `
                                                
                                                    width:20px;
                                                    height:3px;
                                                    top:-1px;
                                                    left:0;
                                                    right:0;
                                                    bottom:0;
                                                    background:#2C2C2C;
                                                    margin:auto;
                                                    opacity:1;
                                                    position:absolute;
                                                    transform:rotateZ(0deg);
                                                    transition:all 600ms ease;
                                                    -webkit-transition:all 600ms ease;
                                                    -moz-transition:all 600ms ease;
                                                    -o-transition:all 600ms ease;
                                                    -ms-transition:all 600ms ease;

                                                `

                                                navBarPlateThreeMenuButtonIconLineThree.style = `
                                                
                                                    width:20px;
                                                    height:3px;
                                                    top:13px;
                                                    left:0;
                                                    right:0;
                                                    bottom:0;
                                                    background:#2C2C2C;
                                                    margin:auto;
                                                    opacity:1;
                                                    position:absolute;
                                                    transform:rotateZ(0deg);
                                                    transition:all 600ms ease;
                                                    -webkit-transition:all 600ms ease;
                                                    -moz-transition:all 600ms ease;
                                                    -o-transition:all 600ms ease;
                                                    -ms-transition:all 600ms ease;

                                                `

                                            // CHANGE MENU CONTAINER LINES TO DEFAULT
                                            // /////////////////////////////

                                                // FADE OUT MENU BLOCK -----
                                                // /////////////////////////

                                                    navBarPlateThreeSideMenuContainer.style = `
                                                    
                                                        width:250px;
                                                        top:50px;
                                                        left:0;
                                                        right:0;
                                                        bottom:0;
                                                        margin:auto;
                                                        opacity:0;
                                                        display:block;
                                                        position:relative;
                                                        transition:all 600ms ease;
                                                        -webkit-transition:all 600ms ease;
                                                        -moz-transition:all 600ms ease;
                                                        -o-transition:all 600ms ease;
                                                        -ms-transition:all 600ms ease;

                                                    `

                                                        // THEN KILL MENU BLOCK
                                                        // /////////////////

                                                            setTimeout(() => {

                                                                navBarPlateThreeSideMenuContainer.style = `
                                                                
                                                                    width:250px;
                                                                    top:50px;
                                                                    left:0;
                                                                    right:0;
                                                                    bottom:0;
                                                                    margin:auto;
                                                                    opacity:0;
                                                                    display:none;
                                                                    position:relative;
                                                                    transition:all 600ms ease;
                                                                    -webkit-transition:all 600ms ease;
                                                                    -moz-transition:all 600ms ease;
                                                                    -o-transition:all 600ms ease;
                                                                    -ms-transition:all 600ms ease;
    
                                                                `


                                                            }, 200)


                                        })





























                        

                            // CREATE SIDE MENU LIST ITEMS ==================
                            // //////////////////////////////////////////////

                                // RUN LOOP TO RETRIEVE ELEMENTS xxxxxxxxxxxx
                                // //////////////////////////////////////////

                                    var retrievedMenuItemElements = []
                                    var getListItemsObjects = []

                                    for ( sideMenuItemCounter = 0; sideMenuItemCounter < 5; sideMenuItemCounter ++ ) {

                                        // CHECK IF ELEMENT IS NULL OR UNDEFINED
                                        // //////////////////////////////////

                                            if ( 
                                                
                                                    storeNavBarItems[sideMenuItemCounter] == null || 
                                                    storeNavBarItems[sideMenuItemCounter] == undefined
                                                
                                                ) 
                                                
                                            {

                                            }

                                        // AND IF NOT NULL OR UNDEFINED THEN PASS
                                        // //////////////////////////////////

                                            else {

                                                // PUSH ACCAPTED ELEMENTS INTO ELEMENTS ARRAY
                                                // //////////////////////////

                                                    retrievedMenuItemElements.push(storeNavBarItems[sideMenuItemCounter])

                                            }

                                    }






                                // RUN LOOP TO CREATE ELEMENTS xxxxxxxxxxxxxx
                                // //////////////////////////////////////////

                                    for ( menuItemsPopCounter = 0; menuItemsPopCounter < retrievedMenuItemElements.length; menuItemsPopCounter++ ) {












                                        // CREATE ELEMENTS ------------------
                                        // //////////////////////////////////

                                            var navBarPlateThreeSideMenListItemContainer = document.createElement("div")
                                            navBarPlateThreeSideMenListItemContainer.className = `navBarThreePlateSideMenuListItemContainer`

                                                var navBarPlateThreeSideMenListItemHighlightBlockContainer = document.createElement("div")
                                                navBarPlateThreeSideMenListItemHighlightBlockContainer.className = `navBarThreePlateSideMenuListItemHighlightBlock${classNumberMapper[menuItemsPopCounter]}Container`

                                                    var navBarPlateThreeSideMenListItemTextContainer = document.createElement("div")
                                                    navBarPlateThreeSideMenListItemTextContainer.className = `navBarThreePlateSideMenuListItemTextContainer`





                                            var navBarPlateThreeSideMenListItemDividerLineContainer = document.createElement("div")
                                            navBarPlateThreeSideMenListItemDividerLineContainer.className = `navBarThreePlateSideMenuListItemDividerLineContainer`

                                                var navBarPlateThreeSideMenListItemDividerLineActual = document.createElement("div")
                                                navBarPlateThreeSideMenListItemDividerLineActual.className = `navBarThreePlateSideMenuListItemDividerLineActual`
        
        
        
        
        
        
        
        
        
        
        
                                        // STYLE ELEMENTS -------------------
                                        // //////////////////////////////////

                                            navBarPlateThreeSideMenListItemContainer.style = `
                                            
                                                width:100%;
                                                position:relative;
                                                transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;

                                            `

                                                navBarPlateThreeSideMenListItemHighlightBlockContainer.style = `
                                                
                                                    width:100%;
                                                    cursor:pointer;
                                                    padding:20px 0px;
                                                    position:relative;
                                                    background:rgba(239, 239, 239, 0.0);
                                                    border-radius:6px;
                                                    transition:all 600ms ease;
                                                    -webkit-transition:all 600ms ease;
                                                    -moz-transition:all 600ms ease;
                                                    -o-transition:all 600ms ease;
                                                    -ms-transition:all 600ms ease;

                                                `

                                                    navBarPlateThreeSideMenListItemTextContainer.style = `
                                                    
                                                        width:80%;
                                                        top:0;
                                                        left:0;
                                                        right:0;
                                                        bottom:0;
                                                        color:#3f3f3f;
                                                        margin:auto;
                                                        position:absolute;
                                                        font-size:15px;
                                                        font-weight:700;
                                                        line-height:40px;
                                                        font-family:arial, sans-serif;
                                                        letter-spacing:3px;
                                                        transition:all 600ms ease;
                                                        -webkit-transition:all 600ms ease;
                                                        -moz-transition:all 600ms ease;
                                                        -o-transition:all 600ms ease;
                                                        -ms-transition:all 600ms ease;

                                                    `





                                            navBarPlateThreeSideMenListItemDividerLineContainer.style = `
                                            
                                                width:100%;
                                                height:20px;
                                                top:0;
                                                left:0;
                                                right:0;
                                                bottom:0;
                                                margin:auto;
                                                position:relative;
                                                transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;

                                            `

                                                navBarPlateThreeSideMenListItemDividerLineActual.style = `
                                                
                                                    width:60%;
                                                    height:2px;
                                                    top:0;
                                                    left:0;
                                                    right:0;
                                                    bottom:0;
                                                    margin:auto;
                                                    position:absolute;
                                                    background:rgba(0,0,0,0.1);
                                                    transition:all 600ms ease;
                                                    -webkit-transition:all 600ms ease;
                                                    -moz-transition:all 600ms ease;
                                                    -o-transition:all 600ms ease;
                                                    -ms-transition:all 600ms ease;

                                                `
        
        
        
        
        
        
        
        
        
        
        
                                        // SET TEXT TO ELEMENTS -------------
                                        // //////////////////////////////////

                                            navBarPlateThreeSideMenListItemTextContainer.textContent = `${storeNavBarItems[menuItemsPopCounter]}`
        
        
        
        
        
        
        
        
        
        
        
                                        // APPEND ELEMENTS ------------------
                                        // //////////////////////////////////

                                            navBarPlateThreeSideMenContentResizer.appendChild(navBarPlateThreeSideMenListItemContainer)

                                                navBarPlateThreeSideMenListItemContainer.appendChild(navBarPlateThreeSideMenListItemHighlightBlockContainer)

                                                    navBarPlateThreeSideMenListItemHighlightBlockContainer.appendChild(navBarPlateThreeSideMenListItemTextContainer)


                                            
                                            

                                                        // CHECK IF COUNTER NUMBER IS AT END POINT
                                                        // //////////////////

                                                            // IF COUNTER NUMBER IS AT END
                                                            // //////////////

                                                                if ( menuItemsPopCounter == (retrievedMenuItemElements.length - 1) ) {

                                                                    

                                                                }

                                                            // IF COUNTER NUMBER IS AT END
                                                            // //////////////

                                                                else {

                                                                    navBarPlateThreeSideMenContentResizer.appendChild(navBarPlateThreeSideMenListItemDividerLineContainer)
    
                                                                        navBarPlateThreeSideMenListItemDividerLineContainer.appendChild(navBarPlateThreeSideMenListItemDividerLineActual)

                                                                }
        
        
        
        
        
        
        
        
        
        
        
                                        // PUSH ACCAPTED ELEMENTS INTO ELEMENTS ARRAY
                                        // //////////////////////////////////
                                                
                                            getListItemsObjects.push(document.querySelector(`.navBarThreePlateSideMenuListItemHighlightBlock${classNumberMapper[menuItemsPopCounter]}Container`))



                                    }






                                // RUN LOOP TO CREATE EVENTS FOR ELEMENTS xxx
                                // //////////////////////////////////////////

                                    getListItemsObjects.forEach((elementRunner) => {





                                        // GET INDEX NUMBER FOR SELECTED OBJECT
                                        // //////////////////////////////

                                            var getIndexOfSelectedObject = getListItemsObjects.indexOf(elementRunner)

                                            var getProposedLink = storeNavBarItemLinks[getIndexOfSelectedObject]





                                        // EVENTS FOR HOVER EFFECTS xxxxx
                                        // //////////////////////////////

                                            // MOUSE OVER EFFECTS =======
                                            // //////////////////////////

                                                elementRunner.addEventListener("mouseover", function () {

                                                    // SIWTCH ON BACKGROUND HIGHLIGHTER
                                                    // //////////////////

                                                        elementRunner.style = `
                                                        
                                                            width:100%;
                                                            cursor:pointer;
                                                            padding:20px 0px;
                                                            position:relative;
                                                            background:rgba(239, 239, 239, 1.0);
                                                            border-radius:6px;
                                                            transition:all 600ms ease;
                                                            -webkit-transition:all 600ms ease;
                                                            -moz-transition:all 600ms ease;
                                                            -o-transition:all 600ms ease;
                                                            -ms-transition:all 600ms ease;

                                                        `

                                                })

                                            // MOUSE OUT EFFECTS ========
                                            // //////////////////////////

                                                elementRunner.addEventListener("mouseout", function () {

                                                    // SIWTCH OFF BACKGROUND HIGHLIGHTER
                                                    // //////////////////

                                                        elementRunner.style = `
                                                        
                                                            width:100%;
                                                            cursor:pointer;
                                                            padding:20px 0px;
                                                            position:relative;
                                                            background:rgba(239, 239, 239, 0.0);
                                                            border-radius:6px;
                                                            transition:all 600ms ease;
                                                            -webkit-transition:all 600ms ease;
                                                            -moz-transition:all 600ms ease;
                                                            -o-transition:all 600ms ease;
                                                            -ms-transition:all 600ms ease;

                                                        `

                                                })





                                        // EVENTS FOR HOVER EFFECTS xxxxx
                                        // //////////////////////////////

                                            elementRunner.addEventListener("click", function () {

                                                window.open(`${getProposedLink}`, `_blank`)

                                            })
                                        
                                    })



















                    }





                // CREATE NAV BAR FOUR ACTUAL -------------------------------
                // //////////////////////////////////////////////////////////

                    function createNavBarFourMainPlate (cushionNumber) {

                        // GET NAV BAR CUSHION xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        // //////////////////////////////////////////////////

                            var createNavBarCushion = document.querySelector(`.navBar${cushionNumber}`)

                        // CREATE NAV BAR FOUR ELEMENTS xxxxxxxxxxxxxxxxxxxxx
                        // //////////////////////////////////////////////////

                            // CREATE MAIN NAV BAR PLATE AND ELEMENTS =======
                            // //////////////////////////////////////////////

                                var navBarPlateFourMainContainer = document.createElement("div")
                                navBarPlateFourMainContainer.className = `navBarFourMainContainer`





                            // CREATE MAIN NAV BAR PLATE ELEMENT ============ 
                            // //////////////////////////////////////////////

                                var navBarPlateFourMainElement = document.createElement("div")
                                navBarPlateFourMainElement.className = `navBarFourPlateElementContainer`












                            // CREATE MAIN NAV BAR PLATE LOGO AND MENU BUTTON CONTAINER 
                            // //////////////////////////////////////////////

                                var navBarPlateFourLogoSideContainer = document.createElement("div")
                                navBarPlateFourLogoSideContainer.className = `navBarFourPlateElementLogoSideContainer`

                                    // LOGO ACTUAL CONTAINER -------------
                                    // //////////////////////////////////

                                        var navBarPlateFourLogoActual = document.createElement("div")
                                        navBarPlateFourLogoActual.className = `navBarFourPlateElementLogoActual`

                                var navBarPlateFourMenuButtonSideContainer = document.createElement("div")
                                navBarPlateFourMenuButtonSideContainer.className = `navBarFourPlateElementMenuButtonSideContainer`

                                    // CLICKERS CONTAINER ---------------
                                    // //////////////////////////////////

                                        var navBarPlateFourMenuButtonSideClickerContainer = document.createElement("div")
                                        navBarPlateFourMenuButtonSideClickerContainer.className = `navBarFourPlateElementMenuButtonSideClickerContainer`

                                            var navBarPlateFourMenuButtonSideClickerOn = document.createElement("div")
                                            navBarPlateFourMenuButtonSideClickerOn.className = `navBarFourPlateElementMenuButtonSideClickerOn`

                                            var navBarPlateFourMenuButtonSideClickerOff = document.createElement("div")
                                            navBarPlateFourMenuButtonSideClickerOff.className = `navBarFourPlateElementMenuButtonSideClickerOff`

                                    // DIVIDER LINE CONTAINER -----------
                                    // //////////////////////////////////

                                        var navBarPlateFourMenuButtonSideDividerLineContainer = document.createElement("div")
                                        navBarPlateFourMenuButtonSideDividerLineContainer.className = `navBarFourPlateElementMenuButtonSideDividerLineContainer`

                                        var navBarPlateFourMenuButtonSideDividerLineActual = document.createElement("div")
                                        navBarPlateFourMenuButtonSideDividerLineActual.className = `navBarFourPlateElementMenuButtonSideDividerLineActual`

                                    // MENU BUTTON CONTAINER ------------
                                    // //////////////////////////////////

                                        var navBarPlateFourMenuButtonSideMenuButtonIconMover = document.createElement("div")
                                        navBarPlateFourMenuButtonSideMenuButtonIconMover.className = `navBarFourPlateElementMenuButtonSideMenuButtonIconMover`

                                            var navBarPlateFourMenuButtonSideMenuButtonIconLineOne = document.createElement("div")
                                            navBarPlateFourMenuButtonSideMenuButtonIconLineOne.className = `navBarFourPlateElementMenuButtonSideMenuButtonIconLineOne`

                                            var navBarPlateFourMenuButtonSideMenuButtonIconLineTwo = document.createElement("div")
                                            navBarPlateFourMenuButtonSideMenuButtonIconLineTwo.className = `navBarFourPlateElementMenuButtonSideMenuButtonIconLineTwo`

                                            var navBarPlateFourMenuButtonSideMenuButtonIconLineThree = document.createElement("div")
                                            navBarPlateFourMenuButtonSideMenuButtonIconLineThree.className = `navBarFourPlateElementMenuButtonSideMenuButtonIconLineThree`






                                





                            // CREATE SIDE NAV BAR PLATE ====================
                            // //////////////////////////////////////////////

                                var navBarPlateFourSideMenuMainContainer = document.createElement("div")
                                navBarPlateFourSideMenuMainContainer.className = `navBarFourPlateSideMenuMainContainer`



























                        

                            // STYLE MAIN NAV BAR PLATE AND ELEMENTS ========
                            // //////////////////////////////////////////////

                                // STYLE MAIN NAV BAR ELEMENTS xxxxxxxxxxxxxx
                                // //////////////////////////////////////////

                                    navBarPlateFourMainContainer.style = `
                                    
                                        width:200px;
                                        height:50px;
                                        top:0;
                                        left:0;
                                        right:0;
                                        margin:auto;
                                        z-index:2;
                                        position:fixed;
                                        box-shadow:0px 30px 30px -10px rgba(0,0,0,0.5);
                                        transition:all 600ms ease;
                                        -webkit-transition:all 600ms ease;
                                        -moz-transition:all 600ms ease;
                                        -o-transition:all 600ms ease;
                                        -ms-transition:all 600ms ease;

                                    `

                                // STYLE MAIN NAV BAR PLATE ELEMENT xxxxxxxxx
                                // //////////////////////////////////////////

                                    navBarPlateFourMainElement.style = `
                                    
                                        width:100%;
                                        height:50px;
                                        top:20px;
                                        left:0px;
                                        right:0;
                                        margin:0px auto;
                                        position:relative;
                                        transition:all 600ms ease;
                                        -webkit-transition:all 600ms ease;
                                        -moz-transition:all 600ms ease;
                                        -o-transition:all 600ms ease;
                                        -ms-transition:all 600ms ease;

                                    `

                                        // STYLE MAIN NAV BAR PLATE ELEMENT SIDE ELEMNTS
                                        // //////////////////////////////////

                                            navBarPlateFourLogoSideContainer.style = `
                                            
                                                width:150px;
                                                height:50px;
                                                top:0;
                                                left:0;
                                                margin:0px auto;
                                                display:inline-block;
                                                position:relative;
                                                background:#FFFFFF;
                                                border-radius:10px 0px 0px 10px;
                                                transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;

                                            `

                                                // STYLE LOGO ACTUAL CONTAINER
                                                // //////////////////////////

                                                    navBarPlateFourLogoActual.style = `
                                                    
                                                        width:90%;
                                                        height:40px;
                                                        top:0;
                                                        left:0;
                                                        right:0;
                                                        bottom:0;
                                                        margin:auto;
                                                        position:absolute;
                                                        background:#2C2C2C;
                                                        border-radius:6px;
                                                        transition:all 600ms ease;
                                                        -webkit-transition:all 600ms ease;
                                                        -moz-transition:all 600ms ease;
                                                        -o-transition:all 600ms ease;
                                                        -ms-transition:all 600ms ease;

                                                    `



                                            navBarPlateFourMenuButtonSideContainer.style = `
                                            
                                                width:50px;
                                                height:50px;
                                                top:0;
                                                right:0;
                                                margin:0px auto;
                                                display:inline-block;
                                                position:relative;
                                                background:#f1f1f1;
                                                border-radius:0px 10px 10px 0px;
                                                transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;

                                            `

                                                // STYLE CLICKERS CONTAINER -
                                                // //////////////////////////

                                                    navBarPlateFourMenuButtonSideClickerContainer.style = `
                                                    
                                                        width:100%;
                                                        height:100%;
                                                        z-index:1;
                                                        margin:auto;
                                                        background:rgba(0,0,0,0.00);
                                                        position:absolute;
                                                        transition:all 600ms ease;
                                                        -webkit-transition:all 600ms ease;
                                                        -moz-transition:all 600ms ease;
                                                        -o-transition:all 600ms ease;
                                                        -ms-transition:all 600ms ease;

                                                    `
                                                        navBarPlateFourMenuButtonSideClickerOn.style = `
                                                        
                                                            width:100%;
                                                            height:100%;
                                                            cursor:pointer;
                                                            margin:0px auto;
                                                            z-index:1;
                                                            position:absolute;
                                                            transition:all 600ms ease;
                                                            -webkit-transition:all 600ms ease;
                                                            -moz-transition:all 600ms ease;
                                                            -o-transition:all 600ms ease;
                                                            -ms-transition:all 600ms ease;

                                                        `
                                                        navBarPlateFourMenuButtonSideClickerOff.style = `
                                                        
                                                            width:100%;
                                                            height:100%;
                                                            cursor:pointer;
                                                            margin:0px auto;
                                                            z-index:-1;
                                                            position:absolute;
                                                            transition:all 600ms ease;
                                                            -webkit-transition:all 600ms ease;
                                                            -moz-transition:all 600ms ease;
                                                            -o-transition:all 600ms ease;
                                                            -ms-transition:all 600ms ease;

                                                        `


                                                // STYLE DIVIDER LINE CONTAINER
                                                // //////////////////////////

                                                    navBarPlateFourMenuButtonSideDividerLineContainer.style = `
                                                    
                                                        width:3px;
                                                        height:50%;
                                                        top:0;
                                                        left:0;
                                                        bottom:0;
                                                        margin:auto;
                                                        position:absolute;
                                                        transition:all 600ms ease;
                                                        -webkit-transition:all 600ms ease;
                                                        -moz-transition:all 600ms ease;
                                                        -o-transition:all 600ms ease;
                                                        -ms-transition:all 600ms ease;

                                                    `

                                                        navBarPlateFourMenuButtonSideDividerLineActual.style = `
                                                        
                                                            width:100%;
                                                            height:100%;
                                                            top:0;
                                                            left:0;
                                                            right:0;
                                                            bottom:0;
                                                            margin:auto;
                                                            position:absolute;
                                                            background:rgba(0,0,0,0.2);
                                                            transition:all 600ms ease;
                                                            -webkit-transition:all 600ms ease;
                                                            -moz-transition:all 600ms ease;
                                                            -o-transition:all 600ms ease;
                                                            -ms-transition:all 600ms ease;

                                                        `

                                                // STYLE MENU BUTTON CONTAINER
                                                // //////////////////////////

                                                    navBarPlateFourMenuButtonSideMenuButtonIconMover.style = `
                                                    
                                                        width:20px;
                                                        height:60%;
                                                        top:0;
                                                        left:0;
                                                        right:0;
                                                        bottom:0;
                                                        z-index:0;
                                                        margin:auto;
                                                        position:absolute;
                                                        transition:all 600ms ease;
                                                        -webkit-transition:all 600ms ease;
                                                        -moz-transition:all 600ms ease;
                                                        -o-transition:all 600ms ease;
                                                        -ms-transition:all 600ms ease;

                                                    `

                                                        navBarPlateFourMenuButtonSideMenuButtonIconLineOne.style = `
                                                        
                                                            width:100%;
                                                            height:3px;
                                                            top:-14px;
                                                            bottom:0;
                                                            margin:auto;
                                                            opacity:1;
                                                            position:absolute;
                                                            transform:rotateZ(0deg);
                                                            background:#2C2C2C;
                                                            transition:all 600ms ease;
                                                            -webkit-transition:all 600ms ease;
                                                            -moz-transition:all 600ms ease;
                                                            -o-transition:all 600ms ease;
                                                            -ms-transition:all 600ms ease;

                                                        `

                                                        navBarPlateFourMenuButtonSideMenuButtonIconLineTwo.style = `
                                                        
                                                            width:100%;
                                                            height:3px;
                                                            top:0px;
                                                            bottom:0;
                                                            margin:auto;
                                                            opacity:1;
                                                            position:absolute;
                                                            transform:rotateZ(0deg);
                                                            background:#2C2C2C;
                                                            transition:all 600ms ease;
                                                            -webkit-transition:all 600ms ease;
                                                            -moz-transition:all 600ms ease;
                                                            -o-transition:all 600ms ease;
                                                            -ms-transition:all 600ms ease;

                                                        `

                                                        navBarPlateFourMenuButtonSideMenuButtonIconLineThree.style = `
                                                        
                                                            width:100%;
                                                            height:3px;
                                                            top:14px;
                                                            bottom:0;
                                                            margin:auto;
                                                            opacity:1;
                                                            position:absolute;
                                                            transform:rotateZ(0deg);
                                                            background:#2C2C2C;
                                                            transition:all 600ms ease;
                                                            -o-transition:all 600ms ease;
                                                            -ms-transition:all 600ms ease;
                                                            -moz-transition:all 600ms ease;
                                                            -webkit-transition:all 600ms ease;

                                                        `






                                





                                // CREATE SIDE NAV BAR PLATE xxxxxxxxxxxxxxxx
                                // //////////////////////////////////////////

                                    navBarPlateFourSideMenuMainContainer.style = `
                                    
                                        top:20px;
                                        top:100px;
                                        left:-50px;
                                        opacity:0;
                                        display:none;
                                        padding:5px 5px;
                                        position:fixed;
                                        background:#FFFFFF;
                                        border-radius:8px;
                                        transition:all 600ms ease;
                                        -o-transition:all 600ms ease;
                                        -ms-transition:all 600ms ease;
                                        -moz-transition:all 600ms ease;
                                        -webkit-transition:all 600ms ease;

                                    `





























                        

                            // ADD EVENT LISTENERS FOR MENU OPEN CLOSE CLICKERS
                            // //////////////////////////////////////////////

                                // FOR MENU OPEN CLICKER --------------------
                                // //////////////////////////////////////////

                                    navBarPlateFourMenuButtonSideClickerOn.addEventListener("click", function () {

                                        // CHANGE ICON LINES TO READY CLOSE x
                                        // //////////////////////////////////

                                            navBarPlateFourMenuButtonSideMenuButtonIconLineOne.style = `
                                            
                                                width:100%;
                                                height:3px;
                                                top:0px;
                                                bottom:0;
                                                margin:auto;
                                                opacity:1;
                                                position:absolute;
                                                transform:rotateZ(45deg);
                                                background:#2C2C2C;
                                                transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;

                                            `

                                            navBarPlateFourMenuButtonSideMenuButtonIconLineTwo.style = `
                                            
                                                width:100%;
                                                height:3px;
                                                top:0px;
                                                bottom:0;
                                                margin:auto;
                                                opacity:0;
                                                position:absolute;
                                                transform:rotateZ(0deg);
                                                background:#2C2C2C;
                                                transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;

                                            `

                                            navBarPlateFourMenuButtonSideMenuButtonIconLineThree.style = `
                                            
                                                width:100%;
                                                height:3px;
                                                top:0px;
                                                bottom:0;
                                                margin:auto;
                                                opacity:1;
                                                position:absolute;
                                                transform:rotateZ(-45deg);
                                                background:#2C2C2C;
                                                transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;

                                            `

                                        // SEND OPEN MENU CLICKER TO BACK xxx
                                        // //////////////////////////////////

                                            navBarPlateFourMenuButtonSideClickerOn.style = `
                                            
                                                width:100%;
                                                height:100%;
                                                cursor:pointer;
                                                margin:0px auto;
                                                z-index:-1;
                                                position:absolute;
                                                transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;

                                            `

                                        // SEND CLOSE MENU CLICKER TO FRONT x
                                        // //////////////////////////////////

                                            navBarPlateFourMenuButtonSideClickerOff.style = `
                                            
                                                width:100%;
                                                height:100%;
                                                cursor:pointer;
                                                margin:0px auto;
                                                z-index:1;
                                                position:absolute;
                                                transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;

                                            `

                                        // OPEN SIDE MENU xxxxxxxxxxxxxxxxxxx
                                        // //////////////////////////////////

                                            navBarPlateFourSideMenuMainContainer.style = `
                                            
                                                top:20px;
                                                top:100px;
                                                left:-50px;
                                                opacity:0;
                                                display:block;
                                                padding:5px 5px;
                                                position:fixed;
                                                background:#FFFFFF;
                                                border-radius:8px;
                                                transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;

                                            `

                                                // THEN FADE SIDE MNEU IN ===
                                                // //////////////////////////

                                                    setTimeout(() => {

                                                        navBarPlateFourSideMenuMainContainer.style = `
                                            
                                                            top:20px;
                                                            top:100px;
                                                            left:10px;
                                                            opacity:1;
                                                            display:block;
                                                            padding:5px 5px;
                                                            position:fixed;
                                                            background:#FFFFFF;
                                                            border-radius:8px;
                                                            transition:all 600ms ease;
                                                            -o-transition:all 600ms ease;
                                                            -ms-transition:all 600ms ease;
                                                            -moz-transition:all 600ms ease;
                                                            -webkit-transition:all 600ms ease;

                                                        `

                                                    }, 20)

                                        
                                    })





                                // FOR MENU CLOSE CLICKER -------------------
                                // //////////////////////////////////////////

                                    navBarPlateFourMenuButtonSideClickerOff.addEventListener("click", function () {

                                        // CHANGE ICON LINES TO READY OPEN xx
                                        // //////////////////////////////////

                                            navBarPlateFourMenuButtonSideMenuButtonIconLineOne.style = `
                                            
                                                width:100%;
                                                height:3px;
                                                top:-14px;
                                                bottom:0;
                                                margin:auto;
                                                opacity:1;
                                                position:absolute;
                                                transform:rotateZ(0deg);
                                                background:#2C2C2C;
                                                transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;

                                            `

                                            navBarPlateFourMenuButtonSideMenuButtonIconLineTwo.style = `
                                            
                                                width:100%;
                                                height:3px;
                                                top:0px;
                                                bottom:0;
                                                margin:auto;
                                                opacity:1;
                                                position:absolute;
                                                transform:rotateZ(0deg);
                                                background:#2C2C2C;
                                                transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;

                                            `

                                            navBarPlateFourMenuButtonSideMenuButtonIconLineThree.style = `
                                            
                                                width:100%;
                                                height:3px;
                                                top:14px;
                                                bottom:0;
                                                margin:auto;
                                                opacity:1;
                                                position:absolute;
                                                transform:rotateZ(0deg);
                                                background:#2C2C2C;
                                                transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;

                                            `

                                        // SEND CLOSE MENU CLICKER TO BACK xxx
                                        // //////////////////////////////////

                                            navBarPlateFourMenuButtonSideClickerOff.style = `
                                            
                                                width:100%;
                                                height:100%;
                                                cursor:pointer;
                                                margin:0px auto;
                                                z-index:-1;
                                                position:absolute;
                                                transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;

                                            `

                                        // SEND OPEN MENU CLICKER TO FRONT x
                                        // //////////////////////////////////

                                            navBarPlateFourMenuButtonSideClickerOn.style = `
                                            
                                                width:100%;
                                                height:100%;
                                                cursor:pointer;
                                                margin:0px auto;
                                                z-index:1;
                                                position:absolute;
                                                transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;

                                            `

                                        // OPEN SIDE MENU xxxxxxxxxxxxxxxxxxx
                                        // //////////////////////////////////

                                            navBarPlateFourSideMenuMainContainer.style = `
                                            
                                                top:20px;
                                                top:100px;
                                                left:-50px;
                                                opacity:0;
                                                display:block;
                                                padding:5px 5px;
                                                position:fixed;
                                                background:#FFFFFF;
                                                border-radius:8px;
                                                transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;

                                            `

                                                // THEN FADE SIDE MNEU IN ===
                                                // //////////////////////////

                                                    setTimeout(() => {

                                                        navBarPlateFourSideMenuMainContainer.style = `
                                            
                                                            top:20px;
                                                            top:100px;
                                                            left:-50px;
                                                            opacity:0;
                                                            display:none;
                                                            padding:5px 5px;
                                                            position:fixed;
                                                            background:#FFFFFF;
                                                            border-radius:8px;
                                                            transition:all 600ms ease;
                                                            -o-transition:all 600ms ease;
                                                            -ms-transition:all 600ms ease;
                                                            -moz-transition:all 600ms ease;
                                                            -webkit-transition:all 600ms ease;

                                                        `

                                                    }, 200)

                                        
                                    })





























                        

                            // APPEND MAIN NAV BAR PLATE AND ELEMENTS =======
                            // //////////////////////////////////////////////

                                createNavBarCushion.appendChild(navBarPlateFourMainContainer)

                                navBarPlateFourMainContainer.appendChild(navBarPlateFourMainElement)



                                    // APPEND MAIN NAV BAR CONTENT RESIZER --
                                    // //////////////////////////////////////

                                        navBarPlateFourMainElement.appendChild(navBarPlateFourLogoSideContainer)
                                        navBarPlateFourMainElement.appendChild(navBarPlateFourMenuButtonSideContainer)



                                            // APPEND MAIN NAV BAR LOGO SIDE CONTAINER
                                            // //////////////////////////////////

                                                navBarPlateFourLogoSideContainer.appendChild(navBarPlateFourLogoActual)


                                            // APPEND MAIN NAV BAR MENU BUTTON SIDE CONTAINER
                                            // //////////////////////////////////


                                                    // APPEND CLICKERS CONTAINER
                                                    // //////////////////////////

                                                        navBarPlateFourMenuButtonSideContainer.appendChild(navBarPlateFourMenuButtonSideClickerContainer)

                                                            navBarPlateFourMenuButtonSideClickerContainer.appendChild(navBarPlateFourMenuButtonSideClickerOn)

                                                            navBarPlateFourMenuButtonSideClickerContainer.appendChild(navBarPlateFourMenuButtonSideClickerOff)


                                                    // APPEND DIVIDER LINE CONTAINER
                                                    // //////////////////////////

                                                        navBarPlateFourMenuButtonSideClickerContainer.appendChild(navBarPlateFourMenuButtonSideDividerLineContainer)

                                                            navBarPlateFourMenuButtonSideDividerLineContainer.appendChild(navBarPlateFourMenuButtonSideDividerLineActual)


                                                    // APPEND MENU BUTTON CONTAINER
                                                    // //////////////////////////

                                                        navBarPlateFourMenuButtonSideClickerContainer.appendChild(navBarPlateFourMenuButtonSideMenuButtonIconMover)

                                                            navBarPlateFourMenuButtonSideMenuButtonIconMover.appendChild(navBarPlateFourMenuButtonSideMenuButtonIconLineOne)

                                                            navBarPlateFourMenuButtonSideMenuButtonIconMover.appendChild(navBarPlateFourMenuButtonSideMenuButtonIconLineTwo)

                                                            navBarPlateFourMenuButtonSideMenuButtonIconMover.appendChild(navBarPlateFourMenuButtonSideMenuButtonIconLineThree)





























                        

                            // APPEND SIDE NAV BAR PLATE ====================
                            // //////////////////////////////////////////////

                                createNavBarCushion.appendChild(navBarPlateFourSideMenuMainContainer)




                                // CREATE LOOP FOR ICON BLOCKS xxxxxxxxxx
                                // //////////////////////////////////////

                                    for ( elementsIconCounter = 0; elementsIconCounter < storeNavBarItems.length; elementsIconCounter++ ) {


                                        // DECLARE VARIABLES ------------
                                        // //////////////////////////////

                                            var getSideMenuPannel = document.querySelector(`.navBarFourPlateSideMenuMainContainer`)













                                        // DECLARE VARIABLES FOR ITEM CRATIONS
                                        // //////////////////////////////

                                            var navBarPlateFourSideMenuIconeBlockContainer = document.createElement("div")
                                            navBarPlateFourSideMenuIconeBlockContainer.className = `navBarFourPlateSideMenuIconBlockContainer${classNumberMapper[elementsIconCounter]}`

                                            var navBarPlateFourSideMenuIconBlockClicker = document.createElement("div")
                                            navBarPlateFourSideMenuIconBlockClicker.className = `navBarFourPlateSideMenuIconBlockClicker${classNumberMapper[elementsIconCounter]}`


                                                // HOVER BLOCK FOR ICON CONTAINER
                                                // //////////////////////

                                                    var navBarPlateFourSideMenuIconeBlockHoverBlock = document.createElement("div")
                                                    navBarPlateFourSideMenuIconeBlockHoverBlock.className = `navBarFourPlateSideMenuIconBlockHoverBlockContainer${classNumberMapper[elementsIconCounter]}`

                                                        var navBarPlateFourSideMenuIconeActual = document.createElement("div")
                                                        navBarPlateFourSideMenuIconeActual.className = `navBarFourPlateSideMenuIconActual${classNumberMapper[elementsIconCounter]}`


                                                // HOVER TAG FOR ICON DESCRIPTION
                                                // //////////////////////

                                                    var navBarPlateFourSideMenuIconeBlockHoverTagContainer = document.createElement("div")
                                                    navBarPlateFourSideMenuIconeBlockHoverTagContainer.className = `navBarFourPlateSideMenuIconBlockHoverTagContainer${classNumberMapper[elementsIconCounter]}`

                                                        var navBarPlateFourSideMenuIconeBlockHoverTagPointer = document.createElement("div")
                                                        navBarPlateFourSideMenuIconeBlockHoverTagPointer.className = `navBarFourPlateSideMenuIconBlockHoverTagPointer${classNumberMapper[elementsIconCounter]}`

                                                        var navBarPlateFourSideMenuIconeBlockHoverTagActual = document.createElement("div")
                                                        navBarPlateFourSideMenuIconeBlockHoverTagActual.className = `navBarFourPlateSideMenuIconBlockHoverTagActual${classNumberMapper[elementsIconCounter]}`

                                                            var navBarPlateFourSideMenuIconeBlockHoverTagTextActual = document.createElement("div")
                                                            navBarPlateFourSideMenuIconeBlockHoverTagTextActual.className = `navBarFourPlateSideMenuIconBlockHoverTagTextActual${classNumberMapper[elementsIconCounter]}`













                                        // STYLE ITEM CRATIONS ----------
                                        // //////////////////////////////

                                            navBarPlateFourSideMenuIconeBlockContainer.style = `
                                            
                                                width:50px;
                                                height:50px;
                                                opacity:1;
                                                display:block;
                                                position:relative;
                                                transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;

                                            `

                                            navBarPlateFourSideMenuIconBlockClicker.style = `
                                            
                                                width:100%;
                                                height:100%;
                                                left:0;
                                                right:0;
                                                cursor:pointer;
                                                z-index:2;
                                                margin:0px auto;
                                                position:absolute;
                                                transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;

                                            `


                                                // STYLE HOVER BLOCK FOR ICON CONTAINER
                                                // //////////////////////

                                                    navBarPlateFourSideMenuIconeBlockHoverBlock.style = `
                                                    
                                                        width:100%;
                                                        height:100%;
                                                        z-index:1;
                                                        cursor:pointer;
                                                        position:absolute;
                                                        background:rgba(0,0,0,0.0);
                                                        border-radius:5px;
                                                        transition:all 600ms ease;
                                                        -o-transition:all 600ms ease;
                                                        -ms-transition:all 600ms ease;
                                                        -moz-transition:all 600ms ease;
                                                        -webkit-transition:all 600ms ease;

                                                    `

                                                        navBarPlateFourSideMenuIconeActual.style = `
                                                        
                                                            width:25px;
                                                            height:25px;
                                                            top:0;
                                                            left:0;
                                                            right:0;
                                                            bottom:0;
                                                            margin:auto;
                                                            position:absolute;
                                                            /*background:#2C2C2C;*/
                                                            background:url(${storeNavBarSideMenuIconItems[elementsIconCounter]});
                                                            background-size:cover;
                                                            background-repeat:no-repeat;
                                                            background-position:center;
                                                            transition:all 600ms ease;
                                                            -o-transition:all 600ms ease;
                                                            -ms-transition:all 600ms ease;
                                                            -moz-transition:all 600ms ease;
                                                            -webkit-transition:all 600ms ease;

                                                        `


                                                // STYLE HOVER TAG FOR ICON DESCRIPTION
                                                // //////////////////////

                                                    navBarPlateFourSideMenuIconeBlockHoverTagContainer.style = `
                                                    
                                                        height:100%;
                                                        left:0px;
                                                        z-index:-1;
                                                        opacity:0;
                                                        display:block;
                                                        position:absolute;
                                                        transition:all 600ms ease;
                                                        -o-transition:all 600ms ease;
                                                        -ms-transition:all 600ms ease;
                                                        -moz-transition:all 600ms ease;
                                                        -webkit-transition:all 600ms ease;

                                                    `

                                                        navBarPlateFourSideMenuIconeBlockHoverTagPointer.style = `
                                                        
                                                            width:15px;
                                                            height:15px;
                                                            top:0;
                                                            left:-100%;
                                                            right:0;
                                                            bottom:0;
                                                            margin:auto;
                                                            position:absolute;
                                                            transform:rotateZ(45deg);
                                                            background:#FFFFFF;
                                                            border-radius:3px;
                                                            transition:all 600ms ease;
                                                            -o-transition:all 600ms ease;
                                                            -ms-transition:all 600ms ease;
                                                            -moz-transition:all 600ms ease;
                                                            -webkit-transition:all 600ms ease;

                                                        `

                                                        navBarPlateFourSideMenuIconeBlockHoverTagActual.style = `
                                                        
                                                            width:100%;
                                                            height:100%;
                                                            padding:0px 10px;
                                                            background:#FFFFFF;
                                                            border-radius:5px;
                                                            box-shadow:0px 20px 20px -10px rgba(0,0,0,0.3);
                                                            transition:all 600ms ease;
                                                            -o-transition:all 600ms ease;
                                                            -ms-transition:all 600ms ease;
                                                            -moz-transition:all 600ms ease;
                                                            -webkit-transition:all 600ms ease;

                                                        `

                                                            navBarPlateFourSideMenuIconeBlockHoverTagTextActual.style = `
                                                            
                                                                width:100%;
                                                                height:100%;
                                                                color:#2C2C2C;
                                                                position:relative;
                                                                font-size:15px;
                                                                font-weight:700;
                                                                font-family:arial, sans-serif;
                                                                line-height:50px;
                                                                letter-spacing:2px;
                                                                transition:all 600ms ease;
                                                                -o-transition:all 600ms ease;
                                                                -ms-transition:all 600ms ease;
                                                                -moz-transition:all 600ms ease;
                                                                -webkit-transition:all 600ms ease;

                                                            `







                                            






                                        // APPEND OBJECTS TO PARENTS ----
                                        // //////////////////////////////

                                            getSideMenuPannel.appendChild(navBarPlateFourSideMenuIconeBlockContainer)
                                            navBarPlateFourSideMenuIconeBlockContainer.appendChild(navBarPlateFourSideMenuIconBlockClicker)


                                                // APPEND HOVER BLOCK FOR ICON CONTAINER
                                                // //////////////////////

                                                    navBarPlateFourSideMenuIconeBlockContainer.appendChild(navBarPlateFourSideMenuIconeBlockHoverBlock)

                                                        navBarPlateFourSideMenuIconeBlockHoverBlock.appendChild(navBarPlateFourSideMenuIconeActual)


                                                // STYLE HOVER TAG FOR ICON DESCRIPTION
                                                // //////////////////////

                                                    navBarPlateFourSideMenuIconeBlockContainer.appendChild(navBarPlateFourSideMenuIconeBlockHoverTagContainer)

                                                        navBarPlateFourSideMenuIconeBlockHoverTagContainer.appendChild(navBarPlateFourSideMenuIconeBlockHoverTagPointer)

                                                        navBarPlateFourSideMenuIconeBlockHoverTagContainer.appendChild(navBarPlateFourSideMenuIconeBlockHoverTagActual)

                                                            navBarPlateFourSideMenuIconeBlockHoverTagActual.appendChild(navBarPlateFourSideMenuIconeBlockHoverTagTextActual)













                                        // ADD TEXT TO OBJECT BLOCK -----
                                        // //////////////////////////////

                                            navBarPlateFourSideMenuIconeBlockHoverTagTextActual.textContent = `${storeNavBarItems[elementsIconCounter]}`













                                        // ADD CLASS NAMES TO ARRAY FOR USE
                                        // //////////////////////////////

                                            storeNavBarItemsClassNames.push(`navBarFourPlateSideMenuIconBlockClicker${classNumberMapper[elementsIconCounter]}`)













                                                        // CREATE STYLE AND APPEND ICON BLOCK DIVIDER
                                                        // //////////////////////

                                                            if ( elementsIconCounter == storeNavBarItems.length -1 ) {


                                                            } else {

                                                                // CREATE DIVIDER LINE
                                                                // //////////////

                                                                    var navBarPlateFourSideMenuIconeBlocDividerContainer = document.createElement("div")
                                                                    navBarPlateFourSideMenuIconeBlocDividerContainer.className = `navBarFourPlateSideMenuIconBlockDividerContainer`

                                                                        var navBarPlateFourSideMenuIconeBlocDividerLineActual = document.createElement("div")
                                                                        navBarPlateFourSideMenuIconeBlocDividerLineActual.className = `navBarFourPlateSideMenuIconBlockDividerLineActual`

                                                                        





                                                                // STYLE DIVIDER LINE
                                                                // //////////////

                                                                    navBarPlateFourSideMenuIconeBlocDividerContainer.style = `
                                                                    
                                                                        width:100%;
                                                                        padding:5px 0px;
                                                                        position:relative;
                                                                        transition:all 600ms ease;
                                                                        -o-transition:all 600ms ease;
                                                                        -ms-transition:all 600ms ease;
                                                                        -moz-transition:all 600ms ease;
                                                                        -webkit-transition:all 600ms ease;

                                                                    `

                                                                        navBarPlateFourSideMenuIconeBlocDividerLineActual.style = `
                                                                        
                                                                            width:100%;
                                                                            height:2px;
                                                                            background:rgba(0,0,0,0.1);
                                                                            transition:all 600ms ease;
                                                                            -o-transition:all 600ms ease;
                                                                            -ms-transition:all 600ms ease;
                                                                            -moz-transition:all 600ms ease;
                                                                            -webkit-transition:all 600ms ease;

                                                                        `






                                                                    
                                                                // APPEND DIVIDER LINE
                                                                // //////////////

                                                                    getSideMenuPannel.appendChild(navBarPlateFourSideMenuIconeBlocDividerContainer)

                                                                        navBarPlateFourSideMenuIconeBlocDividerContainer.appendChild(navBarPlateFourSideMenuIconeBlocDividerLineActual)

                                                                
                                                            }


                                    }





























                        

                            // ADD EVENT LISTENERS TO OBJECTS ===============
                            // //////////////////////////////////////////////

                                storeNavBarItemsClassNames.forEach((selector) => {


                                    // DECLARE OBJECT VARIABLES xxxxxxxxxxxxx
                                    // //////////////////////////////////////

                                        var getObjectInArray = document.querySelector(`.${selector}`)

                                        var makeIndexNumber = storeNavBarItemsClassNames.indexOf(selector)

                                        var getTagBlock = document.querySelector(`.navBarFourPlateSideMenuIconBlockHoverTagContainer${classNumberMapper[makeIndexNumber]}`)

                                        var getIconHoverBlock = document.querySelector(`.navBarFourPlateSideMenuIconBlockHoverBlockContainer${classNumberMapper[makeIndexNumber]}`)


                                    // HOVER EVENTS xxxxxxxxxxxxxxxxxxxxxxxxx
                                    // //////////////////////////////////////

                                        // MOUSE OVER -----------------------
                                        // //////////////////////////////////

                                            getObjectInArray.addEventListener("mouseover", function () {

                                                // CHANGE HOVER BLOCK TO ACTIVE STATE
                                                // //////////////////////////

                                                    getIconHoverBlock.style = `
                                                    
                                                        width:100%;
                                                        height:100%;
                                                        z-index:1;
                                                        cursor:pointer;
                                                        position:absolute;
                                                        background:rgba(0,0,0,0.1);
                                                        border-radius:5px;
                                                        transition:all 600ms ease;
                                                        -o-transition:all 600ms ease;
                                                        -ms-transition:all 600ms ease;
                                                        -moz-transition:all 600ms ease;
                                                        -webkit-transition:all 600ms ease;

                                                    `

                                                // CHANGE TAG BLOCK TO ACTIVE STATE
                                                // //////////////////////////

                                                    getTagBlock.style = `
                                                    
                                                        height:100%;
                                                        left:0px;
                                                        z-index:0;
                                                        opacity:0;
                                                        display:block;
                                                        position:absolute;
                                                        transition:all 600ms ease;
                                                        -o-transition:all 600ms ease;
                                                        -ms-transition:all 600ms ease;
                                                        -moz-transition:all 600ms ease;
                                                        -webkit-transition:all 600ms ease;

                                                    `

                                                        setTimeout(() => {

                                                            getTagBlock.style = `
                                                    
                                                                height:100%;
                                                                left:75px;
                                                                z-index:0;
                                                                opacity:1;
                                                                display:block;
                                                                position:absolute;
                                                                transition:all 600ms ease;
                                                                -o-transition:all 600ms ease;
                                                                -ms-transition:all 600ms ease;
                                                                -moz-transition:all 600ms ease;
                                                                -webkit-transition:all 600ms ease;

                                                            `
                                                            
                                                        }, 20);

                                            })

                                        // MOUSE OUT ------------------------
                                        // //////////////////////////////////

                                            getObjectInArray.addEventListener("mouseout", function () {

                                                // CHANGE HOVER BLOCK TO INACTIVE STATE
                                                // //////////////////////////

                                                    getIconHoverBlock.style = `
                                                    
                                                        width:100%;
                                                        height:100%;
                                                        z-index:1;
                                                        cursor:pointer;
                                                        position:absolute;
                                                        background:rgba(0,0,0,0.0);
                                                        border-radius:5px;
                                                        transition:all 600ms ease;
                                                        -o-transition:all 600ms ease;
                                                        -ms-transition:all 600ms ease;
                                                        -moz-transition:all 600ms ease;
                                                        -webkit-transition:all 600ms ease;

                                                    `

                                                // CHANGE TAG BLOCK TO INACTIVE STATE
                                                // //////////////////////////

                                                    getTagBlock.style = `
                                                    
                                                        height:100%;
                                                        left:0px;
                                                        z-index:0;
                                                        opacity:0;
                                                        display:block;
                                                        position:absolute;
                                                        transition:all 600ms ease;
                                                        -o-transition:all 600ms ease;
                                                        -ms-transition:all 600ms ease;
                                                        -moz-transition:all 600ms ease;
                                                        -webkit-transition:all 600ms ease;

                                                    `

                                                        // KILL BLOCK -------
                                                        // //////////////////

                                                            setTimeout(() => {

                                                                getTagBlock.style = `
                                                    
                                                                    height:100%;
                                                                    left:0px;
                                                                    z-index:0;
                                                                    opacity:0;
                                                                    display:none;
                                                                    position:absolute;
                                                                    transition:all 600ms ease;
                                                                    -o-transition:all 600ms ease;
                                                                    -ms-transition:all 600ms ease;
                                                                    -moz-transition:all 600ms ease;
                                                                    -webkit-transition:all 600ms ease;

                                                                `

                                                            }, 300)

                                            })





                                    // CLICKER EVENTS xxxxxxxxxxxxxxxxxxxxxxx
                                    // //////////////////////////////////////

                                        getObjectInArray.addEventListener("click", function () {

                                            // CHANGE HOVER BLOCK TO ACTIVE STATE
                                            // //////////////////////////

                                                getIconHoverBlock.style = `
                                                
                                                    width:100%;
                                                    height:100%;
                                                    z-index:1;
                                                    cursor:pointer;
                                                    position:absolute;
                                                    background:rgba(0,0,0,0.0);
                                                    border-radius:5px;
                                                    transition:all 600ms ease;
                                                    -o-transition:all 600ms ease;
                                                    -ms-transition:all 600ms ease;
                                                    -moz-transition:all 600ms ease;
                                                    -webkit-transition:all 600ms ease;

                                                `

                                            // CHANGE TAG BLOCK TO ACTIVE STATE
                                            // //////////////////////////

                                                getTagBlock.style = `
                                                
                                                    height:100%;
                                                    left:0px;
                                                    z-index:0;
                                                    opacity:0;
                                                    display:block;
                                                    position:absolute;
                                                    transition:all 600ms ease;
                                                    -o-transition:all 600ms ease;
                                                    -ms-transition:all 600ms ease;
                                                    -moz-transition:all 600ms ease;
                                                    -webkit-transition:all 600ms ease;

                                                `

                                                    // KILL BLOCK -------
                                                    // //////////////////

                                                        setTimeout(() => {

                                                            getTagBlock.style = `
                                                
                                                                height:100%;
                                                                left:0px;
                                                                z-index:0;
                                                                opacity:0;
                                                                display:none;
                                                                position:absolute;
                                                                transition:all 600ms ease;
                                                                -o-transition:all 600ms ease;
                                                                -ms-transition:all 600ms ease;
                                                                -moz-transition:all 600ms ease;
                                                                -webkit-transition:all 600ms ease;

                                                            `

                                                        }, 300)

                                        })



                                })





























                        





                                    



                    }





                // CREATE NAV BAR FIVE ACTUAL -------------------------------
                // //////////////////////////////////////////////////////////

                    function createNavBarFiveMainPlate (cushionNumber) {

                        // GET NAV BAR CUSHION xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        // //////////////////////////////////////////////////

                            var createNavBarCushion = document.querySelector(`.navBar${cushionNumber}`)

                            console.log("CLASS: " + createNavBarCushion.className)

                        // CREATE NAV BAR FOUR ELEMENTS xxxxxxxxxxxxxxxxxxxxx
                        // //////////////////////////////////////////////////

                            // CREATE MAIN NAV BAR PLATE AND ELEMENTS =======
                            // //////////////////////////////////////////////

                                var navBarPlateFiveMainContainer = document.createElement("div")
                                navBarPlateFiveMainContainer.className = `navBarFiveMainContainer`





                            // CREATE MAIN NAV BAR PLATE ELEMENT ============ 
                            // //////////////////////////////////////////////

                                var navBarPlateFiveMainElement = document.createElement("div")
                                navBarPlateFiveMainElement.className = `navBarFivePlateElementContainer`



                                    // SIDE MENU CONTAINER ELEMENT xxxxxxxxxx
                                    // //////////////////////////////////////

                                        var navBarPlateFiveSideMenuContainer = document.createElement("div")
                                        navBarPlateFiveSideMenuContainer.className = `navBarFivePlateSideMenuContainer`



                                            // SIDE MENU CONTAINER ELEMENT AND OPEN CLOSE LIP CONTAINER
                                            // //////////////////////////////

                                                var navBarPlateFiveSideMenuOpenerLipContainer = document.createElement("div")
                                                navBarPlateFiveSideMenuOpenerLipContainer.className = `navBarFivePlateSideMenuOpenerLipContainer`

                                                    var navBarPlateFiveSideMenuOpenerLipOpenClicker = document.createElement("div")
                                                    navBarPlateFiveSideMenuOpenerLipOpenClicker.className = `navBarFivePlateSideMenuOpenerLipOpenClicker`

                                                    var navBarPlateFiveSideMenuOpenerLipCloseClicker = document.createElement("div")
                                                    navBarPlateFiveSideMenuOpenerLipCloseClicker.className = `navBarFivePlateSideMenuOpenerLipCloseClicker`



                                            // SIDE MENU CONTAINER ELEMENT PHYSICAL CLOSE BUTTON CONTAINER
                                            // //////////////////////////////

                                                var navBarPlateFiveSideMenuPhysicalCloseButtonContainer = document.createElement("div")
                                                navBarPlateFiveSideMenuPhysicalCloseButtonContainer.className = `navBarFivePlateSideMenuPhysicalCloseButtonContainer`

                                                    var navBarPlateFiveSideMenuPhysicalCloseButtonElement = document.createElement("div")
                                                    navBarPlateFiveSideMenuPhysicalCloseButtonElement.className = `navBarFivePlateSideMenuPhysicalCloseButtonElement`

                                                        var navBarPlateFiveSideMenuPhysicalCloseButtonIconMover = document.createElement("div")
                                                        navBarPlateFiveSideMenuPhysicalCloseButtonIconMover.className = `navBarFivePlateSideMenuPhysicalCloseButtonIconMover`

                                                            var navBarPlateFiveSideMenuPhysicalCloseButtonIconLineOne = document.createElement("div")
                                                            navBarPlateFiveSideMenuPhysicalCloseButtonIconLineOne.className = `navBarFivePlateSideMenuPhysicalCloseButtonIconLineOne`

                                                            var navBarPlateFiveSideMenuPhysicalCloseButtonIconLineTwo = document.createElement("div")
                                                            navBarPlateFiveSideMenuPhysicalCloseButtonIconLineTwo.className = `navBarFivePlateSideMenuPhysicalCloseButtonIconLineTwo`





                            // CREATE SIDE MENU LIST ITEMS CONTAINER ======== 
                            // //////////////////////////////////////////////

                                var navBarPlateFiveSideMenuListItemsContainer = document.createElement("div")
                                navBarPlateFiveSideMenuListItemsContainer.className = `navBarFivePlateSideMenuListItemsContainer`

























                        

                            // STYLE MAIN NAV BAR PLATE AND ELEMENTS ========
                            // //////////////////////////////////////////////

                                // STYLE MAIN NAV BAR ELEMENTS xxxxxxxxxxxxxx
                                // //////////////////////////////////////////

                                    navBarPlateFiveMainContainer.style = `
                                    
                                        width:200px;
                                        height:50px;
                                        top:0;
                                        left:20px;
                                        margin:0px auto;
                                        z-index:2;
                                        position:fixed;
                                        box-shadow:0px 30px 50px -10px rgba(0,0,0,0.3);
                                        transition:all 600ms ease;
                                        -webkit-transition:all 600ms ease;
                                        -moz-transition:all 600ms ease;
                                        -o-transition:all 600ms ease;
                                        -ms-transition:all 600ms ease;

                                    `

                                // STYLE MAIN NAV BAR PLATE ELEMENT xxxxxxxxx
                                // //////////////////////////////////////////

                                    navBarPlateFiveMainElement.style = `
                                    
                                        width:100%;
                                        height:50px;
                                        top:0px;
                                        left:0px;
                                        right:0;
                                        margin:0px auto;
                                        position:relative;
                                        background:#FFFFFF;
                                        border-radius:0px 0px 8px 8px;
                                        transition:all 600ms ease;
                                        -webkit-transition:all 600ms ease;
                                        -moz-transition:all 600ms ease;
                                        -o-transition:all 600ms ease;
                                        -ms-transition:all 600ms ease;

                                    `

                                        // STYLE SIDE MENU CONTAINER ELEMENT
                                        // //////////////////////////////////

                                            navBarPlateFiveSideMenuContainer.style = `
                                            
                                                width:210px;
                                                top:70px;
                                                left:-250px;
                                                padding:20px 20px;
                                                position:fixed;
                                                background:#FFFFFF;
                                                border-radius:8px 0px 8px 8px;
                                                transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;

                                            `

                                                // STYLE SIDE MENU CONTAINER ELEMENT AND OPEN CLOSE LIP CONTAINER
                                                // //////////////////////////

                                                    navBarPlateFiveSideMenuOpenerLipContainer.style = `
                                                    
                                                        width:10px;
                                                        height:70px;
                                                        top:0;
                                                        right:-10px;
                                                        margin:auto 0px;
                                                        cursor:pointer;
                                                        opacity:1;
                                                        display:block;
                                                        position:absolute;
                                                        background:#FFFFFF;
                                                        border-radius:0px 5px 5px 0px;
                                                        transition:all 600ms ease;
                                                        -webkit-transition:all 600ms ease;
                                                        -moz-transition:all 600ms ease;
                                                        -o-transition:all 600ms ease;
                                                        -ms-transition:all 600ms ease;

                                                    `

                                                        navBarPlateFiveSideMenuOpenerLipOpenClicker.style = `
                                                        
                                                            width:100%;
                                                            height:100%;
                                                            z-index:1;
                                                            margin:0px auto;
                                                            position:absolute;
                                                            transition:all 600ms ease;
                                                            -webkit-transition:all 600ms ease;
                                                            -moz-transition:all 600ms ease;
                                                            -o-transition:all 600ms ease;
                                                            -ms-transition:all 600ms ease;

                                                        `

                                                        navBarPlateFiveSideMenuOpenerLipCloseClicker.style = `
                                                        
                                                            width:100%;
                                                            height:100%;
                                                            z-index:-1;
                                                            margin:0px auto;
                                                            position:absolute;
                                                            transition:all 600ms ease;
                                                            -webkit-transition:all 600ms ease;
                                                            -moz-transition:all 600ms ease;
                                                            -o-transition:all 600ms ease;
                                                            -ms-transition:all 600ms ease;

                                                        `



                                                // SIDE MENU CONTAINER ELEMENT PHYSICAL CLOSE BUTTON CONTAINER
                                                // //////////////////////////

                                                    navBarPlateFiveSideMenuPhysicalCloseButtonContainer.style = `
                                                    
                                                        width:100%;
                                                        height:40px;
                                                        top:0;
                                                        margin:0px auto;
                                                        display:block;
                                                        position:relative;
                                                        transition:all 600ms ease;
                                                        -webkit-transition:all 600ms ease;
                                                        -moz-transition:all 600ms ease;
                                                        -o-transition:all 600ms ease;
                                                        -ms-transition:all 600ms ease;
                                                    
                                                    `

                                                        navBarPlateFiveSideMenuPhysicalCloseButtonElement.style = `
                                                    
                                                            width:30px;
                                                            height:30px;
                                                            top:-10px;
                                                            right:-95px;
                                                            cursor:pointer;
                                                            margin:0px auto;
                                                            border:3px solid #2C2C2C;
                                                            display:inline-block;
                                                            position:relative;
                                                            border-radius:1000px;
                                                            transition:all 600ms ease;
                                                            -webkit-transition:all 600ms ease;
                                                            -moz-transition:all 600ms ease;
                                                            -o-transition:all 600ms ease;
                                                            -ms-transition:all 600ms ease;
                                                    
                                                        `

                                                            navBarPlateFiveSideMenuPhysicalCloseButtonIconMover.style = `
                                                    
                                                                width:20px;
                                                                height:20px;
                                                                top:0;
                                                                left:0;
                                                                right:0;
                                                                bottom:0;
                                                                margin:auto;
                                                                position:absolute;
                                                                transition:all 600ms ease;
                                                                -webkit-transition:all 600ms ease;
                                                                -moz-transition:all 600ms ease;
                                                                -o-transition:all 600ms ease;
                                                                -ms-transition:all 600ms ease;
                                                    
                                                            `

                                                                navBarPlateFiveSideMenuPhysicalCloseButtonIconLineOne.style = `
                                                    
                                                                    width:15px;
                                                                    height:3px;
                                                                    top:0;
                                                                    left:0;
                                                                    right:0;
                                                                    bottom:0;
                                                                    margin:auto;
                                                                    position:absolute;
                                                                    background:#2C2C2C;
                                                                    transform:rotateZ(45deg);
                                                                    transition:all 600ms ease;
                                                                    -webkit-transition:all 600ms ease;
                                                                    -moz-transition:all 600ms ease;
                                                                    -o-transition:all 600ms ease;
                                                                    -ms-transition:all 600ms ease;
                                                    
                                                                `

                                                                navBarPlateFiveSideMenuPhysicalCloseButtonIconLineTwo.style = `
                                                    
                                                                    width:15px;
                                                                    height:3px;
                                                                    top:0;
                                                                    left:0;
                                                                    right:0;
                                                                    bottom:0;
                                                                    margin:auto;
                                                                    position:absolute;
                                                                    background:#2C2C2C;
                                                                    transform:rotateZ(-45deg);
                                                                    transition:all 600ms ease;
                                                                    -webkit-transition:all 600ms ease;
                                                                    -moz-transition:all 600ms ease;
                                                                    -o-transition:all 600ms ease;
                                                                    -ms-transition:all 600ms ease;
                                                    
                                                                `





                            // STYLE SIDE MENU LIST ITEMS CONTAINER ========= 
                            // //////////////////////////////////////////////

                                navBarPlateFiveSideMenuListItemsContainer.style = `
                                
                                    width:100%;
                                    position:relative;
                                    transition:all 600ms ease;
                                    -webkit-transition:all 600ms ease;
                                    -moz-transition:all 600ms ease;
                                    -o-transition:all 600ms ease;
                                    -ms-transition:all 600ms ease;

                                `





























                        

                            // APPEND MAIN NAV BAR PLATE AND ELEMENTS =======
                            // //////////////////////////////////////////////

                                createNavBarCushion.appendChild(navBarPlateFiveMainContainer)

                                navBarPlateFiveMainContainer.appendChild(navBarPlateFiveMainElement)



                                    // SIDE MENU CONTAINER ELEMENT ----------
                                    // //////////////////////////////////////

                                        createNavBarCushion.appendChild(navBarPlateFiveSideMenuContainer)



                                            // SIDE MENU CONTAINER ELEMENT --
                                            // //////////////////////////////

                                                navBarPlateFiveSideMenuContainer.appendChild(navBarPlateFiveSideMenuOpenerLipContainer)

                                                    navBarPlateFiveSideMenuOpenerLipContainer.appendChild(navBarPlateFiveSideMenuOpenerLipOpenClicker)

                                                    navBarPlateFiveSideMenuOpenerLipContainer.appendChild(navBarPlateFiveSideMenuOpenerLipCloseClicker)



                                            // SIDE MENU CONTAINER ELEMENT PHYSICAL CLOSE BUTTON CONTAINER
                                            // //////////////////////////////

                                                navBarPlateFiveSideMenuContainer.appendChild(navBarPlateFiveSideMenuPhysicalCloseButtonContainer)

                                                    navBarPlateFiveSideMenuPhysicalCloseButtonContainer.appendChild(navBarPlateFiveSideMenuPhysicalCloseButtonElement)

                                                        navBarPlateFiveSideMenuPhysicalCloseButtonElement.appendChild(navBarPlateFiveSideMenuPhysicalCloseButtonIconMover)

                                                            navBarPlateFiveSideMenuPhysicalCloseButtonIconMover.appendChild(navBarPlateFiveSideMenuPhysicalCloseButtonIconLineOne)

                                                            navBarPlateFiveSideMenuPhysicalCloseButtonIconMover.appendChild(navBarPlateFiveSideMenuPhysicalCloseButtonIconLineTwo)





                            // APPEND SIDE MENU LIST ITEMS CONTAINER ======== 
                            // //////////////////////////////////////////////

                                navBarPlateFiveSideMenuContainer.appendChild(navBarPlateFiveSideMenuListItemsContainer)



























                        

                            // ADD EVENTS FOR IMMEDIATE CLICKERS ============
                            // //////////////////////////////////////////////


                                // DECLARE VRAIABLES ------------------------
                                // //////////////////////////////////////////

                                    var getSideMenuLipContainerMain = document.querySelector(`.navBarFivePlateSideMenuOpenerLipContainer`)

                                    var getSideMenuOpenClicker = document.querySelector(`.navBarFivePlateSideMenuOpenerLipOpenClicker`)
                                    var getSideMenuCloseClicker = document.querySelector(`.navBarFivePlateSideMenuOpenerLipCloseClicker`)

                                    var getSideMenuTray = document.querySelector(`.navBarFivePlateSideMenuContainer`)

                                    var getTrayCloseButton = document.querySelector(`.navBarFivePlateSideMenuPhysicalCloseButtonElement`)

                                // FOR OPEN SIDE TRAY MENU CLICKER ----------
                                // //////////////////////////////////////////

                                    getSideMenuOpenClicker.addEventListener("click", function () {

                                        console.log("OPENED")

                                        // HIDE SIDE MENU LIP CONTAINER xxxxx
                                        // //////////////////////////////////

                                            getSideMenuLipContainerMain.style = `
                                            
                                                width:10px;
                                                height:70px;
                                                top:0;
                                                right:0px;
                                                margin:auto 0px;
                                                cursor:pointer;
                                                opacity:1;
                                                display:block;
                                                position:absolute;
                                                background:#FFFFFF;
                                                border-radius:0px 5px 5px 0px;
                                                transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;

                                            `

                                                // THEN KILL LIP ============
                                                // //////////////////////////

                                                    setTimeout(() => {

                                                        getSideMenuLipContainerMain.style = `
                                                        
                                                            width:10px;
                                                            height:70px;
                                                            top:0;
                                                            right:0px;
                                                            margin:auto 0px;
                                                            cursor:pointer;
                                                            opacity:1;
                                                            display:none;
                                                            position:absolute;
                                                            background:#FFFFFF;
                                                            border-radius:0px 5px 5px 0px;
                                                            transition:all 600ms ease;
                                                            -webkit-transition:all 600ms ease;
                                                            -moz-transition:all 600ms ease;
                                                            -o-transition:all 600ms ease;
                                                            -ms-transition:all 600ms ease;

                                                        `

                                                    }, 300)





                                        // MOVE OPEN BUTTON TO BACK xxxxxxxxx
                                        // //////////////////////////////////

                                            getSideMenuOpenClicker.style = `
                                            
                                                width:100%;
                                                height:100%;
                                                z-index:-1;
                                                margin:0px auto;
                                                position:absolute;
                                                transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;

                                            `


                                                // CHANGE MENU OPEN CLOSE INDICATOR ICON TO READY FOR CLOSE
                                                // //////////////////////////
                                        



                                        // MOVE CLOSE BUTTON TO FRONT xxxxxxx
                                        // //////////////////////////////////

                                            getSideMenuCloseClicker.style = `
                                            
                                                width:100%;
                                                height:100%;
                                                z-index:1;
                                                margin:0px auto;
                                                position:absolute;
                                                transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;

                                            `


                                                // CHANGE MENU OPEN CLOSE INDICATOR ICON TO READY FOR OPEN
                                                // //////////////////////////

                                                


                                        // CHANGE MENU SIDE TRAY TO OPENED MODE
                                        // //////////////////////////////////

                                            getSideMenuTray.style = `
                                            
                                                width:210px;
                                                top:70px;
                                                left:20px;
                                                padding:20px 20px;
                                                position:fixed;
                                                background:#FFFFFF;
                                                border-radius:8px 8px 8px 8px;
                                                transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;

                                            `


                                    })










                                // FOR CLOSE SIDE TRAY MENU CLICKER ---------
                                // //////////////////////////////////////////

                                    getSideMenuCloseClicker.addEventListener("click", function () {

                                        console.log("CLOSED")

                                        

                                        // FIRST REVIVE LIP xxxxxxxxxxxxxxxxx
                                        // //////////////////////////////////

                                            getSideMenuLipContainerMain.style = `
                                            
                                                width:10px;
                                                height:70px;
                                                top:0;
                                                right:0px;
                                                margin:auto 0px;
                                                cursor:pointer;
                                                opacity:1;
                                                display:block;
                                                position:absolute;
                                                background:#FFFFFF;
                                                border-radius:0px 5px 5px 0px;
                                                transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;

                                            `

                                                // THEN SHOW SIDE MENU LIP CONTAINER
                                                // //////////////////////////

                                                    setTimeout(() => {

                                                        getSideMenuLipContainerMain.style = `
                                                        
                                                            width:10px;
                                                            height:70px;
                                                            top:0;
                                                            right:-10px;
                                                            margin:auto 0px;
                                                            cursor:pointer;
                                                            opacity:1;
                                                            display:block;
                                                            position:absolute;
                                                            background:#FFFFFF;
                                                            border-radius:0px 5px 5px 0px;
                                                            transition:all 600ms ease;
                                                            -webkit-transition:all 600ms ease;
                                                            -moz-transition:all 600ms ease;
                                                            -o-transition:all 600ms ease;
                                                            -ms-transition:all 600ms ease;

                                                        `

                                                    }, 50)
                                                    




                                        // MOVE CLOSE BUTTON TO BACK xxxxxxxx
                                        // //////////////////////////////////

                                            getSideMenuCloseClicker.style = `
                                            
                                                width:100%;
                                                height:100%;
                                                z-index:-1;
                                                margin:0px auto;
                                                position:absolute;
                                                transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;

                                            `


                                                // CHANGE MENU OPEN CLOSE INDICATOR ICON TO READY FOR CLOSE
                                                // //////////////////////////




                                        // MOVE OPEN BUTTON TO FRONT xxxxxxxx
                                        // //////////////////////////////////

                                            getSideMenuOpenClicker.style = `
                                            
                                                width:100%;
                                                height:100%;
                                                z-index:1;
                                                margin:0px auto;
                                                position:absolute;
                                                transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;

                                            `


                                                // CHANGE MENU OPEN CLOSE INDICATOR ICON TO READY FOR OPEN
                                                // //////////////////////////




                                        // CHANGE MENU SIDE TRAY TO CLOSED MODE
                                        // //////////////////////////////////

                                            getSideMenuTray.style = `
                                            
                                                width:210px;
                                                top:70px;
                                                left:-250px;
                                                padding:20px 20px;
                                                position:fixed;
                                                background:#FFFFFF;
                                                border-radius:8px 0px 8px 8px;
                                                transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;

                                            `


                                    })




                                    





                                // FOR CLOSE SIDE TRAY MENU CLICKER ---------
                                // //////////////////////////////////////////

                                    getTrayCloseButton.addEventListener("click", function () {

                                        console.log("ALSO CLOSED")

                                        

                                        // FIRST REVIVE LIP xxxxxxxxxxxxxxxxx
                                        // //////////////////////////////////

                                            getSideMenuLipContainerMain.style = `
                                            
                                                width:10px;
                                                height:70px;
                                                top:0;
                                                right:0px;
                                                margin:auto 0px;
                                                cursor:pointer;
                                                opacity:1;
                                                display:block;
                                                position:absolute;
                                                background:#FFFFFF;
                                                border-radius:0px 5px 5px 0px;
                                                transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;

                                            `

                                                // THEN SHOW SIDE MENU LIP CONTAINER
                                                // //////////////////////////

                                                    setTimeout(() => {

                                                        getSideMenuLipContainerMain.style = `
                                                        
                                                            width:10px;
                                                            height:70px;
                                                            top:0;
                                                            right:-10px;
                                                            margin:auto 0px;
                                                            cursor:pointer;
                                                            opacity:1;
                                                            display:block;
                                                            position:absolute;
                                                            background:#FFFFFF;
                                                            border-radius:0px 5px 5px 0px;
                                                            transition:all 600ms ease;
                                                            -webkit-transition:all 600ms ease;
                                                            -moz-transition:all 600ms ease;
                                                            -o-transition:all 600ms ease;
                                                            -ms-transition:all 600ms ease;

                                                        `

                                                    }, 500)
                                                    




                                        // MOVE CLOSE BUTTON TO BACK xxxxxxxx
                                        // //////////////////////////////////

                                            getSideMenuCloseClicker.style = `
                                            
                                                width:100%;
                                                height:100%;
                                                z-index:-1;
                                                margin:0px auto;
                                                position:absolute;
                                                transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;

                                            `


                                                // CHANGE MENU OPEN CLOSE INDICATOR ICON TO READY FOR CLOSE
                                                // //////////////////////////




                                        // MOVE OPEN BUTTON TO FRONT xxxxxxxx
                                        // //////////////////////////////////

                                            getSideMenuOpenClicker.style = `
                                            
                                                width:100%;
                                                height:100%;
                                                z-index:1;
                                                margin:0px auto;
                                                position:absolute;
                                                transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;

                                            `


                                                // CHANGE MENU OPEN CLOSE INDICATOR ICON TO READY FOR OPEN
                                                // //////////////////////////




                                        // CHANGE MENU SIDE TRAY TO CLOSED MODE
                                        // //////////////////////////////////

                                            getSideMenuTray.style = `
                                            
                                                width:210px;
                                                top:70px;
                                                left:-250px;
                                                padding:20px 20px;
                                                position:fixed;
                                                background:#FFFFFF;
                                                border-radius:8px 0px 8px 8px;
                                                transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;

                                            `


                                    })



























                        

                            // CREATE AND ADD MENU ITEMS ====================
                            // //////////////////////////////////////////////


                                // RUN FOR LOOP TO ADD LIST ITEMS xxxxxxxxxxx
                                // //////////////////////////////////////////

                                    for ( listItemsCounter = 0; listItemsCounter < storeNavBarItems.length; listItemsCounter++ ) {




                                        // DECLARE VARIABLES xxxxxxxxxxxxxxxxxxxxxxxx
                                        // //////////////////////////////////////////

                                            var getSideMenuListItemMainContainer = document.querySelector(`.navBarFivePlateSideMenuListItemsContainer`)














                                        // CREATION OF MENU ITEMS xxxxxxxxxxxxxxxxxxx
                                        // //////////////////////////////////////////

                                            var navBarPlateFiveSideMenuListItemBlockContainer = document.createElement("div")
                                            navBarPlateFiveSideMenuListItemBlockContainer.className = `navBarFivePlateSideMenuListItemBlockContainer${classNumberMapper[listItemsCounter]}`

                                                var navBarPlateFiveSideMenuListItemTextSide = document.createElement("div")
                                                navBarPlateFiveSideMenuListItemTextSide.className = `navBarFivePlateSideMenuListItemTextSide${classNumberMapper[listItemsCounter]}`

                                                    var navBarPlateFiveSideMenuListItemTextActual = document.createElement("div")
                                                    navBarPlateFiveSideMenuListItemTextActual.className = `navBarFivePlateSideMenuListItemTextActual${classNumberMapper[listItemsCounter]}`






                                                var navBarPlateFiveSideMenuListItemIconSide = document.createElement("div")
                                                navBarPlateFiveSideMenuListItemIconSide.className = `navBarFivePlateSideMenuListItemIconSide${classNumberMapper[listItemsCounter]}`

                                                    var navBarPlateFiveSideMenuListItemIconElementContainer = document.createElement("div")
                                                    navBarPlateFiveSideMenuListItemIconElementContainer.className = `navBarFivePlateSideMenuListItemIconElement${classNumberMapper[listItemsCounter]}`

                                                        var navBarPlateFiveSideMenuListItemIconMover = document.createElement("div")
                                                        navBarPlateFiveSideMenuListItemIconMover.className = `navBarFivePlateSideMenuListItemIconMover${classNumberMapper[listItemsCounter]}`

                                                            var navBarPlateFiveSideMenuListItemIconLineOne = document.createElement("div")
                                                            navBarPlateFiveSideMenuListItemIconLineOne.className = `navBarFivePlateSideMenuListItem${classNumberMapper[listItemsCounter]}IconLineOne`

                                                            var navBarPlateFiveSideMenuListItemIconLineTwo = document.createElement("div")
                                                            navBarPlateFiveSideMenuListItemIconLineTwo.className = `navBarFivePlateSideMenuListItem${classNumberMapper[listItemsCounter]}IconLineTwo`

                                                            var navBarPlateFiveSideMenuListItemIconLineThree = document.createElement("div")
                                                            navBarPlateFiveSideMenuListItemIconLineThree.className = `navBarFivePlateSideMenuListItem${classNumberMapper[listItemsCounter]}IconLineThree`














                                        // STYLE NAV BAR ITEMS xxxxxxxxxxxxxxxxxxxxxx
                                        // //////////////////////////////////////////

                                            navBarPlateFiveSideMenuListItemBlockContainer.style = `
                                            
                                                width:100%;
                                                color:#2C2C2C;
                                                font-size:15px;
                                                text-align:left;
                                                font-weight:700;
                                                position:relative;
                                                font-family:arial, sans-serif;
                                                letter-spacing:3px;
                                                transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;

                                            `

                                                navBarPlateFiveSideMenuListItemTextSide.style = `
                                                
                                                    width:80%;
                                                    height:30px;
                                                    left:0;
                                                    float:left;
                                                    display:inline-block;
                                                    position:relative;
                                                    background:#326fe1;
                                                    transition:all 600ms ease;
                                                    -webkit-transition:all 600ms ease;
                                                    -moz-transition:all 600ms ease;
                                                    -o-transition:all 600ms ease;
                                                    -ms-transition:all 600ms ease;

                                                `

                                                    navBarPlateFiveSideMenuListItemTextActual.style = `
                                                    
                                                        width:100%;
                                                        transition:all 600ms ease;
                                                        -webkit-transition:all 600ms ease;
                                                        -moz-transition:all 600ms ease;
                                                        -o-transition:all 600ms ease;
                                                        -ms-transition:all 600ms ease;

                                                    `














                                                navBarPlateFiveSideMenuListItemIconSide.style = `
                                                
                                                    width:30px;
                                                    height:30px;
                                                    right:0;
                                                    float:right;
                                                    display:inline-block;
                                                    position:relative;
                                                    background:#32e169;
                                                    transition:all 600ms ease;
                                                    -webkit-transition:all 600ms ease;
                                                    -moz-transition:all 600ms ease;
                                                    -o-transition:all 600ms ease;
                                                    -ms-transition:all 600ms ease;

                                                `
        
        
        
        
        
        
        
        
        
        
        
        
                                                
        
                                        // ADD TEXT ITEMS TO LIST ITEM BLOCK xxxxxxxx
                                        // //////////////////////////////////////////

                                            navBarPlateFiveSideMenuListItemTextActual.textContent = `${storeNavBarItems[listItemsCounter]}`
        
        
        
        
        
        
        
        
        
        
        
        
                                                
        
                                        // APPEND NAV BAR ITEMS xxxxxxxxxxxxxxxxxxxxx
                                        // //////////////////////////////////////////

                                            getSideMenuListItemMainContainer.appendChild(navBarPlateFiveSideMenuListItemBlockContainer)

                                                navBarPlateFiveSideMenuListItemBlockContainer.appendChild(navBarPlateFiveSideMenuListItemTextSide)

                                                    navBarPlateFiveSideMenuListItemTextSide.appendChild(navBarPlateFiveSideMenuListItemTextActual)











                                                navBarPlateFiveSideMenuListItemBlockContainer.appendChild(navBarPlateFiveSideMenuListItemIconSide)



                                    }











                    }







                








                

            // //////////////////////////////////////////////////////////////
            // NAV BAR RESIZER CHECKERS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            // //////////////////////////////////////////////////////////////

                function navBarSizingChecks () {


                    for ( navBarFinderCounter = 0; navBarFinderCounter < sectionLoopCounter; navBarFinderCounter ++ ) {

                        var getNavBarSetter = document.querySelector(`.navBar${classNumberMapper[navBarFinderCounter]}`)

                        if ( getNavBarSetter == null || getNavBarSetter == undefined ) {

                        } else {

                            // GET VISIBLE NAV BAR CLASS NAME
                            // //////////////

                                var getVisibleNavBarClassName = getNavBarSetter.className

                            // CHECK IF DOESNT HAVE CHILDREN THEN ADD NEW FROM SCRATCH
                            // //////////////////////

                                if ( 
                                    
                                        getNavBarSetter.children[0] == null || 
                                        getNavBarSetter.children[0] == undefined 
                                    
                                    ) 
                                    
                                {

                                    console.log("NEW COPY LOADING...")

                                    // CHECK WHICH NUMBER IS INCLUDED IN CLASS NAME
                                    // //////////////

                                        
                                        for ( navBarSeekerCounter = 0; navBarSeekerCounter < classNumberMapper.length; navBarSeekerCounter++ ) {

                                            // IF NAV BAR IS A MATCH
                                            // //////

                                                if ( getVisibleNavBarClassName.includes(classNumberMapper[navBarSeekerCounter]) ) {


                                                        // CREATE NEW COPY OF NAV BAR ITEMS
                                                        // //////////////

                                                            storeNavBarMainPlates[navBarSeekerCounter](classNumberMapper[navBarSeekerCounter])


                                                }

                                            // IF NAV BAR IS NOT A MATCH
                                            // //////

                                                else {

                                                }

                                        }

                                }

                            // AND IF HAS CHILDREN THEN REMOVE AND RESTART
                            // //////////////////////

                                else {

                                    console.log("RESTARTING...")

                                    // CHECK WHICH NUMBER IS INCLUDED IN CLASS NAME
                                    // //////////////

                                        
                                        for ( navBarSeekerCounter = 0; navBarSeekerCounter < classNumberMapper.length; navBarSeekerCounter++ ) {

                                            // IF NAV BAR IS A MATCH
                                            // //////

                                                if ( getVisibleNavBarClassName.includes(classNumberMapper[navBarSeekerCounter]) ) {


                                                        // WIPE NAV BAR OF ALL CHILDREN
                                                        // //////////////
                    
                                                            getNavBarSetter.removeChild(getNavBarSetter.children[0])
                    
                                                        // CREATE NEW COPY OF NAV BAR ITEMS
                                                        // //////////////

                                                            storeNavBarMainPlates[navBarSeekerCounter](classNumberMapper[navBarSeekerCounter])


                                                }

                                            // IF NAV BAR IS NOT A MATCH
                                            // //////

                                                else {

                                                }

                                        }



                                }

                        }

                    }


                }









            















        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        // ///////////////////////////////////////////////////////////////////////////////////////////
        // FUNCTION AUTO RUNS ========================================================================
        // ///////////////////////////////////////////////////////////////////////////////////////////
        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

            // RUN TEXT COLLECTIONS -------------------------------------
            // //////////////////////////////////////////////////////////

                getNavBarTitleTextItemFromTextDoc()
                getNavBarItemLinksFromTextDoc()
                getNavBarItemsFromTextDoc()









            















        // EVENTS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        // //////////////////////////////////////////////////////////////

            // EVENTS FOR NAV BARS --------------------------------------
            // //////////////////////////////////////////////////////////

                // CHECK FOR SCREEN SIZE CHANGE -------------------------
                // //////////////////////////////////////////////////////

                    window.addEventListener("resize", function () {

                        // DECLARE PRIMARY VARIABLES ////////////////////////////
                        // //////////////////////////////////////////////////////
    
                            var windowWidth = window.innerWidth
    
                            console.log("SIZE NOW: " + windowWidth)
                            
    
                            // CHECK IF WINDOW IS IN SIZE xxxxxxxxxxxxxxxxxxxxxxx
                            // //////////////////////////////////////////////////
    
                                // FOR SCREEN SIZE 300 --------------------------
                                // //////////////////////////////////////////////
    
                                    if ( windowWidth > 0 && windowWidth < 301 ) {
    
                                        console.log("300 LOCKED IN...")
    
                                            // UPDATE WINDOW SIZE FOR COLLECTOR x
                                            // //////////////////////////////////
    
                                                screenWidthSelector = "200px"
                                                screenWidthResizerSelector = "176px"
    
    
                                            // UPDATE LOGO TITLE AND MENU ITEMS SIZING
                                            // //////////////////////////////////
    
                                                getNavBarLogoAndTitleSideSizing = "76%"
                                                getNavBarMenuItemsSideSizing = "24%"

    
                                            // UPDATE MOBILE AND DESKTOP MENU ITEMS DISPLAY SETTINGS
                                            // //////////////////////////////////
    
                                                getNavBarTitleControl = "none"
                                                getNavBarMobileMenuItemsSetting = "inline-table"
                                                getNavBarDesktopMenuItemsSetting = "none"


                                            // CHECK IF NAV BAR BLOCK EXISTS ----
                                            // //////////////////////////////////

                                                navBarSizingChecks()
    
                                                        
    
                                                        
    
                                    }
    
                                // FOR SCREEN SIZE 500 --------------------------
                                // //////////////////////////////////////////////
    
                                    else if ( windowWidth > 300 && windowWidth < 501 ) {
    
                                        console.log("300 LOCKED IN...")
    
                                            // UPDATE WINDOW SIZE FOR COLLECTOR x
                                            // //////////////////////////////////
    
                                                screenWidthSelector = "250px"
                                                screenWidthResizerSelector = "176px"
    
    
                                            // UPDATE LOGO TITLE AND MENU ITEMS SIZING
                                            // //////////////////////////////////
    
                                                getNavBarLogoAndTitleSideSizing = "76%"
                                                getNavBarMenuItemsSideSizing = "24%"
    
                                            // UPDATE MOBILE AND DESKTOP MENU ITEMS DISPLAY SETTINGS
                                            // //////////////////////////////////
    
                                                getNavBarTitleControl = "none"
                                                getNavBarMobileMenuItemsSetting = "inline-table"
                                                getNavBarDesktopMenuItemsSetting = "none"
                                                

                                            // CHECK IF NAV BAR BLOCK EXISTS ----
                                            // //////////////////////////////////

                                                navBarSizingChecks()
    
                                                        
    
                                    }
    
                                // FOR SCREEN SIZE 800 --------------------------
                                // //////////////////////////////////////////////
    
                                    else if ( windowWidth > 500 && windowWidth < 801 ) {
    
                                        console.log("500 LOCKED IN...")
    
                                            // UPDATE WINDOW SIZE FOR COLLECTOR x
                                            // //////////////////////////////////
    
                                                screenWidthSelector = "300px"
                                                screenWidthResizerSelector = "276px"
    
    
                                            // UPDATE LOGO TITLE AND MENU ITEMS SIZING
                                            // //////////////////////////////////
    
                                                getNavBarLogoAndTitleSideSizing = "80%"
                                                getNavBarMenuItemsSideSizing = "20%"
    
                                            // UPDATE MOBILE AND DESKTOP MENU ITEMS DISPLAY SETTINGS
                                            // //////////////////////////////////
    
                                                getNavBarTitleControl = "block"
                                                getNavBarMobileMenuItemsSetting = "inline-table"
                                                getNavBarDesktopMenuItemsSetting = "none"
                                                

                                            // CHECK IF NAV BAR BLOCK EXISTS ----
                                            // //////////////////////////////////

                                                navBarSizingChecks()
    
                                                        
    
                                    }
    
                                // FOR SCREEN SIZE 1000 -------------------------
                                // //////////////////////////////////////////////
    
                                    else if ( windowWidth > 800 && windowWidth < 1001 ) {
    
                                        console.log("800 LOCKED IN...")
    
                                            // UPDATE WINDOW SIZE FOR COLLECTOR x
                                            // //////////////////////////////////
    
                                                screenWidthSelector = "600px"
                                                screenWidthResizerSelector = "576px"
    
    
                                            // UPDATE LOGO TITLE AND MENU ITEMS SIZING
                                            // //////////////////////////////////
    
                                                getNavBarLogoAndTitleSideSizing = "50%"
                                                getNavBarMenuItemsSideSizing = "50%"
    
                                            // UPDATE MOBILE AND DESKTOP MENU ITEMS DISPLAY SETTINGS
                                            // //////////////////////////////////
    
                                                getNavBarTitleControl = "block"
                                                getNavBarMobileMenuItemsSetting = "none"
                                                getNavBarDesktopMenuItemsSetting = "inline-table"
                                                

                                            // CHECK IF NAV BAR BLOCK EXISTS ----
                                            // //////////////////////////////////

                                                navBarSizingChecks()
    
                                                        
    
                                    }
    
                                // FOR SCREEN SIZE 1200 -------------------------
                                // //////////////////////////////////////////////
    
                                    else if ( windowWidth > 1000 && windowWidth < 1201 ) {
    
                                        console.log("1000 LOCKED IN...")
    
                                            // UPDATE WINDOW SIZE FOR COLLECTOR x
                                            // //////////////////////////////////
    
                                                screenWidthSelector = "800px"
                                                screenWidthResizerSelector = "776px"
    
    
                                            // UPDATE LOGO TITLE AND MENU ITEMS SIZING
                                            // //////////////////////////////////
    
                                                getNavBarLogoAndTitleSideSizing = "50%"
                                                getNavBarMenuItemsSideSizing = "50%"
    
                                            // UPDATE MOBILE AND DESKTOP MENU ITEMS DISPLAY SETTINGS
                                            // //////////////////////////////////
    
                                                getNavBarTitleControl = "block"
                                                getNavBarMobileMenuItemsSetting = "none"
                                                getNavBarDesktopMenuItemsSetting = "inline-table"
                                                

                                            // CHECK IF NAV BAR BLOCK EXISTS ----
                                            // //////////////////////////////////

                                                navBarSizingChecks()
    
                                                        
    
                                    }
    
                                // FOR SCREEN SIZE 1200 + -----------------------
                                // //////////////////////////////////////////////
    
                                    else if ( windowWidth > 1200 ) {
    
                                        console.log("BEYOND LOCKED IN...")
    
                                            // UPDATE WINDOW SIZE FOR COLLECTOR x
                                            // //////////////////////////////////
    
                                                screenWidthSelector = "800px"
                                                screenWidthResizerSelector = "776px"
    
    
                                            // UPDATE LOGO TITLE AND MENU ITEMS SIZING
                                            // //////////////////////////////////
    
                                                getNavBarLogoAndTitleSideSizing = "50%"
                                                getNavBarMenuItemsSideSizing = "50%"
    
                                            // UPDATE MOBILE AND DESKTOP MENU ITEMS DISPLAY SETTINGS
                                            // //////////////////////////////////
    
                                                getNavBarTitleControl = "block"
                                                getNavBarMobileMenuItemsSetting = "none"
                                                getNavBarDesktopMenuItemsSetting = "inline-table"
                                                

                                            // CHECK IF NAV BAR BLOCK EXISTS ----
                                            // //////////////////////////////////

                                                navBarSizingChecks()
    
                                                        
    
                                    }

                    })