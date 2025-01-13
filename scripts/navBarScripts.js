/* DECLARE MAIN STYLES xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
/* /////////////////////////////////////////////////////////////////// */

    /* BODY ELEMENTS STYLES ------------------------------------------ */
    /* /////////////////////////////////////////////////////////////// */

        // VARIABLES xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        // //////////////////////////////////////////////////////////////

            // FOR NAV BAR ONE MAKE /////////////////////////////////////
            // //////////////////////////////////////////////////////////

                var getNavBarOneCushion = document.querySelector(".navBarOne")

                    // SESSION STORAGE RETRIEVE xxxxxxxxxxxxxxxxxxxxxxxxx
                    // //////////////////////////////////////////////////

                        var getNavTempStorage = sessionStorage.getItem("read")
                        var getNavTitleTempStorage = sessionStorage.getItem("title")

                    // NAV BAR STRINGS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    // //////////////////////////////////////////////////

                        var navItemsStringCollector = ""
                        var navTitleItemStringCollector = ""

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

                        var getNavBarDesktopTitleItemsSizing = "40%"
                        var getNavBarDesktopMenuItemsSizing = "60%"

                    // NAV BAR MENU ITEMS DISPLAY SETTINGS xxxxxxxxxxxxxx
                    // //////////////////////////////////////////////////

                        var getNavBarDesktopMenuItemsSetting = "inline-table"
                        var getNavBarMobileMenuItemsSetting = "none"

                    // COUNTER OFFICIAL xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    // //////////////////////////////////////////////////

                        var navBarItemsCounter = 0;

                    // NAV BAR ITEM SELECT NUMBER xxxxxxxxxxxxxxxxxxxxxxx
                    // //////////////////////////////////////////////////

                        var navBarItemFunctionSelect = 0;

                    // SCREEN WIDTH SELECTOR xxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    // //////////////////////////////////////////////////

                        var screenWidthSelector = 0;

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

                var storeNavBarSplits = []
                var storeNavBarTitle = []
                var storeNavBarItemsClassNames = []
                var storeNavBarMobileClickersClassNames = []

            // FOR NAV BAR SELECTED /////////////////////////////////////
            // //////////////////////////////////////////////////////////

                var storeSelectedNavBar = []

            // FOR NAV BAR SELECTED /////////////////////////////////////
            // //////////////////////////////////////////////////////////

                // NAV BAR LINE ITEMS -----------------------------------
                // //////////////////////////////////////////////////////

                    var storeNavBarItemPopulationFunctions = [

                        populateNavBarOneItems,
                        populateNavBarTwoItems
                        
                    ]

                // NAV BAR MOBILE MENU MAKE -----------------------------
                // //////////////////////////////////////////////////////

                    var storeNavBarMobileMenuMakes = [

                        makeMobileMenuOneButton

                    ]

                // BUILD NAV BAR CONTENT ITEMS --------------------------
                // //////////////////////////////////////////////////////

                    var storeNavBarContentBuilds = [

                        buildNavBarItemsContentOne,
                        buildNavBarItemsContentTwo

                    ]

                // BUILD MOBILE SIDE PANELS CONTENT ITEMS ---------------
                // //////////////////////////////////////////////////////

                    var storeNavBarMobileSidePanels = [

                        makeMobileSidePanelOne,
                        makeMobileSidePanelTwo

                    ]

                // BUILD POPULATE MOBILE MENU ITEMS ---------------------
                // //////////////////////////////////////////////////////

                    var storeNavBarMobileMenuItemsPopulates = [

                        populateMobileMenuItemsOne,
                        populateMobileMenuItemsTwo

                    ]









            















        // AUTO RUNS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        // //////////////////////////////////////////////////////////////

            // AUTO RUNS FOR NAV BARS -----------------------------------
            // //////////////////////////////////////////////////////////

                detectCurrentWindowSize()


































        // FUNCTIONS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        // //////////////////////////////////////////////////////////////











        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        // ///////////////////////////////////////////////////////////////////////////////////////////
        // NAV BAR CREATION SECTION ==================================================================
        // ///////////////////////////////////////////////////////////////////////////////////////////
        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


            // BUILD ELEMENTS FOR NAV BAR OPTION ONE --------------------
            // //////////////////////////////////////////////////////////

                // GET NAV BAR TITLE FROM TEXT DOC //////////////////////////
                // //////////////////////////////////////////////////////////

                    function getNavBarTitleTextItemFromTextDoc () {

                        // RUN FETCH FROM TEXT DOC --------------------------
                        // //////////////////////////////////////////////////

                            // FETCH DOC AND STORE IN TEMP MEMORY xxxxxxxxxxx
                            // //////////////////////////////////////////////


                                fetch("/dox/navOne/navBarTitleText.txt")
                                .then(res => res.text())
                                .then((text) => {
                                    
                                    sessionStorage.setItem("title", text)
                                
                                })

                    }




                    function getNavBarItemsFromTextDoc () {

                        // RUN FETCH FROM TEXT DOC --------------------------
                        // //////////////////////////////////////////////////

                            // FETCH DOC AND STORE IN TEMP MEMORY xxxxxxxxxxx
                            // //////////////////////////////////////////////

                                fetch("/dox/navOne/navBarText.txt")
                                    .then(res => res.text())
                                    .then((text) => {
                                        
                                        sessionStorage.setItem("read", text)
                                    
                                    })



                            // RETRIEVE STRING FROM SESSION STORAGE xxxxxxxxx
                            // //////////////////////////////////////////////

                                // CHECK IF EMPTY BEFORE CONTINUING ---------
                                // //////////////////////////////////////////

                                    if ( getNavTempStorage == null || getNavTempStorage == "" ) {

                                    }

                                // IF NOT EMPTY THEN CONTINUE ---------------
                                // //////////////////////////////////////////

                                    else {


                                        // SPLIT COLLECTED FULL STRING //////
                                        // //////////////////////////////////

                                            navItemsStringCollector = getNavTempStorage.split(",")

                                                // RUN LOOP FOR COLLECTED SPLITS 
                                                // //////////////////////////

                                                    // CHECK IF ELEMENTS ALREADY EXIST AND THEN EMPTY OUT ARRAY BEFORE POPULATION
                                                    // //////////////////////

                                                        // IF NOT 0 ---------
                                                        // //////////////////

                                                            if ( storeNavBarSplits.length > 0 ) {

                                                                console.log("already populated...")

                                                            }

                                                        // IF EMPTY ---------
                                                        // //////////////////

                                                            else {

                                                                for ( splitsCounter = 0; splitsCounter < navItemsStringCollector.length; splitsCounter ++ ) {
            
                                                                    storeNavBarSplits.push(navItemsStringCollector[splitsCounter])
            
                                                                }

                                                                console.log("BEATS UP: " + navBarItemFunctionSelect)

                                                            }

                                    }





                    

                                // CHECK IF NAV ITEMS IN DOC ARE PRESENT ====
                                // //////////////////////////////////////////

                                    if ( storeNavBarSplits.length < 1 || storeNavBarSplits.length == 0 ) {

                                        for ( presentDocItemsCounter = 0; presentDocItemsCounter < 4; presentDocItemsCounter++ ) {

                                            storeNavBarSplits.push(classNumberMapper[presentDocItemsCounter])

                                        }

                                    }





                    

                                // UPDATE NAV BAR ITEMS COUNTER =============
                                // //////////////////////////////////////////

                                    navBarItemsCounter = storeNavBarSplits.length


                                        // START BUILDING NAVBAR ITEMS xxxxxx
                                        // //////////////////////////////////

                                            
                                            storeNavBarContentBuilds[navBarItemFunctionSelect](storeSelectedNavBar, navBarClassNameNumberSelector)


                    }





                // GET SELECTED NAV BAR /////////////////////////////////////
                // //////////////////////////////////////////////////////////

                    function getLivingNavBar () {


                        // RUN LOOP FOR NAV BAR SELECTOR --------------------
                        // //////////////////////////////////////////////////

                            for ( navBarCounter = 0; navBarCounter < storeNavBarVariations.length; navBarCounter ++ ) {



                                // CHECK WHICH NAV BAR IS AVAILABLE ON THE PAGE
                                // //////////////////////////////////////////

                                    if ( 
                                        
                                        storeNavBarVariations[navBarCounter] == null || 
                                        storeNavBarVariations[navBarCounter] == undefined
                                    
                                    ) 
                                    
                                    {

                                    }



                                // IF EXISTS ON THE PAGE --------------------
                                // //////////////////////////////////////////

                                    else {

                                        console.log("this one is alive: " + storeNavBarVariations[navBarCounter].className)

                                        console.log("DIVS: " + storeNavBarVariations)

                                            // RUN CHECK TO SEE WHICH NUMBER IS SELECTED 
                                            // //////////////////////////////

                                                var getLivingNavBar = storeNavBarVariations[navBarCounter].className

                                                for ( navBarNumberCounter = 0; navBarNumberCounter < classNumberMapper.length; navBarNumberCounter ++ ) {

                                                    if ( getLivingNavBar.includes(classNumberMapper[navBarNumberCounter]) ) {

                                                        // UPDATE NAV BAR NUMBER SELECTOR
                                                        // //////////////////

                                                            navBarClassNameNumberSelector = classNumberMapper[navBarNumberCounter]
                                                            navBarItemFunctionSelect = navBarNumberCounter

                                                    }

                                                }

                                        storeSelectedNavBar.push(storeNavBarVariations[navBarCounter].className)


                                            // START THE BUILD PROCESS ------
                                            // //////////////////////////////

                                                getNavBarItemsFromTextDoc()
                                                getNavBarTitleTextItemFromTextDoc()

                                                

                                    }


                            }


                    }





                // POPULATE NAV BAR WITH GATHERED INFO //////////
                // //////////////////////////////////////////////

                    function buildNavBarItemsContentOne (selectedNavBarPlate, selectedClassNumber) {

                        // DECLARE VARIABLES FOR USE ------------
                        // //////////////////////////////////////

                            // FOR SETTER PLATE xxxxxxxxxxxxxxxxx
                            // //////////////////////////////////

                                var getNavPlate = document.querySelector(`.${selectedNavBarPlate}`)






                        // FUNCTIONS ----------------------------
                        // //////////////////////////////////////

                            // CREATE ELEMENTS FOR NAV BAR ELEMENTS
                            // //////////////////////////////////

                                // NAV BAR DESKTOP ELEMENTS xxxxx
                                // //////////////////////////////

                                    // NAV BAR MAIN CONTAIN OUTTER RING CONTAINER
                                    // //////////////////////////

                                        var createNavBarMainRing = document.createElement("div")
                                        createNavBarMainRing.className = `navBar${selectedClassNumber}MainRingContainer`

                                        var createNavBarMainRingResizer = document.createElement("div")
                                        createNavBarMainRingResizer.className = `navBar${selectedClassNumber}MainRingResizer`



                                    // STYLE NAV BAR MAIN CONTAIN OUTTER RING CONTAINER
                                    // //////////////////////////

                                        createNavBarMainRing.style = `
                                        
                                            width:${screenWidthSelector}px;
                                            top:30px;
                                            left:0px;
                                            right:0px;
                                            margin:0px auto;
                                            padding:10px 0px;
                                            overflow:hidden;
                                            position:fixed;
                                            box-shadow:0px 30px 30px -20px rgba(0,0,0,0.25);
                                            background:#FFFFFF;
                                            border-radius:1000px;
                                            transition:all 600ms ease;
                                            -webkit-transition:all 600ms ease;
                                            -moz-transition:all 600ms ease;
                                            -o-transition:all 600ms ease;
                                            -ms-transition:all 600ms ease;

                                        `

                                            createNavBarMainRingResizer.style = `
                                            
                                                width:95%;
                                                height:30px;
                                                margin:0px auto;
                                                position:relative;
                                                transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;

                                            `


                                                // APPLY TO RESEPECTED PARENT
                                                // //////////////////

                                                    getNavPlate.appendChild(createNavBarMainRing)
                                                    createNavBarMainRing.appendChild(createNavBarMainRingResizer)











                                        




                                    // LOGO TITLE SIDE CONTAINER
                                    // //////////////////////////

                                        var createNavBarLogoTitleSideContainer = document.createElement("div")
                                        createNavBarLogoTitleSideContainer.className = `navBar${selectedClassNumber}LogoTitleSideContainer`



                                    // STYLE NAV BAR MAIN CONTAIN OUTTER RING CONTAINER
                                    // //////////////////////////

                                        createNavBarLogoTitleSideContainer.style = `
                                        
                                            width:${getNavBarDesktopTitleItemsSizing};
                                            height:100%;
                                            float:left;
                                            position:relative;
                                            transition:all 600ms ease;
                                            -webkit-transition:all 600ms ease;
                                            -moz-transition:all 600ms ease;
                                            -o-transition:all 600ms ease;
                                            -ms-transition:all 600ms ease;

                                        `


                                            // APPLY TO RESEPECTED PARENT
                                            // //////////////////

                                                createNavBarMainRingResizer.appendChild(createNavBarLogoTitleSideContainer)









                                                    // LOGO ACTUAL CONTAINER
                                                    // //////////

                                                        var createNavBarLogoContainer = document.createElement("div")
                                                        createNavBarLogoContainer.className = `navBar${selectedClassNumber}LogoContainer`

                                                        var createNavBarLogoActual = document.createElement("div")
                                                        createNavBarLogoActual.className = `navBar${selectedClassNumber}LogoActual`



                                                            // STYLE LOGO ACTUAL CONTAINER
                                                            // //////////////////////////

                                                                createNavBarLogoContainer.style = `
                                                                
                                                                    width:37.5%;
                                                                    height:100%;
                                                                    float:left;
                                                                    display:inline-table;
                                                                    transition:all 600ms ease;
                                                                    -webkit-transition:all 600ms ease;
                                                                    -moz-transition:all 600ms ease;
                                                                    -o-transition:all 600ms ease;
                                                                    -ms-transition:all 600ms ease;

                                                                `

                                                                    createNavBarLogoActual.style = `
                                                                    
                                                                        width:80%;
                                                                        height:100%;
                                                                        margin:0px auto;
                                                                        position:relative;
                                                                        background:#54b351;
                                                                        transition:all 600ms ease;
                                                                        -webkit-transition:all 600ms ease;
                                                                        -moz-transition:all 600ms ease;
                                                                        -o-transition:all 600ms ease;
                                                                        -ms-transition:all 600ms ease;

                                                                    `


                                                                        // APPLY TO RESEPECTED PARENT
                                                                        // //

                                                                            createNavBarLogoTitleSideContainer.appendChild(createNavBarLogoContainer)
                                                                            createNavBarLogoContainer.appendChild(createNavBarLogoActual)









                                                    // LOGO TITLE DIVIDER CONTAINER
                                                    // //////////

                                                        var createNavBarLogoTitleDividerContainer = document.createElement("div")
                                                        createNavBarLogoTitleDividerContainer.className = `navBar${selectedClassNumber}LogoTitleDividerContainer`

                                                        var createNavBarLogoTitleDividerActual = document.createElement("div")
                                                        createNavBarLogoTitleDividerActual.className = `navBar${selectedClassNumber}LogoTitleDividerActual`



                                                            // STYLE LOGO TITLE DIVIDER CONTAINER
                                                            // //////////////////////////

                                                                createNavBarLogoTitleDividerContainer.style = `
                                                                
                                                                    width:5%;
                                                                    height:100%;
                                                                    float:left;
                                                                    display:inline-table;
                                                                    position:relative;
                                                                    transition:all 600ms ease;
                                                                    -webkit-transition:all 600ms ease;
                                                                    -moz-transition:all 600ms ease;
                                                                    -o-transition:all 600ms ease;
                                                                    -ms-transition:all 600ms ease;

                                                                `

                                                                    createNavBarLogoTitleDividerActual.style = `
                                                                    
                                                                        width:2px;
                                                                        height:100%;
                                                                        margin:0px auto;
                                                                        position:relative;
                                                                        background:#efefef;
                                                                        transition:all 600ms ease;
                                                                        -webkit-transition:all 600ms ease;
                                                                        -moz-transition:all 600ms ease;
                                                                        -o-transition:all 600ms ease;
                                                                        -ms-transition:all 600ms ease;

                                                                    `


                                                                    // APPLY TO RESEPECTED PARENT
                                                                    // //

                                                                        createNavBarLogoTitleSideContainer.appendChild(createNavBarLogoTitleDividerContainer)
                                                                        createNavBarLogoTitleDividerContainer.appendChild(createNavBarLogoTitleDividerActual)









                                                    // TITLE ACTUAL CONTAINER
                                                    // //////////

                                                        var createNavBarTitleContainer = document.createElement("div")
                                                        createNavBarTitleContainer.className = `navBar${selectedClassNumber}TitleContainer`

                                                        var createNavBarTitleActual = document.createElement("div")
                                                        createNavBarTitleActual.className = `navBar${selectedClassNumber}TitleActual`



                                                            // STYLE LOGO TITLE DIVIDER CONTAINER
                                                            // //////////////////////////

                                                                createNavBarTitleContainer.style = `
                                                                
                                                                    width:57.5%;
                                                                    height:100%;
                                                                    float:left;
                                                                    display:inline-table;
                                                                    position:relative;
                                                                    transition:all 600ms ease;
                                                                    -webkit-transition:all 600ms ease;
                                                                    -moz-transition:all 600ms ease;
                                                                    -o-transition:all 600ms ease;
                                                                    -ms-transition:all 600ms ease;

                                                                `

                                                                    createNavBarTitleActual.style = `
                                                                    
                                                                        width:85%;
                                                                        height:100%;
                                                                        color:#2C2C2C;
                                                                        margin:0px auto;
                                                                        position:relative;
                                                                        font-size:12px;
                                                                        text-align:left;
                                                                        line-height:30px;
                                                                        letter-spacing:2px;
                                                                        text-transform:uppercase;
                                                                        font-family:arial, sans-serif;
                                                                        transition:all 600ms ease;
                                                                        -webkit-transition:all 600ms ease;
                                                                        -moz-transition:all 600ms ease;
                                                                        -o-transition:all 600ms ease;
                                                                        -ms-transition:all 600ms ease;

                                                                    `



                                                            // INCLUDE TEXT TITLE FOR NAV BAR
                                                            // //////////////////////////

                                                                if ( getNavTitleTempStorage == "" || getNavTitleTempStorage == undefined || getNavTitleTempStorage == null) {

                                                                    createNavBarTitleActual.textContent = `NAVBAR`

                                                                }

                                                                else {

                                                                    createNavBarTitleActual.textContent = `${getNavTitleTempStorage}`

                                                                }


                                                                    // APPLY TO RESEPECTED PARENT
                                                                    // //

                                                                        createNavBarLogoTitleSideContainer.appendChild(createNavBarTitleContainer)
                                                                        createNavBarTitleContainer.appendChild(createNavBarTitleActual)














                                    // CONTENT SIDE CONTAINER ---
                                    // //////////////////////////

                                        var createNavBarContentSideContainer = document.createElement("div")
                                        createNavBarContentSideContainer.className = `navBar${selectedClassNumber}ContentSideContainer`



                                            // STYLE LOGO TITLE DIVIDER CONTAINER
                                            // //////////////////////////

                                                createNavBarContentSideContainer.style = `
                                                
                                                    width:${getNavBarDesktopMenuItemsSizing};
                                                    height:100%;
                                                    float:right;
                                                    position:relative;
                                                    transition:all 600ms ease;
                                                    -webkit-transition:all 600ms ease;
                                                    -moz-transition:all 600ms ease;
                                                    -o-transition:all 600ms ease;
                                                    -ms-transition:all 600ms ease;

                                                `


                                                    // APPLY TO RESEPECTED PARENT
                                                    // //////////////////

                                                        createNavBarMainRingResizer.appendChild(createNavBarContentSideContainer)









                                                    // MENU ITEMS CONTAINER DESKTOP
                                                    // //////////

                                                        var createNavBarContentSideMenuItemsDesktopContainer = document.createElement("div")
                                                        createNavBarContentSideMenuItemsDesktopContainer.className = `navBar${selectedClassNumber}ContentSideMenuItemsDesktopContainer`

                                                        var createNavBarContentSideMenuItemsDesktopResizer = document.createElement("div")
                                                        createNavBarContentSideMenuItemsDesktopResizer.className = `navBar${selectedClassNumber}ContentSideMenuItemsDesktopResizer`



                                                            // STYLE LOGO TITLE DIVIDER CONTAINER
                                                            // //////////////////////////

                                                                createNavBarContentSideMenuItemsDesktopContainer.style = `
                                                                
                                                                    right:0;
                                                                    float:right;
                                                                    z-index:1;
                                                                    display:${getNavBarDesktopMenuItemsSetting};
                                                                    padding:0px 0px 0px 0px;
                                                                    position:absolute;
                                                                    transition:all 600ms ease;
                                                                    -webkit-transition:all 600ms ease;
                                                                    -moz-transition:all 600ms ease;
                                                                    -o-transition:all 600ms ease;
                                                                    -ms-transition:all 600ms ease;

                                                                `

                                                                    createNavBarContentSideMenuItemsDesktopResizer.style = `
                                                                    
                                                                        width:100%;
                                                                        font-size:12px;
                                                                        line-height:30px;
                                                                        letter-spacing:2px;
                                                                        text-transform:uppercase;
                                                                        font-family:arial, sans-serif;
                                                                        transition:all 600ms ease;
                                                                        -webkit-transition:all 600ms ease;
                                                                        -moz-transition:all 600ms ease;
                                                                        -o-transition:all 600ms ease;
                                                                        -ms-transition:all 600ms ease;

                                                                    `


                                                                        // APPLY TO RESEPECTED PARENT
                                                                        // //

                                                                            createNavBarContentSideContainer.appendChild(createNavBarContentSideMenuItemsDesktopContainer)
                                                                            createNavBarContentSideMenuItemsDesktopContainer.appendChild(createNavBarContentSideMenuItemsDesktopResizer)









                                                    // MENU ITEMS CONTAINER MOBILE
                                                    // //////////

                                                        var createNavBarContentSideMenuItemsMobileContainer = document.createElement("div")
                                                        createNavBarContentSideMenuItemsMobileContainer.className = `navBar${selectedClassNumber}ContentSideMenuItemsMobileContainer`

                                                        var createNavBarContentSideMenuItemsDesktopResizer = document.createElement("div")
                                                        createNavBarContentSideMenuItemsDesktopResizer.className = `navBar${selectedClassNumber}ContentSideMenuItemsMobileResizer`

                                                        var createNavBarContentSideMenuItemsMobileIconBlockMain = document.createElement("div")
                                                        createNavBarContentSideMenuItemsMobileIconBlockMain.className = `navBar${selectedClassNumber}ContentSideMenuItemsMobileIconBlockMain`



                                                            // STYLE LOGO TITLE DIVIDER CONTAINER
                                                            // //////////////////////////

                                                                createNavBarContentSideMenuItemsMobileContainer.style = `
                                                                
                                                                    width:100%;
                                                                    height:100%;
                                                                    float:right;
                                                                    z-index:1;
                                                                    display:${getNavBarMobileMenuItemsSetting};
                                                                    padding:0px 0px 0px 0px;
                                                                    position:absolute;
                                                                    transition:all 600ms ease;
                                                                    -webkit-transition:all 600ms ease;
                                                                    -moz-transition:all 600ms ease;
                                                                    -o-transition:all 600ms ease;
                                                                    -ms-transition:all 600ms ease;

                                                                `

                                                                    createNavBarContentSideMenuItemsDesktopResizer.style = `
                                                                    
                                                                        width:98%;
                                                                        height:100%;
                                                                        margin-left:6px;
                                                                        position:relative;
                                                                        transition:all 600ms ease;
                                                                        -webkit-transition:all 600ms ease;
                                                                        -moz-transition:all 600ms ease;
                                                                        -o-transition:all 600ms ease;
                                                                        -ms-transition:all 600ms ease;

                                                                    `

                                                                        createNavBarContentSideMenuItemsMobileIconBlockMain.style = `
                                                                        
                                                                            width:30px;
                                                                            height:30px;
                                                                            float:right;
                                                                            display:inline-table;
                                                                            position:relative;
                                                                            /*background:#2C2C2C;*/
                                                                            border-radius:1000px;
                                                                            transition:all 600ms ease;
                                                                            -webkit-transition:all 600ms ease;
                                                                            -moz-transition:all 600ms ease;
                                                                            -o-transition:all 600ms ease;
                                                                            -ms-transition:all 600ms ease;

                                                                        `


                                                                            // APPLY TO RESEPECTED PARENT
                                                                            // //

                                                                                createNavBarContentSideContainer.appendChild(createNavBarContentSideMenuItemsMobileContainer)
                                                                                createNavBarContentSideMenuItemsMobileContainer.appendChild(createNavBarContentSideMenuItemsDesktopResizer)
                                                                                createNavBarContentSideMenuItemsDesktopResizer.appendChild(createNavBarContentSideMenuItemsMobileIconBlockMain)








                        // AUTO RUN FUNCTIONS -------------------
                        // //////////////////////////////////////

                            // RUN FUNCTION FOR SELECTED NAV BAR
                            // //////////////////////////////////

                                storeNavBarItemPopulationFunctions[navBarItemFunctionSelect]()
                                storeNavBarMobileMenuMakes[navBarItemFunctionSelect]()







                    }





                    

                    function buildNavBarItemsContentTwo (selectedNavBarPlate, selectedClassNumber) {

                        // DECLARE VARIABLES FOR USE ------------
                        // //////////////////////////////////////

                            // FOR SETTER PLATE xxxxxxxxxxxxxxxxx
                            // //////////////////////////////////

                                var getNavPlate = document.querySelector(`.${selectedNavBarPlate}`)






                        // FUNCTIONS ----------------------------
                        // //////////////////////////////////////

                            // CREATE ELEMENTS FOR NAV BAR ELEMENTS
                            // //////////////////////////////////

                                // NAV BAR DESKTOP ELEMENTS xxxxx
                                // //////////////////////////////

                                    // NAV BAR MAIN CONTAIN OUTTER RING CONTAINER
                                    // //////////////////////////

                                        var createNavBarMainPlateContainer = document.createElement("div")
                                        createNavBarMainPlateContainer.className = `navBar${selectedClassNumber}MainPlateContainer`

                                        var createNavBarMainContentResizerContainer = document.createElement("div")
                                        createNavBarMainContentResizerContainer.className = `navBar${selectedClassNumber}MainContentResizerContainer`



                                    // STYLE NAV BAR MAIN CONTAIN OUTTER RING CONTAINER
                                    // //////////////////////////

                                        createNavBarMainPlateContainer.style = `
                                        
                                            width:80%;
                                            height:50px;
                                            top:30px;
                                            left:0px;
                                            right:0px;
                                            margin:0px auto;
                                            position:relative;
                                            background:rgba(255, 255, 255, 0.18);
                                            backdrop-filter:blur(100px);
                                            box-shadow:0px 20px 30px -10px rgba(0, 0, 0, 0.2);
                                            transition:all 600ms ease;
                                            -webkit-transition:all 600ms ease;
                                            -moz-transition:all 600ms ease;
                                            -o-transition:all 600ms ease;
                                            -ms-transition:all 600ms ease;

                                        `

                                            createNavBarMainContentResizerContainer.style = `
                                            
                                                width:100%;
                                                height:50px;
                                                transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;

                                            `


                                                // APPLY TO RESEPECTED PARENT
                                                // //////////////////

                                                    getNavPlate.appendChild(createNavBarMainPlateContainer)
                                                    createNavBarMainPlateContainer.appendChild(createNavBarMainContentResizerContainer)











                                        




                                    // LOGO TITLE SIDE CONTAINER
                                    // //////////////////////////

                                        var createNavBarMainLogoSideContainer = document.createElement("div")
                                        createNavBarMainLogoSideContainer.className = `navBar${selectedClassNumber}MainLogoSideContainer`



                                    // STYLE NAV BAR MAIN CONTAIN OUTTER RING CONTAINER
                                    // //////////////////////////

                                        createNavBarMainLogoSideContainer.style = `
                                        
                                            width:30%;
                                            height:50px;
                                            float:left;
                                            position:relative;
                                            /* background:#61b351; */
                                            transition:all 600ms ease;
                                            -webkit-transition:all 600ms ease;
                                            -moz-transition:all 600ms ease;
                                            -o-transition:all 600ms ease;
                                            -ms-transition:all 600ms ease;

                                        `


                                            // APPLY TO RESEPECTED PARENT
                                            // //////////////////

                                                createNavBarMainContentResizerContainer.appendChild(createNavBarMainLogoSideContainer)









                                                    // LOGO ACTUAL CONTAINER
                                                    // //////////

                                                        var createNavBarMainLogoSideLogoHolder = document.createElement("div")
                                                        createNavBarMainLogoSideLogoHolder.className = `navBar${selectedClassNumber}MainLogoSideLogoHolder`

                                                        var createNavBarMainLogoSideLogoActual = document.createElement("div")
                                                        createNavBarMainLogoSideLogoActual.className = `navBar${selectedClassNumber}MainLogoSideLogoActual`



                                                            // STYLE LOGO ACTUAL CONTAINER
                                                            // //////////////////////////

                                                                createNavBarMainLogoSideLogoHolder.style = `
                                                                
                                                                    width:90%;
                                                                    height:60%;
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

                                                                    createNavBarMainLogoSideLogoActual.style = `
                                                                    
                                                                        width:100%;
                                                                        height:100%;
                                                                        position:relative;
                                                                        background:#77e644;
                                                                        transition:all 600ms ease;
                                                                        -webkit-transition:all 600ms ease;
                                                                        -moz-transition:all 600ms ease;
                                                                        -o-transition:all 600ms ease;
                                                                        -ms-transition:all 600ms ease;

                                                                    `


                                                                        // APPLY TO RESEPECTED PARENT
                                                                        // //

                                                                            createNavBarMainLogoSideContainer.appendChild(createNavBarMainLogoSideLogoHolder)
                                                                            createNavBarMainLogoSideLogoHolder.appendChild(createNavBarMainLogoSideLogoActual)














                                    // CONTENT SIDE CONTAINER ---
                                    // //////////////////////////

                                        var createNavBarMainContentSideContainer = document.createElement("div")
                                        createNavBarMainContentSideContainer.className = `navBar${selectedClassNumber}MainContentSideContainer`



                                            // STYLE LOGO TITLE DIVIDER CONTAINER
                                            // //////////////////////////

                                                createNavBarMainContentSideContainer.style = `
                                                
                                                    width:70%;
                                                    height:50px;
                                                    float:right;
                                                    position:relative;
                                                    /* background:#5153b3; */
                                                    transition:all 600ms ease;
                                                    -webkit-transition:all 600ms ease;
                                                    -moz-transition:all 600ms ease;
                                                    -o-transition:all 600ms ease;
                                                    -ms-transition:all 600ms ease;

                                                `


                                                    // APPLY TO RESEPECTED PARENT
                                                    // //////////////////

                                                        createNavBarMainContentResizerContainer.appendChild(createNavBarMainContentSideContainer)









                                                    // MENU ITEMS CONTAINER DESKTOP
                                                    // //////////

                                                        var createNavBarMainMenuItemsDesktopContainer = document.createElement("div")
                                                        createNavBarMainMenuItemsDesktopContainer.className = `navBar${selectedClassNumber}MainMenuItemsDesktopContainer`

                                                        var createNavBarMainMenuItemsDesktopResizer = document.createElement("div")
                                                        createNavBarMainMenuItemsDesktopResizer.className = `navBar${selectedClassNumber}MainMenuItemsDesktopResizer`



                                                            // STYLE DESKTOP MENU ITEMS
                                                            // //////////////////////////

                                                                createNavBarMainMenuItemsDesktopContainer.style = `
                                                                
                                                                    width:95%;
                                                                    height:100%;
                                                                    top:0;
                                                                    left:0;
                                                                    right:0;
                                                                    bottom:0;
                                                                    margin:auto;
                                                                    display:block;
                                                                    display:${getNavBarDesktopMenuItemsSetting};
                                                                    transition:all 600ms ease;
                                                                    -webkit-transition:all 600ms ease;
                                                                    -moz-transition:all 600ms ease;
                                                                    -o-transition:all 600ms ease;
                                                                    -ms-transition:all 600ms ease;

                                                                `

                                                                    createNavBarMainMenuItemsDesktopResizer.style = `
                                                                    
                                                                        width:100%;
                                                                        height:100%;
                                                                        text-align:right;
                                                                        position:relative;
                                                                        transition:all 600ms ease;
                                                                        -webkit-transition:all 600ms ease;
                                                                        -moz-transition:all 600ms ease;
                                                                        -o-transition:all 600ms ease;
                                                                        -ms-transition:all 600ms ease;

                                                                    `


                                                                        // APPLY TO RESEPECTED PARENT
                                                                        // //

                                                                            createNavBarMainContentSideContainer.appendChild(createNavBarMainMenuItemsDesktopContainer)
                                                                            createNavBarMainMenuItemsDesktopContainer.appendChild(createNavBarMainMenuItemsDesktopResizer)









                                                    // MENU ITEMS CONTAINER MOBILE
                                                    // //////////

                                                        var createNavBarMainItemsMobileMenuContainer = document.createElement("div")
                                                        createNavBarMainItemsMobileMenuContainer.className = `navBar${selectedClassNumber}MainItemsMobileMenuContainer`

                                                        var createNavBarMainItemsMobileMenuResizer = document.createElement("div")
                                                        createNavBarMainMenuItemsDesktopResizer.className = `navBar${selectedClassNumber}MainItemsMobileMenuResizer`

                                                        var createNavBarMainItemsMobileMenuButtonContainer = document.createElement("div")
                                                        createNavBarMainItemsMobileMenuButtonContainer.className = `navBar${selectedClassNumber}MainItemsMobileMenuButtonContainer`



                                                            // STYLE MOBILE MENU ITEMS
                                                            // //////////////////////////

                                                                createNavBarMainItemsMobileMenuContainer.style = `
                                                                
                                                                    width:97%;
                                                                    height:60%;
                                                                    top:0;
                                                                    bottom:0;
                                                                    margin:auto;
                                                                    display:${getNavBarMobileMenuItemsSetting};
                                                                    position:absolute;
                                                                    transition:all 600ms ease;
                                                                    -webkit-transition:all 600ms ease;
                                                                    -moz-transition:all 600ms ease;
                                                                    -o-transition:all 600ms ease;
                                                                    -ms-transition:all 600ms ease;

                                                                `

                                                                    createNavBarMainItemsMobileMenuResizer.style = `
                                                                    
                                                                        width:100%;
                                                                        height:100%;
                                                                        top:0;
                                                                        bottom:0;
                                                                        margin:auto;
                                                                        text-align:right;
                                                                        position:absolute;
                                                                        transition:all 600ms ease;
                                                                        -webkit-transition:all 600ms ease;
                                                                        -moz-transition:all 600ms ease;
                                                                        -o-transition:all 600ms ease;
                                                                        -ms-transition:all 600ms ease;

                                                                    `

                                                                    createNavBarMainItemsMobileMenuButtonContainer.style = `
                                                                        
                                                                            width:30px;
                                                                            height:100%;
                                                                            float:right;
                                                                            position:relative;
                                                                            background:#519cb3;
                                                                            border-radius:1000px;
                                                                            transition:all 600ms ease;
                                                                            -webkit-transition:all 600ms ease;
                                                                            -moz-transition:all 600ms ease;
                                                                            -o-transition:all 600ms ease;
                                                                            -ms-transition:all 600ms ease;

                                                                        `


                                                                            // APPLY TO RESEPECTED PARENT
                                                                            // //

                                                                                createNavBarMainContentSideContainer.appendChild(createNavBarMainItemsMobileMenuContainer)
                                                                                createNavBarMainItemsMobileMenuContainer.appendChild(createNavBarMainItemsMobileMenuResizer)
                                                                                createNavBarMainItemsMobileMenuResizer.appendChild(createNavBarMainItemsMobileMenuButtonContainer)









                                                                                    // CLICKERS MAKES
                                                                                    // //////////

                                                                                        var createNavBarMainItemsMobileMenuButtonClickersContainer = document.createElement("div")
                                                                                        createNavBarMainItemsMobileMenuButtonClickersContainer.className = `navBar${selectedClassNumber}MainItemsMobileMenuButtonClickersContainer`

                                                                                            var createNavBarMainItemsMobileMenuButtonClickerOn = document.createElement("div")
                                                                                            createNavBarMainItemsMobileMenuButtonClickerOn.className = `navBar${selectedClassNumber}MainItemsMobileMenuButtonClickerOn`

                                                                                            var createNavBarMainItemsMobileMenuButtonClickerOff = document.createElement("div")
                                                                                            createNavBarMainItemsMobileMenuButtonClickerOff.className = `navBar${selectedClassNumber}MainItemsMobileMenuButtonClickerOff`



                                                                                                // STYLE MOBILE MENU ITEMS
                                                                                                // //////////////////////////

                                                                                                    createNavBarMainItemsMobileMenuButtonClickersContainer.style = `
                                                                                                    
                                                                                                        width:100%;
                                                                                                        height:100%;
                                                                                                        z-index:1;
                                                                                                        position:absolute;
                                                                                                        transition:all 600ms ease;
                                                                                                        -webkit-transition:all 600ms ease;
                                                                                                        -moz-transition:all 600ms ease;
                                                                                                        -o-transition:all 600ms ease;
                                                                                                        -ms-transition:all 600ms ease;

                                                                                                    `

                                                                                                        createNavBarMainItemsMobileMenuButtonClickerOn.style = `
                                                                                                        
                                                                                                            width:100%;
                                                                                                            height:100%;
                                                                                                            z-index:1;
                                                                                                            cursor:pointer;
                                                                                                            position:absolute;
                                                                                                            background:#e6a044;
                                                                                                            transition:all 600ms ease;
                                                                                                            -webkit-transition:all 600ms ease;
                                                                                                            -moz-transition:all 600ms ease;
                                                                                                            -o-transition:all 600ms ease;
                                                                                                            -ms-transition:all 600ms ease;

                                                                                                        `

                                                                                                        createNavBarMainItemsMobileMenuButtonClickerOff.style = `
                                                                                                        
                                                                                                            width:100%;
                                                                                                            height:100%;
                                                                                                            z-index:0;
                                                                                                            cursor:pointer;
                                                                                                            position:absolute;
                                                                                                            background:#444fe6;
                                                                                                            transition:all 600ms ease;
                                                                                                            -webkit-transition:all 600ms ease;
                                                                                                            -moz-transition:all 600ms ease;
                                                                                                            -o-transition:all 600ms ease;
                                                                                                            -ms-transition:all 600ms ease;

                                                                                                        `


                                                                                                            // APPLY TO RESEPECTED PARENT
                                                                                                            // //

                                                                                                                createNavBarMainItemsMobileMenuButtonContainer.appendChild(createNavBarMainItemsMobileMenuButtonClickersContainer)

                                                                                                                    createNavBarMainItemsMobileMenuButtonClickersContainer.appendChild(createNavBarMainItemsMobileMenuButtonClickerOn)
                                                                                                                    createNavBarMainItemsMobileMenuButtonClickersContainer.appendChild(createNavBarMainItemsMobileMenuButtonClickerOff)



                                                                                                                        // PUSH CLICKER CLASS NAMES INTO ARRAY
                                                                                                                        // //

                                                                                                                            storeNavBarMobileClickersClassNames.push(`navBar${selectedClassNumber}MainItemsMobileMenuButtonClickerOn`)
                                                                                                                            storeNavBarMobileClickersClassNames.push(`navBar${selectedClassNumber}MainItemsMobileMenuButtonClickerOff`)




                                                                                    // ICON MAKES
                                                                                    // //////////

                                                                                        var createNavBarMainItemsMobileMenuButtonIconContainer = document.createElement("div")
                                                                                        createNavBarMainItemsMobileMenuButtonIconContainer.className = `navBar${selectedClassNumber}MainItemsMobileMenuButtonIconContainer`

                                                                                            var createNavBarMainItemsMobileMenuButtonIconMoverContainer = document.createElement("div")
                                                                                            createNavBarMainItemsMobileMenuButtonIconMoverContainer.className = `navBar${selectedClassNumber}MainItemsMobileMenuButtonIconMoverContainer`

                                                                                                var createNavBarMainItemsMobileMenuButtonIconLineOne = document.createElement("div")
                                                                                                createNavBarMainItemsMobileMenuButtonIconLineOne.className = `navBar${selectedClassNumber}MainItemsMobileMenuButtonIconLineOne`

                                                                                                var createNavBarMainItemsMobileMenuButtonIconLineTwo = document.createElement("div")
                                                                                                createNavBarMainItemsMobileMenuButtonIconLineTwo.className = `navBar${selectedClassNumber}MainItemsMobileMenuButtonIconLineTwo`

                                                                                                var createNavBarMainItemsMobileMenuButtonIconLineThree = document.createElement("div")
                                                                                                createNavBarMainItemsMobileMenuButtonIconLineThree.className = `navBar${selectedClassNumber}MainItemsMobileMenuButtonIconLineThree`



                                                                                                    // STYLE MOBILE MENU ITEMS
                                                                                                    // //////////////////////////

                                                                                                        createNavBarMainItemsMobileMenuButtonIconContainer.style = `
                                                                                                        
                                                                                                            width:100%;
                                                                                                            height:100%;
                                                                                                            z-index:0;
                                                                                                            position:absolute;
                                                                                                            transition:all 600ms ease;
                                                                                                            -webkit-transition:all 600ms ease;
                                                                                                            -moz-transition:all 600ms ease;
                                                                                                            -o-transition:all 600ms ease;
                                                                                                            -ms-transition:all 600ms ease;

                                                                                                        `

                                                                                                            createNavBarMainItemsMobileMenuButtonIconMoverContainer.style = `
                                                                                                            
                                                                                                                width:60%;
                                                                                                                height:60%;
                                                                                                                top:0;
                                                                                                                left:0;
                                                                                                                right:0;
                                                                                                                bottom:0;
                                                                                                                margin:auto;
                                                                                                                position:absolute;
                                                                                                                background:#e644c3;
                                                                                                                transition:all 600ms ease;
                                                                                                                -webkit-transition:all 600ms ease;
                                                                                                                -moz-transition:all 600ms ease;
                                                                                                                -o-transition:all 600ms ease;
                                                                                                                -ms-transition:all 600ms ease;

                                                                                                            `

                                                                                                                createNavBarMainItemsMobileMenuButtonIconLineOne.style = `
                                                                                                                
                                                                                                                    width:100%;
                                                                                                                    height:3px;
                                                                                                                    top:-13px;
                                                                                                                    left:0;
                                                                                                                    right:0;
                                                                                                                    bottom:0;
                                                                                                                    margin:auto;
                                                                                                                    opacity:1;
                                                                                                                    position:absolute;
                                                                                                                    background:#FFFFFF;
                                                                                                                    transform:rotateZ(0deg);
                                                                                                                    transition:all 600ms ease;
                                                                                                                    -webkit-transition:all 600ms ease;
                                                                                                                    -moz-transition:all 600ms ease;
                                                                                                                    -o-transition:all 600ms ease;
                                                                                                                    -ms-transition:all 600ms ease;

                                                                                                                `

                                                                                                                createNavBarMainItemsMobileMenuButtonIconLineTwo.style = `
                                                                                                                
                                                                                                                    width:100%;
                                                                                                                    height:3px;
                                                                                                                    top:-2px;
                                                                                                                    left:0;
                                                                                                                    right:0;
                                                                                                                    bottom:0;
                                                                                                                    margin:auto;
                                                                                                                    opacity:1;
                                                                                                                    position:absolute;
                                                                                                                    transform:rotateZ(0deg);
                                                                                                                    background:#FFFFFF;
                                                                                                                    transition:all 600ms ease;
                                                                                                                    -webkit-transition:all 600ms ease;
                                                                                                                    -moz-transition:all 600ms ease;
                                                                                                                    -o-transition:all 600ms ease;
                                                                                                                    -ms-transition:all 600ms ease;

                                                                                                                `

                                                                                                                createNavBarMainItemsMobileMenuButtonIconLineThree.style = `
                                                                                                                
                                                                                                                    width:100%;
                                                                                                                    height:3px;
                                                                                                                    top:10px;
                                                                                                                    left:0;
                                                                                                                    right:0;
                                                                                                                    bottom:0;
                                                                                                                    margin:auto;
                                                                                                                    opacity:1;
                                                                                                                    position:absolute;
                                                                                                                    transform:rotateZ(0deg);
                                                                                                                    background:#FFFFFF;
                                                                                                                    transition:all 600ms ease;
                                                                                                                    -webkit-transition:all 600ms ease;
                                                                                                                    -moz-transition:all 600ms ease;
                                                                                                                    -o-transition:all 600ms ease;
                                                                                                                    -ms-transition:all 600ms ease;

                                                                                                                `


                                                                                                                    // APPLY TO RESEPECTED PARENT
                                                                                                                    // //

                                                                                                                        createNavBarMainItemsMobileMenuButtonContainer.appendChild(createNavBarMainItemsMobileMenuButtonIconContainer)

                                                                                                                            createNavBarMainItemsMobileMenuButtonIconContainer.appendChild(createNavBarMainItemsMobileMenuButtonIconMoverContainer)

                                                                                                                                createNavBarMainItemsMobileMenuButtonIconMoverContainer.appendChild(createNavBarMainItemsMobileMenuButtonIconLineOne)
                                                                                                                                createNavBarMainItemsMobileMenuButtonIconMoverContainer.appendChild(createNavBarMainItemsMobileMenuButtonIconLineTwo)
                                                                                                                                createNavBarMainItemsMobileMenuButtonIconMoverContainer.appendChild(createNavBarMainItemsMobileMenuButtonIconLineThree)








                                                                                                                                    // CREATE EVENT LISTENERS FOR CLICKERS
                                                                                                                                    // //

                                                                                                                                        var getOpenClicker = document.querySelector(`.${storeNavBarMobileClickersClassNames[0]}`)
                                                                                                                                        var getCloseClicker = document.querySelector(`.${storeNavBarMobileClickersClassNames[1]}`)





                                                                                                                                            // FOR OPEN CLICKER 
                                                                                                                                            // //

                                                                                                                                                getOpenClicker.addEventListener("click", function () {

                                                                                                                                                    // MOVE CURRENT CLICKER TO THE BACK
                                                                                                                                                    // //

                                                                                                                                                        getOpenClicker.style = `
                                                                                                                                                        
                                                                                                                                                            width:100%;
                                                                                                                                                            height:100%;
                                                                                                                                                            z-index:-1;
                                                                                                                                                            cursor:pointer;
                                                                                                                                                            position:absolute;
                                                                                                                                                            background:#e6a044;
                                                                                                                                                            transition:all 600ms ease;
                                                                                                                                                            -webkit-transition:all 600ms ease;
                                                                                                                                                            -moz-transition:all 600ms ease;
                                                                                                                                                            -o-transition:all 600ms ease;
                                                                                                                                                            -ms-transition:all 600ms ease;

                                                                                                                                                        `

                                                                                                                                                    // MOVE CLICKER BEHIND TO THE FRONT
                                                                                                                                                    // //

                                                                                                                                                        getCloseClicker.style = `
                                                                                                                                                        
                                                                                                                                                            width:100%;
                                                                                                                                                            height:100%;
                                                                                                                                                            z-index:1;
                                                                                                                                                            cursor:pointer;
                                                                                                                                                            position:absolute;
                                                                                                                                                            background:#444fe6;
                                                                                                                                                            transition:all 600ms ease;
                                                                                                                                                            -webkit-transition:all 600ms ease;
                                                                                                                                                            -moz-transition:all 600ms ease;
                                                                                                                                                            -o-transition:all 600ms ease;
                                                                                                                                                            -ms-transition:all 600ms ease;

                                                                                                                                                        `

                                                                                                                                                            console.log("OPENED")

                                                                                                                                                })





                                                                                                                                            // FOR OPEN CLICKER 
                                                                                                                                            // //

                                                                                                                                                getCloseClicker.addEventListener("click", function () {

                                                                                                                                                    // MOVE CURRENT CLICKER TO THE BACK
                                                                                                                                                    // //

                                                                                                                                                        getCloseClicker.style = `
                                                                                                                                                        
                                                                                                                                                            width:100%;
                                                                                                                                                            height:100%;
                                                                                                                                                            z-index:-1;
                                                                                                                                                            cursor:pointer;
                                                                                                                                                            position:absolute;
                                                                                                                                                            background:#444fe6;
                                                                                                                                                            transition:all 600ms ease;
                                                                                                                                                            -webkit-transition:all 600ms ease;
                                                                                                                                                            -moz-transition:all 600ms ease;
                                                                                                                                                            -o-transition:all 600ms ease;
                                                                                                                                                            -ms-transition:all 600ms ease;

                                                                                                                                                        `

                                                                                                                                                    // MOVE CLICKER BEHIND TO THE FRONT
                                                                                                                                                    // //

                                                                                                                                                        getOpenClicker.style = `
                                                                                                                                                        
                                                                                                                                                            width:100%;
                                                                                                                                                            height:100%;
                                                                                                                                                            z-index:1;
                                                                                                                                                            cursor:pointer;
                                                                                                                                                            position:absolute;
                                                                                                                                                            background:#e6a044;
                                                                                                                                                            transition:all 600ms ease;
                                                                                                                                                            -webkit-transition:all 600ms ease;
                                                                                                                                                            -moz-transition:all 600ms ease;
                                                                                                                                                            -o-transition:all 600ms ease;
                                                                                                                                                            -ms-transition:all 600ms ease;

                                                                                                                                                        `

                                                                                                                                                            console.log("CLOSED")

                                                                                                                                                })



                                                                                                                                    // CLEAR OUT ARRAY FOR NEXT USE
                                                                                                                                    // //

                                                                                                                                        storeNavBarMobileClickersClassNames = []








                        // AUTO RUN FUNCTIONS -------------------
                        // //////////////////////////////////////

                            // RUN FUNCTION FOR SELECTED NAV BAR
                            // //////////////////////////////////

                                storeNavBarItemPopulationFunctions[navBarItemFunctionSelect]()
                                // storeNavBarMobileMenuMakes[navBarItemFunctionSelect]()












                            // RUN FUNCTION FOR MOBILE SIDE PANEL CREATION
                            // //////////////

                                storeNavBarMobileSidePanels[navBarItemFunctionSelect]()







                    }





                            // MINI FUNCTIONS ===================
                            // //////////////////////////////////

                                // FOR DESKTOP xxxxxxxxxxxxxxxxxx
                                // //////////////////////////////

                                    // MAKE NAV BAR ITEMS -------
                                    // //////////////////////////

                                        function populateNavBarOneItems () {


                                            // DECLARE VARIABLES ----
                                            // //////////////////////

                                                var getContentSideBarOneContainer = document.querySelector(`.navBar${navBarClassNameNumberSelector}ContentSideMenuItemsDesktopResizer`)


                                            // RUN LOOP FOR ELEMENT POPULATE
                                            // //////////////////////

                                                for ( itemPopulateCounter = 0; itemPopulateCounter < navBarItemsCounter; itemPopulateCounter ++ ) {


                                                    // ITEM ONE CONTAINER
                                                    // /////////////
                            
                                                        var createNavBarDesktopItemOneContainer = document.createElement("div")
                                                        createNavBarDesktopItemOneContainer.className = `navBar${navBarClassNameNumberSelector}DesktopItem${classNumberMapper[itemPopulateCounter]}Container`
                            
                                                        var createNavBarDesktopItemOneTextActual = document.createElement("div")
                                                        createNavBarDesktopItemOneTextActual.className = `navBar${navBarClassNameNumberSelector}DesktopItem${classNumberMapper[itemPopulateCounter]}TextActual`
                            
                                                        var createNavBarDesktopItemOneUnderLinerContainer = document.createElement("div")
                                                        createNavBarDesktopItemOneUnderLinerContainer.className = `navBar${navBarClassNameNumberSelector}DesktopItem${classNumberMapper[itemPopulateCounter]}UnderLinerContainer`
                            
                                                        var createNavBarDesktopItemOneUnderLinerActual = document.createElement("div")
                                                        createNavBarDesktopItemOneUnderLinerActual.className = `navBar${navBarClassNameNumberSelector}DesktopItem${classNumberMapper[itemPopulateCounter]}UnderLinerActual`





                                                    // STYLE ELEMENTS -------
                                                    // //////////////////////

                                                        createNavBarDesktopItemOneContainer.style = `
                                                        
                                                            float:left;
                                                            display:inline-table;
                                                            padding:0px 0px 0px 10px;
                                                            transition:all 600ms ease;
                                                            -webkit-transition:all 600ms ease;
                                                            -moz-transition:all 600ms ease;
                                                            -o-transition:all 600ms ease;
                                                            -ms-transition:all 600ms ease;

                                                        `

                                                            createNavBarDesktopItemOneTextActual.style = `

                                                                width:100%;
                                                                cursor:pointer;
                                                                color:rgba(44, 44, 44, 0.3);
                                                                transition:all 600ms ease;
                                                                -webkit-transition:all 600ms ease;
                                                                -moz-transition:all 600ms ease;
                                                                -o-transition:all 600ms ease;
                                                                -ms-transition:all 600ms ease;

                                                            `

                                                                createNavBarDesktopItemOneUnderLinerContainer.style = `
                                                                
                                                                    width:100%;
                                                                    margin-top:12px;
                                                                    transition:all 600ms ease;
                                                                    -webkit-transition:all 600ms ease;
                                                                    -moz-transition:all 600ms ease;
                                                                    -o-transition:all 600ms ease;
                                                                    -ms-transition:all 600ms ease;

                                                                `

                                                                    createNavBarDesktopItemOneUnderLinerActual.style = `
                                                                    
                                                                        width:100%;
                                                                        height:2px;
                                                                        background:#2C2C2C;
                                                                        transition:all 600ms ease;
                                                                        -webkit-transition:all 600ms ease;
                                                                        -moz-transition:all 600ms ease;
                                                                        -o-transition:all 600ms ease;
                                                                        -ms-transition:all 600ms ease;

                                                                `
                            
                            
                            
                            
                            
                                                            // APPLY TEXT TO ITEM BLOCK
                                                            // /////

                                                                createNavBarDesktopItemOneTextActual.textContent = storeNavBarSplits[itemPopulateCounter]

                                                                console.log("WHOOP: " + storeNavBarSplits)
                            
                            
                            
                            
                            
                                                            // APPLY TO RESEPECTED PARENT
                                                            // /////
                            
                                                                getContentSideBarOneContainer.appendChild(createNavBarDesktopItemOneContainer)
                            
                            
                                                                    createNavBarDesktopItemOneContainer.appendChild(createNavBarDesktopItemOneTextActual)
                                                                    createNavBarDesktopItemOneTextActual.appendChild(createNavBarDesktopItemOneUnderLinerContainer)
                            
                            
                                                                        createNavBarDesktopItemOneUnderLinerContainer.appendChild(createNavBarDesktopItemOneUnderLinerActual)


                                                        


                                                    // ADD ELEMENTS CLASSNAMES TO ARRAY FOR EVENT LISTINGS
                                                    // //////////////////////

                                                        storeNavBarItemsClassNames.push(`navBar${navBarClassNameNumberSelector}DesktopItem${classNumberMapper[itemPopulateCounter]}Container`)



                                                }


                                                        


                                            // ADD EVENT LISTENERS FOR HOVERS
                                            // //////////////////////////////


                                                // RUN LOOP FOR EVENT LISTENER ADDITIONS
                                                // //////////////////////////

                                                    storeNavBarItemsClassNames.forEach(function( classMake ) {


                                                        // DECLARE VARIABLES --------
                                                        // //////////////////////////

                                                            var getElement = document.querySelector(`.${classMake}`)
                                                            var getText = getElement.children[0]
                                                            var getUnderLiner = getElement.children[0].children[0]


                                                        // ON MOUSE OVER OR TOUCH ---
                                                        // //////////////////////////

                                                            getElement.addEventListener("mouseover", function () {

                                                                    // STYLE TEXT ON HOVER
                                                                    // //////////////

                                                                        getText.style = `
                                                                        
                                                                            width:100%;
                                                                            cursor:pointer;
                                                                            color:rgba(44, 44, 44, 1.0);
                                                                            transition:all 600ms ease;
                                                                            -webkit-transition:all 600ms ease;
                                                                            -moz-transition:all 600ms ease;
                                                                            -o-transition:all 600ms ease;
                                                                            -ms-transition:all 600ms ease;
                                                                        
                                                                        `

                                                                    // ACTIVATE UNDERLINER
                                                                    // //////////////

                                                                        getUnderLiner.style = `
                                                                        
                                                                            width:100%;
                                                                            margin-top:-2px;
                                                                            transition:all 600ms ease;
                                                                            -webkit-transition:all 600ms ease;
                                                                            -moz-transition:all 600ms ease;
                                                                            -o-transition:all 600ms ease;
                                                                            -ms-transition:all 600ms ease;

                                                                        `

                                                            })



                                                        // ON MOUSE OUT OR TOUCH ----
                                                        // //////////////////////////

                                                            getElement.addEventListener("mouseleave", function () {

                                                                    // STYLE TEXT ON HOVER
                                                                    // //////////////

                                                                        getText.style = `
                                                                        
                                                                            width:100%;
                                                                            cursor:pointer;
                                                                            color:rgba(44, 44, 44, 0.3);
                                                                            transition:all 600ms ease;
                                                                            -webkit-transition:all 600ms ease;
                                                                            -moz-transition:all 600ms ease;
                                                                            -o-transition:all 600ms ease;
                                                                            -ms-transition:all 600ms ease;
                                                                        
                                                                        `

                                                                    // DEACTIVATE UNDERLINER
                                                                    // //////////////

                                                                        getUnderLiner.style = `
                                                                        
                                                                            width:100%;
                                                                            margin-top:12px;
                                                                            transition:all 600ms ease;
                                                                            -webkit-transition:all 600ms ease;
                                                                            -moz-transition:all 600ms ease;
                                                                            -o-transition:all 600ms ease;
                                                                            -ms-transition:all 600ms ease;

                                                                        `

                                                            })


                                                    })

                                                        



                                        }





                                        

                                        function populateNavBarTwoItems () {


                                            // DECLARE VARIABLES ----
                                            // //////////////////////

                                                var getContentSideBarTwoContainer = document.querySelector(`.navBar${navBarClassNameNumberSelector}MainItemsMobileMenuResizer`)


                                            // RUN LOOP FOR ELEMENT POPULATE
                                            // //////////////////////

                                                for ( itemPopulateCounter = 0; itemPopulateCounter < navBarItemsCounter; itemPopulateCounter ++ ) {


                                                    // ITEM ONE CONTAINER
                                                    // /////////////
                            
                                                        var createNavBarDesktopItemTwoContainer = document.createElement("div")
                                                        createNavBarDesktopItemTwoContainer.className = `navBar${navBarClassNameNumberSelector}MainMenuDesktopItem${classNumberMapper[itemPopulateCounter]}Container`
                            
                                                        var createNavBarDesktopItemTwoTextActual = document.createElement("div")
                                                        createNavBarDesktopItemTwoTextActual.className = `navBar${navBarClassNameNumberSelector}MainMenuDesktopItem${classNumberMapper[itemPopulateCounter]}TextActual`
                            
                                                        var createNavBarDesktopItemTwoUnderLinerContainer = document.createElement("div")
                                                        createNavBarDesktopItemTwoUnderLinerContainer.className = `navBar${navBarClassNameNumberSelector}MainMenuDesktopItem${classNumberMapper[itemPopulateCounter]}UnderLinerContainer`
                            
                                                        var createNavBarDesktopItemTwoUnderLinerActual = document.createElement("div")
                                                        createNavBarDesktopItemTwoUnderLinerActual.className = `navBar${navBarClassNameNumberSelector}MainMenuDesktopItem${classNumberMapper[itemPopulateCounter]}UnderLinerActual`





                                                    // STYLE ELEMENTS -------
                                                    // //////////////////////

                                                        createNavBarDesktopItemTwoContainer.style = `
                                                        
                                                            width:20%;
                                                            height:100%;
                                                            cursor:pointer;
                                                            display:inline-table;
                                                            position:relative;
                                                            padding:0px 5px 0px 5px;
                                                            transition:all 600ms ease;
                                                            -webkit-transition:all 600ms ease;
                                                            -moz-transition:all 600ms ease;
                                                            -o-transition:all 600ms ease;
                                                            -ms-transition:all 600ms ease;

                                                        `

                                                            createNavBarDesktopItemTwoTextActual.style = `

                                                                width:100%;
                                                                height:100%;
                                                                color:rgba(255, 255, 255, 0.3);
                                                                cursor:pointer;
                                                                position:relative;
                                                                font-size:10px;
                                                                text-align:center;
                                                                line-height:50px;
                                                                font-weight:400;
                                                                letter-spacing:4px;
                                                                font-family:arial, sans-serif;
                                                                text-transform:uppercase;
                                                                transition:all 600ms ease;
                                                                -webkit-transition:all 600ms ease;
                                                                -moz-transition:all 600ms ease;
                                                                -o-transition:all 600ms ease;
                                                                -ms-transition:all 600ms ease;

                                                            `

                                                                createNavBarDesktopItemTwoUnderLinerContainer.style = `
                                                                
                                                                    width:100%;
                                                                    height:100%;
                                                                    position:relative;
                                                                    transition:all 600ms ease;
                                                                    -webkit-transition:all 600ms ease;
                                                                    -moz-transition:all 600ms ease;
                                                                    -o-transition:all 600ms ease;
                                                                    -ms-transition:all 600ms ease;

                                                                `

                                                                    createNavBarDesktopItemTwoUnderLinerActual.style = `
                                                                    
                                                                        width:0%;
                                                                        height:3px;
                                                                        float:left;
                                                                        bottom:0;
                                                                        position:absolute;
                                                                        background:#FFFFFF;
                                                                        transition:all 600ms ease;
                                                                        -webkit-transition:all 600ms ease;
                                                                        -moz-transition:all 600ms ease;
                                                                        -o-transition:all 600ms ease;
                                                                        -ms-transition:all 600ms ease;

                                                                `
                            
                            
                            
                            
                            
                                                            // APPLY TEXT TO ITEM BLOCK
                                                            // /////

                                                                createNavBarDesktopItemTwoTextActual.textContent = storeNavBarSplits[itemPopulateCounter]

                                                                console.log("WHOOP: " + storeNavBarSplits)
                            
                            
                            
                            
                            
                                                            // APPLY TO RESEPECTED PARENT
                                                            // /////
                            
                                                                getContentSideBarTwoContainer.appendChild(createNavBarDesktopItemTwoContainer)
                            
                            
                                                                    createNavBarDesktopItemTwoContainer.appendChild(createNavBarDesktopItemTwoTextActual)
                                                                    createNavBarDesktopItemTwoTextActual.appendChild(createNavBarDesktopItemTwoUnderLinerContainer)
                            
                            
                                                                        createNavBarDesktopItemTwoUnderLinerContainer.appendChild(createNavBarDesktopItemTwoUnderLinerActual)


                                                        


                                                    // ADD ELEMENTS CLASSNAMES TO ARRAY FOR EVENT LISTINGS
                                                    // //////////////////////

                                                        storeNavBarItemsClassNames.push(`navBar${navBarClassNameNumberSelector}MainMenuDesktopItem${classNumberMapper[itemPopulateCounter]}Container`)



                                                }


                                                        


                                            // ADD EVENT LISTENERS FOR HOVERS
                                            // //////////////////////////////


                                                // RUN LOOP FOR EVENT LISTENER ADDITIONS
                                                // //////////////////////////

                                                    storeNavBarItemsClassNames.forEach(function( classMake ) {


                                                        // DECLARE VARIABLES --------
                                                        // //////////////////////////

                                                            var getElement = document.querySelector(`.${classMake}`)
                                                            var getText = getElement.children[0]
                                                            var getUnderLiner = getElement.children[0].children[0].children[0]


                                                        // ON MOUSE OVER OR TOUCH ---
                                                        // //////////////////////////

                                                            getElement.addEventListener("mouseover", function () {

                                                                    // STYLE TEXT ON HOVER
                                                                    // //////////////

                                                                        getText.style = `
                                                                        
                                                                            width:100%;
                                                                            height:100%;
                                                                            color:rgba(255, 255, 255, 1.0);
                                                                            cursor:pointer;
                                                                            position:relative;
                                                                            font-size:10px;
                                                                            text-align:center;
                                                                            line-height:50px;
                                                                            font-weight:400;
                                                                            letter-spacing:4px;
                                                                            font-family:arial, sans-serif;
                                                                            text-transform:uppercase;
                                                                            transition:all 600ms ease;
                                                                            -webkit-transition:all 600ms ease;
                                                                            -moz-transition:all 600ms ease;
                                                                            -o-transition:all 600ms ease;
                                                                            -ms-transition:all 600ms ease;
                                                                        
                                                                        `

                                                                    // ACTIVATE UNDERLINER
                                                                    // //////////////

                                                                        getUnderLiner.style = `
                                                                        
                                                                            width:100%;
                                                                            height:3px;
                                                                            float:left;
                                                                            bottom:0;
                                                                            position:absolute;
                                                                            background:#FFFFFF;
                                                                            transition:all 600ms ease;
                                                                            -webkit-transition:all 600ms ease;
                                                                            -moz-transition:all 600ms ease;
                                                                            -o-transition:all 600ms ease;
                                                                            -ms-transition:all 600ms ease;

                                                                        `

                                                            })



                                                        // ON MOUSE OUT OR TOUCH ----
                                                        // //////////////////////////

                                                            getElement.addEventListener("mouseleave", function () {

                                                                    // STYLE TEXT ON HOVER
                                                                    // //////////////

                                                                        getText.style = `
                                                                        
                                                                            width:100%;
                                                                            height:100%;
                                                                            color:rgba(255, 255, 255, 0.3);
                                                                            cursor:pointer;
                                                                            position:relative;
                                                                            font-size:10px;
                                                                            text-align:center;
                                                                            line-height:50px;
                                                                            font-weight:400;
                                                                            letter-spacing:4px;
                                                                            font-family:arial, sans-serif;
                                                                            text-transform:uppercase;
                                                                            transition:all 600ms ease;
                                                                            -webkit-transition:all 600ms ease;
                                                                            -moz-transition:all 600ms ease;
                                                                            -o-transition:all 600ms ease;
                                                                            -ms-transition:all 600ms ease;
                                                                        
                                                                        `

                                                                    // DEACTIVATE UNDERLINER
                                                                    // //////////////

                                                                        getUnderLiner.style = `
                                                                        
                                                                            width:0%;
                                                                            height:3px;
                                                                            float:right;
                                                                            bottom:0;
                                                                            position:absolute;
                                                                            background:#FFFFFF;
                                                                            transition:all 600ms ease;
                                                                            -webkit-transition:all 600ms ease;
                                                                            -moz-transition:all 600ms ease;
                                                                            -o-transition:all 600ms ease;
                                                                            -ms-transition:all 600ms ease;

                                                                        `

                                                            })


                                                    })

                                                        



                                        }




                                // FOR MOBILE xxxxxxxxxxxxxxxxxxx
                                // //////////////////////////////

                                    // MAKE MOBILE MENU BUTTON xx
                                    // //////////////////////////

                                        function makeMobileMenuOneButton () {


                                            // DECLARE VARIABLES ----
                                            // //////////////////////

                                                var getContentSideBarOneContainer = document.querySelector(`.navBar${navBarClassNameNumberSelector}ContentSideMenuItemsMobileIconBlockMain`)





                                            // ELEMENT CREATIONS ----
                                            // //////////////////////

                                                // CREATE BUTTONS ///
                                                // //////////////////

                                                    // CLICKER BLOCK SETUP
                                                    // //////////////

                                                        var createNavBarContentSideMenuItemsMobileClickerContainer = document.createElement("div")
                                                        createNavBarContentSideMenuItemsMobileClickerContainer.className = `navBar${navBarClassNameNumberSelector}ContentSideMenuItemsMobileClickerContainer`



                                                        var createNavBarContentSideMenuItemsMobileClickerOn = document.createElement("div")
                                                        createNavBarContentSideMenuItemsMobileClickerOn.className = `navBar${navBarClassNameNumberSelector}ContentSideMenuItemsMobileClickerOn`

                                                        var createNavBarContentSideMenuItemsMobileClickerOff = document.createElement("div")
                                                        createNavBarContentSideMenuItemsMobileClickerOff.className = `navBar${navBarClassNameNumberSelector}ContentSideMenuItemsMobileClickerOff`



                                                    // ICONS BLOCK SETUP
                                                    // //////////////

                                                        var createNavBarContentSideMenuItemsMobileIconContainer = document.createElement("div")
                                                        createNavBarContentSideMenuItemsMobileIconContainer.className = `navBar${navBarClassNameNumberSelector}ContentSideMenuItemsMobileIconContainer`



                                                        var createNavBarContentSideMenuItemsMobileIconLineOne = document.createElement("div")
                                                        createNavBarContentSideMenuItemsMobileIconLineOne.className = `navBar${navBarClassNameNumberSelector}ContentSideMenuItemsMobileIconLineOne`

                                                        var createNavBarContentSideMenuItemsMobileIconLineTwo = document.createElement("div")
                                                        createNavBarContentSideMenuItemsMobileIconLineTwo.className = `navBar${navBarClassNameNumberSelector}ContentSideMenuItemsMobileIconLineTwo`

                                                        var createNavBarContentSideMenuItemsMobileIconLineThree = document.createElement("div")
                                                        createNavBarContentSideMenuItemsMobileIconLineThree.className = `navBar${navBarClassNameNumberSelector}ContentSideMenuItemsMobileIconLineThree`







                                            // ADD ELEMENT STYLES -----------------------------------------
                                            // ////////////////////////////////////////////////////////////

                                                // CLICKER BLOCK STYLES xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                                // ////////////////////////////////////////////////////////

                                                    createNavBarContentSideMenuItemsMobileClickerContainer.style = `
                                                    
                                                        width:100%;
                                                        height:100%;
                                                        z-index:1;
                                                        position:absolute;
                                                        transition:all 600ms ease;
                                                        -webkit-transition:all 600ms ease;
                                                        -moz-transition:all 600ms ease;
                                                        -o-transition:all 600ms ease;
                                                        -ms-transition:all 600ms ease;

                                                    `

                                                        createNavBarContentSideMenuItemsMobileClickerOn.style = `
                                                        
                                                            width:100%;
                                                            height:100%;
                                                            cursor:pointer;
                                                            z-index:1;
                                                            position:absolute;
                                                            /*background:#515bb3;*/
                                                            transition:all 600ms ease;
                                                            -webkit-transition:all 600ms ease;
                                                            -moz-transition:all 600ms ease;
                                                            -o-transition:all 600ms ease;
                                                            -ms-transition:all 600ms ease;

                                                        `

                                                        createNavBarContentSideMenuItemsMobileClickerOff.style = `
                                                        
                                                            width:100%;
                                                            height:100%;
                                                            cursor:pointer;
                                                            z-index:-1;
                                                            position:absolute;
                                                            /*background:#d48831;*/
                                                            transition:all 600ms ease;
                                                            -webkit-transition:all 600ms ease;
                                                            -moz-transition:all 600ms ease;
                                                            -o-transition:all 600ms ease;
                                                            -ms-transition:all 600ms ease;

                                                        `

                                                // ICONS BLOCK STYLES xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                                // ////////////////////////////////////////////////////////

                                                    createNavBarContentSideMenuItemsMobileIconContainer.style = `
                                                    
                                                        width:100%;
                                                        height:100%;
                                                        z-index:-1;
                                                        position:absolute;
                                                        transition:all 600ms ease;
                                                        -webkit-transition:all 600ms ease;
                                                        -moz-transition:all 600ms ease;
                                                        -o-transition:all 600ms ease;
                                                        -ms-transition:all 600ms ease;

                                                    `

                                                        createNavBarContentSideMenuItemsMobileIconLineOne.style = `
                                                        
                                                            width:12px;
                                                            height:3px;
                                                            top:7px;
                                                            left:0px;
                                                            right:0px;
                                                            margin:0px auto;
                                                            position:absolute;
                                                            transform:rotateZ(0deg);
                                                            background:#2C2C2C;
                                                            border-radius:1000px;
                                                            transition:all 600ms ease;
                                                            -webkit-transition:all 600ms ease;
                                                            -moz-transition:all 600ms ease;
                                                            -o-transition:all 600ms ease;
                                                            -ms-transition:all 600ms ease;

                                                        `

                                                        createNavBarContentSideMenuItemsMobileIconLineTwo.style = `
                                                        
                                                            width:12px;
                                                            height:3px;
                                                            top:13px;
                                                            left:0px;
                                                            right:0px;
                                                            margin:0px auto;
                                                            position:absolute;
                                                            transform:rotateZ(0deg);
                                                            background:#2C2C2C;
                                                            border-radius:1000px;
                                                            transition:all 600ms ease;
                                                            -webkit-transition:all 600ms ease;
                                                            -moz-transition:all 600ms ease;
                                                            -o-transition:all 600ms ease;
                                                            -ms-transition:all 600ms ease;

                                                        `

                                                        createNavBarContentSideMenuItemsMobileIconLineThree.style = `
                                                        
                                                            width:12px;
                                                            height:3px;
                                                            top:19px;
                                                            left:0px;
                                                            right:0px;
                                                            margin:0px auto;
                                                            position:absolute;
                                                            transform:rotateZ(0deg);
                                                            background:#2C2C2C;
                                                            border-radius:1000px;
                                                            transition:all 600ms ease;
                                                            -webkit-transition:all 600ms ease;
                                                            -moz-transition:all 600ms ease;
                                                            -o-transition:all 600ms ease;
                                                            -ms-transition:all 600ms ease;

                                                        `
                            
                            
                            
                            
                            
                                                            // APPLY TEXT TO ITEM BLOCK ===================
                                                            // ////////////////////////////////////////////

                                                                // CLICKERS APPEND xxxxxxxxxxxxxxxxxxxxxxxx
                                                                // ////////////////////////////////////////

                                                                    getContentSideBarOneContainer.appendChild(createNavBarContentSideMenuItemsMobileClickerContainer)

                                                                    createNavBarContentSideMenuItemsMobileClickerContainer.appendChild(createNavBarContentSideMenuItemsMobileClickerOn)
                                                                    createNavBarContentSideMenuItemsMobileClickerContainer.appendChild(createNavBarContentSideMenuItemsMobileClickerOff)


                                                                        // ADD EVENT LISTENERS FOR CLICKERS
                                                                        // ////////////////////////////////




                                                                    
                                                                // ICON LINES APPEND ----------------------
                                                                // ////////////////////////////////////////

                                                                    getContentSideBarOneContainer.appendChild(createNavBarContentSideMenuItemsMobileIconContainer)

                                                                    createNavBarContentSideMenuItemsMobileIconContainer.appendChild(createNavBarContentSideMenuItemsMobileIconLineOne)
                                                                    createNavBarContentSideMenuItemsMobileIconContainer.appendChild(createNavBarContentSideMenuItemsMobileIconLineTwo)
                                                                    createNavBarContentSideMenuItemsMobileIconContainer.appendChild(createNavBarContentSideMenuItemsMobileIconLineThree)












                                            // RUN FUNCTION FOR MOBILE SIDE PANEL CREATION
                                            // //////////////

                                                storeNavBarMobileSidePanels[navBarItemFunctionSelect]()







                                            // ADD EVENT LISTENERS ----------------------------------------
                                            // ////////////////////////////////////////////////////////////

                                                // VARIABLES xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                                // ////////////////////////////////////////////////////////

                                                    var getClickerOn = document.querySelector(`.navBar${navBarClassNameNumberSelector}ContentSideMenuItemsMobileClickerOn`)
                                                    var getClickerOff = document.querySelector(`.navBar${navBarClassNameNumberSelector}ContentSideMenuItemsMobileClickerOff`)

                                                    var getMobileMenuSidePanel = document.querySelector(`.navBar${navBarClassNameNumberSelector}`).children[1]

                                                    var getMobileMenuCloser = document.querySelector(`.navBar${navBarClassNameNumberSelector}MainMobilePanelCloseButtonActual`)


                                                // CLICKER ON xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                                // ////////////////////////////////////////////////////////

                                                    getClickerOn.addEventListener("click", function () {

                                                            // SWITCH CURRENT CLICKER OFF -----------------
                                                            // ////////////////////////////////////////////

                                                                getClickerOn.style = `
                                                                
                                                                    width:100%;
                                                                    height:100%;
                                                                    cursor:pointer;
                                                                    z-index:-1;
                                                                    position:absolute;
                                                                    /*background:#515bb3;*/
                                                                    transition:all 600ms ease;
                                                                    -webkit-transition:all 600ms ease;
                                                                    -moz-transition:all 600ms ease;
                                                                    -o-transition:all 600ms ease;
                                                                    -ms-transition:all 600ms ease;

                                                                `

                                                            // SWITCH BACK CLICKER ON ---------------------
                                                            // ////////////////////////////////////////////

                                                                getClickerOff.style = `
                                                                
                                                                    width:100%;
                                                                    height:100%;
                                                                    cursor:pointer;
                                                                    z-index:1;
                                                                    position:absolute;
                                                                    /*background:#d48831;*/
                                                                    transition:all 600ms ease;
                                                                    -webkit-transition:all 600ms ease;
                                                                    -moz-transition:all 600ms ease;
                                                                    -o-transition:all 600ms ease;
                                                                    -ms-transition:all 600ms ease;

                                                                `




                                                            // CHANGE ICON LINES TO OPEN ------------------
                                                            // ////////////////////////////////////////////

                                                                createNavBarContentSideMenuItemsMobileIconLineOne.style = `
                                                                
                                                                    width:12px;
                                                                    height:3px;
                                                                    top:13px;
                                                                    left:0px;
                                                                    right:0px;
                                                                    margin:0px auto;
                                                                    opacity:1;
                                                                    position:absolute;
                                                                    transform:rotateZ(45deg);
                                                                    background:#2C2C2C;
                                                                    border-radius:1000px;
                                                                    transition:all 600ms ease;
                                                                    -webkit-transition:all 600ms ease;
                                                                    -moz-transition:all 600ms ease;
                                                                    -o-transition:all 600ms ease;
                                                                    -ms-transition:all 600ms ease;

                                                                `

                                                                createNavBarContentSideMenuItemsMobileIconLineTwo.style = `
                                                                
                                                                    width:12px;
                                                                    height:3px;
                                                                    top:13px;
                                                                    left:0px;
                                                                    right:0px;
                                                                    margin:0px auto;
                                                                    opacity:0;
                                                                    position:absolute;
                                                                    transform:rotateZ(0deg);
                                                                    background:#2C2C2C;
                                                                    border-radius:1000px;
                                                                    transition:all 600ms ease;
                                                                    -webkit-transition:all 600ms ease;
                                                                    -moz-transition:all 600ms ease;
                                                                    -o-transition:all 600ms ease;
                                                                    -ms-transition:all 600ms ease;

                                                                `

                                                                createNavBarContentSideMenuItemsMobileIconLineThree.style = `
                                                                
                                                                    width:12px;
                                                                    height:3px;
                                                                    top:13px;
                                                                    left:0px;
                                                                    right:0px;
                                                                    margin:0px auto;
                                                                    opacity:1;
                                                                    position:absolute;
                                                                    transform:rotateZ(-45deg);
                                                                    background:#2C2C2C;
                                                                    border-radius:1000px;
                                                                    transition:all 600ms ease;
                                                                    -webkit-transition:all 600ms ease;
                                                                    -moz-transition:all 600ms ease;
                                                                    -o-transition:all 600ms ease;
                                                                    -ms-transition:all 600ms ease;

                                                                `

                                                                console.log("CLICKED ON")

                                                                console.log("BEEP: " + navBarClassNameNumberSelector)
                                                                console.log("PREP: " + `navBar${navBarClassNameNumberSelector}MainMobilePanelContainer`)




                                                // OPEN SIDE PANEL xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                                // ////////////////////////////////////////////////////////

                                                    getMobileMenuSidePanel.style = `
                                                    
                                                        width:100%;
                                                        height:100%;
                                                        left:0%;
                                                        z-index:2;
                                                        padding:40px 0px;
                                                        position:fixed;
                                                        background:rgb(81, 91, 179);
                                                        transition:all 600ms ease;
                                                        -webkit-transition:all 600ms ease;
                                                        -moz-transition:all 600ms ease;
                                                        -o-transition:all 600ms ease;
                                                        -ms-transition:all 600ms ease;

                                                    `

                                                    })




                                                // CLICKER OFF xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                                // ////////////////////////////////////////////////////////

                                                    getClickerOff.addEventListener("click", function () {

                                                            // SWITCH CURRENT CLICKER OFF -----------------
                                                            // ////////////////////////////////////////////

                                                                getClickerOff.style = `
                                                                
                                                                    width:100%;
                                                                    height:100%;
                                                                    cursor:pointer;
                                                                    z-index:-1;
                                                                    position:absolute;
                                                                    /*background:#515bb3;*/
                                                                    transition:all 600ms ease;
                                                                    -webkit-transition:all 600ms ease;
                                                                    -moz-transition:all 600ms ease;
                                                                    -o-transition:all 600ms ease;
                                                                    -ms-transition:all 600ms ease;

                                                                `

                                                            // SWITCH BACK CLICKER ON ---------------------
                                                            // ////////////////////////////////////////////

                                                                getClickerOn.style = `
                                                                
                                                                    width:100%;
                                                                    height:100%;
                                                                    cursor:pointer;
                                                                    z-index:1;
                                                                    position:absolute;
                                                                    /*background:#d48831;*/
                                                                    transition:all 600ms ease;
                                                                    -webkit-transition:all 600ms ease;
                                                                    -moz-transition:all 600ms ease;
                                                                    -o-transition:all 600ms ease;
                                                                    -ms-transition:all 600ms ease;

                                                                `




                                                            // CHANGE ICON LINES TO OPEN ------------------
                                                            // ////////////////////////////////////////////

                                                                createNavBarContentSideMenuItemsMobileIconLineOne.style = `
                                                                
                                                                    width:12px;
                                                                    height:3px;
                                                                    top:7px;
                                                                    left:0px;
                                                                    right:0px;
                                                                    margin:0px auto;
                                                                    opacity:1;
                                                                    position:absolute;
                                                                    transform:rotateZ(0deg);
                                                                    background:#2C2C2C;
                                                                    border-radius:1000px;
                                                                    transition:all 600ms ease;
                                                                    -webkit-transition:all 600ms ease;
                                                                    -moz-transition:all 600ms ease;
                                                                    -o-transition:all 600ms ease;
                                                                    -ms-transition:all 600ms ease;

                                                                `

                                                                createNavBarContentSideMenuItemsMobileIconLineTwo.style = `
                                                                
                                                                    width:12px;
                                                                    height:3px;
                                                                    top:13px;
                                                                    left:0px;
                                                                    right:0px;
                                                                    margin:0px auto;
                                                                    opacity:1;
                                                                    position:absolute;
                                                                    transform:rotateZ(0deg);
                                                                    background:#2C2C2C;
                                                                    border-radius:1000px;
                                                                    transition:all 600ms ease;
                                                                    -webkit-transition:all 600ms ease;
                                                                    -moz-transition:all 600ms ease;
                                                                    -o-transition:all 600ms ease;
                                                                    -ms-transition:all 600ms ease;

                                                                `

                                                                createNavBarContentSideMenuItemsMobileIconLineThree.style = `
                                                                
                                                                    width:12px;
                                                                    height:3px;
                                                                    top:19px;
                                                                    left:0px;
                                                                    right:0px;
                                                                    margin:0px auto;
                                                                    opacity:1;
                                                                    position:absolute;
                                                                    transform:rotateZ(0deg);
                                                                    background:#2C2C2C;
                                                                    border-radius:1000px;
                                                                    transition:all 600ms ease;
                                                                    -webkit-transition:all 600ms ease;
                                                                    -moz-transition:all 600ms ease;
                                                                    -o-transition:all 600ms ease;
                                                                    -ms-transition:all 600ms ease;

                                                                `

                                                                console.log("CLICKED OFF")

                                                                console.log("BEEP: " + navBarClassNameNumberSelector)
                                                                console.log("PREP: " + `navBar${navBarClassNameNumberSelector}MainMobilePanelContainer`)




                                                // CLOSE SIDE PANEL xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                                // ////////////////////////////////////////////////////////

                                                    getMobileMenuSidePanel.style = `
                                                    
                                                        width:100%;
                                                        height:100%;
                                                        left:-100%;
                                                        z-index:2;
                                                        padding:40px 0px;
                                                        position:fixed;
                                                        background:rgb(81, 91, 179);
                                                        transition:all 600ms ease;
                                                        -webkit-transition:all 600ms ease;
                                                        -moz-transition:all 600ms ease;
                                                        -o-transition:all 600ms ease;
                                                        -ms-transition:all 600ms ease;

                                                    `

                                                    })

                                                    getMobileMenuCloser.addEventListener("click", function () {

                                                            // SWITCH CURRENT CLICKER OFF -----------------
                                                            // ////////////////////////////////////////////

                                                                getClickerOff.style = `
                                                                
                                                                    width:100%;
                                                                    height:100%;
                                                                    cursor:pointer;
                                                                    z-index:-1;
                                                                    position:absolute;
                                                                    /*background:#515bb3;*/
                                                                    transition:all 600ms ease;
                                                                    -webkit-transition:all 600ms ease;
                                                                    -moz-transition:all 600ms ease;
                                                                    -o-transition:all 600ms ease;
                                                                    -ms-transition:all 600ms ease;

                                                                `

                                                            // SWITCH BACK CLICKER ON ---------------------
                                                            // ////////////////////////////////////////////

                                                                getClickerOn.style = `
                                                                
                                                                    width:100%;
                                                                    height:100%;
                                                                    cursor:pointer;
                                                                    z-index:1;
                                                                    position:absolute;
                                                                    /*background:#d48831;*/
                                                                    transition:all 600ms ease;
                                                                    -webkit-transition:all 600ms ease;
                                                                    -moz-transition:all 600ms ease;
                                                                    -o-transition:all 600ms ease;
                                                                    -ms-transition:all 600ms ease;

                                                                `




                                                            // CHANGE ICON LINES TO OPEN ------------------
                                                            // ////////////////////////////////////////////

                                                                createNavBarContentSideMenuItemsMobileIconLineOne.style = `
                                                                
                                                                    width:12px;
                                                                    height:3px;
                                                                    top:7px;
                                                                    left:0px;
                                                                    right:0px;
                                                                    margin:0px auto;
                                                                    opacity:1;
                                                                    position:absolute;
                                                                    transform:rotateZ(0deg);
                                                                    background:#2C2C2C;
                                                                    border-radius:1000px;
                                                                    transition:all 600ms ease;
                                                                    -webkit-transition:all 600ms ease;
                                                                    -moz-transition:all 600ms ease;
                                                                    -o-transition:all 600ms ease;
                                                                    -ms-transition:all 600ms ease;

                                                                `

                                                                createNavBarContentSideMenuItemsMobileIconLineTwo.style = `
                                                                
                                                                    width:12px;
                                                                    height:3px;
                                                                    top:13px;
                                                                    left:0px;
                                                                    right:0px;
                                                                    margin:0px auto;
                                                                    opacity:1;
                                                                    position:absolute;
                                                                    transform:rotateZ(0deg);
                                                                    background:#2C2C2C;
                                                                    border-radius:1000px;
                                                                    transition:all 600ms ease;
                                                                    -webkit-transition:all 600ms ease;
                                                                    -moz-transition:all 600ms ease;
                                                                    -o-transition:all 600ms ease;
                                                                    -ms-transition:all 600ms ease;

                                                                `

                                                                createNavBarContentSideMenuItemsMobileIconLineThree.style = `
                                                                
                                                                    width:12px;
                                                                    height:3px;
                                                                    top:19px;
                                                                    left:0px;
                                                                    right:0px;
                                                                    margin:0px auto;
                                                                    opacity:1;
                                                                    position:absolute;
                                                                    transform:rotateZ(0deg);
                                                                    background:#2C2C2C;
                                                                    border-radius:1000px;
                                                                    transition:all 600ms ease;
                                                                    -webkit-transition:all 600ms ease;
                                                                    -moz-transition:all 600ms ease;
                                                                    -o-transition:all 600ms ease;
                                                                    -ms-transition:all 600ms ease;

                                                                `

                                                                console.log("CLICKED OFF")

                                                                console.log("BEEP: " + navBarClassNameNumberSelector)
                                                                console.log("PREP: " + `navBar${navBarClassNameNumberSelector}MainMobilePanelContainer`)




                                                // CLOSE SIDE PANEL xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                                // ////////////////////////////////////////////////////////

                                                    getMobileMenuSidePanel.style = `
                                                    
                                                        width:100%;
                                                        height:100%;
                                                        left:-100%;
                                                        z-index:2;
                                                        padding:40px 0px;
                                                        position:fixed;
                                                        background:rgb(81, 91, 179);
                                                        transition:all 600ms ease;
                                                        -webkit-transition:all 600ms ease;
                                                        -moz-transition:all 600ms ease;
                                                        -o-transition:all 600ms ease;
                                                        -ms-transition:all 600ms ease;

                                                    `



                                                    })







                                        }



                                    // MAKE MOBILE MENU SIDE PANEL xx
                                    // //////////////////////////

                                        function makeMobileSidePanelOne () {


                                            // DECLARE VARIABLES ----
                                            // //////////////////////

                                                var getSelectedNavBar = document.querySelector(`.navBar${navBarClassNameNumberSelector}`)





                                            // ELEMENT CREATIONS ----
                                            // //////////////////////

                                                // CREATE SIDE PANEL 
                                                // //////////////////



                                                    // NAV BAR MAIN MOBILE SIDE PANNEL
                                                    // //////////////

                                                        var createNavBarMainMobilePanelContainer = document.createElement("div")
                                                        createNavBarMainMobilePanelContainer.className = `navBar${navBarClassNameNumberSelector}MainMobilePanelContainer`

                                                            var createNavBarMainMobilePanelResizer = document.createElement("div")
                                                            createNavBarMainMobilePanelResizer.className = `navBar${navBarClassNameNumberSelector}MainMobilePanelResizer`


                                                                // STYLE ELEMENTS 
                                                                // //////////////

                                                                    createNavBarMainMobilePanelContainer.style = `
                                                                    
                                                                        width:100%;
                                                                        height:100%;
                                                                        left:-100%;
                                                                        z-index:2;
                                                                        padding:40px 0px;
                                                                        position:fixed;
                                                                        background:#515bb3;
                                                                        transition:all 600ms ease;
                                                                        -webkit-transition:all 600ms ease;
                                                                        -moz-transition:all 600ms ease;
                                                                        -o-transition:all 600ms ease;
                                                                        -ms-transition:all 600ms ease;

                                                                    `

                                                                        createNavBarMainMobilePanelResizer.style = `
                                                                        
                                                                            width:${screenWidthSelector}px;
                                                                            height:100%;
                                                                            margin:0px auto;
                                                                            position:relative;
                                                                            background:#FFFFFF;
                                                                            transition:all 600ms ease;
                                                                            -webkit-transition:all 600ms ease;
                                                                            -moz-transition:all 600ms ease;
                                                                            -o-transition:all 600ms ease;
                                                                            -ms-transition:all 600ms ease;

                                                                        `

                                                                            // APPEND ELEMNTS TO PARENT 
                                                                            // ////////////////////////

                                                                                getSelectedNavBar.appendChild(createNavBarMainMobilePanelContainer)
                                                                                createNavBarMainMobilePanelContainer.appendChild(createNavBarMainMobilePanelResizer)
            
                                                                            





                                                    // LOGO CONTAINER CONTROL
                                                    // //////////////

                                                        var createNavBarMainMobilePanelLogoAndCloseButtonContainer = document.createElement("div")
                                                        createNavBarMainMobilePanelLogoAndCloseButtonContainer.className = `navBar${navBarClassNameNumberSelector}MainMobilePanelLogoAndCloseButtonContainer`


                                                            // STYLE EMENTS
                                                            // //////////////

                                                                createNavBarMainMobilePanelLogoAndCloseButtonContainer.style = `
                                                                
                                                                    width:90%;
                                                                    height:75px;
                                                                    top:30px;
                                                                    margin:0px auto;
                                                                    display:inline-table;
                                                                    position:relative;
                                                                    transition:all 600ms ease;
                                                                    -webkit-transition:all 600ms ease;
                                                                    -moz-transition:all 600ms ease;
                                                                    -o-transition:all 600ms ease;
                                                                    -ms-transition:all 600ms ease;

                                                                `

                                                                    // APPEND ELEMNTS TO PARENT 
                                                                    // ////////////////////////

                                                                        createNavBarMainMobilePanelResizer.appendChild(createNavBarMainMobilePanelLogoAndCloseButtonContainer)







                                                    // LOGO CONTAINER
                                                    // //////////////

                                                        var createNavBarMainMobilePanelLogoShifter = document.createElement("div")
                                                        createNavBarMainMobilePanelLogoShifter.className = `navBar${navBarClassNameNumberSelector}MainMobilePanelLogoShifter`

                                                            var createNavBarMainMobilePanelLogoActual = document.createElement("div")
                                                            createNavBarMainMobilePanelLogoActual.className = `navBar${navBarClassNameNumberSelector}MainMobilePanelLogoActual`


                                                                // STYLE EMENTS
                                                                // //////////////

                                                                    createNavBarMainMobilePanelLogoShifter.style = `
                                                                    
                                                                        width:200px;
                                                                        height:100%;
                                                                        float:left;
                                                                        position:relative;
                                                                        background:#54b351;
                                                                        transition:all 600ms ease;
                                                                        -webkit-transition:all 600ms ease;
                                                                        -moz-transition:all 600ms ease;
                                                                        -o-transition:all 600ms ease;
                                                                        -ms-transition:all 600ms ease;

                                                                    `

                                                                        createNavBarMainMobilePanelLogoActual.style = `
                                                                        
                                                                            width:100%;
                                                                            height:100%;
                                                                            left:0px;
                                                                            right:0px;
                                                                            margin:0px auto;
                                                                            position:relative;
                                                                            background:#b35151;
                                                                            transition:all 600ms ease;
                                                                            -webkit-transition:all 600ms ease;
                                                                            -moz-transition:all 600ms ease;
                                                                            -o-transition:all 600ms ease;
                                                                            -ms-transition:all 600ms ease;

                                                                        `

                                                                            // APPEND ELEMNTS TO PARENT 
                                                                            // ////////////////////////

                                                                                createNavBarMainMobilePanelLogoAndCloseButtonContainer.appendChild(createNavBarMainMobilePanelLogoShifter)

                                                                                    createNavBarMainMobilePanelLogoShifter.appendChild(createNavBarMainMobilePanelLogoActual)






                                                    // CLOSE BUTTON CONTAINER
                                                    // //////////////

                                                        var createNavBarMainMobilePanelCloseButtonShifter = document.createElement("div")
                                                        createNavBarMainMobilePanelCloseButtonShifter.className = `navBar${navBarClassNameNumberSelector}MainMobilePanelCloseButtonShifter`

                                                            var createNavBarMainMobilePanelCloseButtonActual = document.createElement("div")
                                                            createNavBarMainMobilePanelCloseButtonActual.className = `navBar${navBarClassNameNumberSelector}MainMobilePanelCloseButtonActual`

                                                                var createNavBarMainMobilePanelCloseButtonIconContainer = document.createElement("div")
                                                                createNavBarMainMobilePanelCloseButtonIconContainer.className = `navBar${navBarClassNameNumberSelector}MainMobilePanelCloseButtonIconContainer`

                                                                    var createNavBarMainMobilePanelCloseButtonIconLineOne = document.createElement("div")
                                                                    createNavBarMainMobilePanelCloseButtonIconLineOne.className = `navBar${navBarClassNameNumberSelector}MainMobilePanelCloseButtonIconLineOne`

                                                                    var createNavBarMainMobilePanelCloseButtonIconLineTwo = document.createElement("div")
                                                                    createNavBarMainMobilePanelCloseButtonIconLineTwo.className = `navBar${navBarClassNameNumberSelector}MainMobilePanelCloseButtonIconLineTwo`


                                                                        // STYLE EMENTS
                                                                        // //////////////

                                                                            createNavBarMainMobilePanelCloseButtonShifter.style = `
                                                                            
                                                                                width:50px;
                                                                                height:100%;
                                                                                top:0;
                                                                                float:right;
                                                                                bottom:0;
                                                                                margin:0px auto;
                                                                                position:relative;
                                                                                transition:all 600ms ease;
                                                                                -webkit-transition:all 600ms ease;
                                                                                -moz-transition:all 600ms ease;
                                                                                -o-transition:all 600ms ease;
                                                                                -ms-transition:all 600ms ease;

                                                                            `

                                                                                createNavBarMainMobilePanelCloseButtonActual.style = `
                                                                                
                                                                                    width:40px;
                                                                                    height:40px;
                                                                                    top:0;
                                                                                    left:0;
                                                                                    right:0;
                                                                                    bottom:0;
                                                                                    cursor:pointer;
                                                                                    margin:auto auto;
                                                                                    border:3px solid #2C2C2C;
                                                                                    position:absolute;
                                                                                    border-radius:1000px;
                                                                                    transition:all 600ms ease;
                                                                                    -webkit-transition:all 600ms ease;
                                                                                    -moz-transition:all 600ms ease;
                                                                                    -o-transition:all 600ms ease;
                                                                                    -ms-transition:all 600ms ease;

                                                                                `

                                                                                    createNavBarMainMobilePanelCloseButtonIconContainer.style = `
                                                                                    
                                                                                        width:25px;
                                                                                        height:25px;
                                                                                        top:0;
                                                                                        left:0;
                                                                                        right:0;
                                                                                        bottom:0;
                                                                                        margin:auto auto;
                                                                                        position:absolute;
                                                                                        transition:all 600ms ease;
                                                                                        -webkit-transition:all 600ms ease;
                                                                                        -moz-transition:all 600ms ease;
                                                                                        -o-transition:all 600ms ease;
                                                                                        -ms-transition:all 600ms ease;

                                                                                    `

                                                                                        createNavBarMainMobilePanelCloseButtonIconLineOne.style = `
                                                                                        
                                                                                            width:15px;
                                                                                            height:3px;
                                                                                            top:0;
                                                                                            left:0;
                                                                                            right:0;
                                                                                            bottom:0;
                                                                                            margin:auto auto;
                                                                                            position:absolute;
                                                                                            transform:rotateZ(45deg);
                                                                                            background:#2C2C2C;
                                                                                            border-radius:1000px;
                                                                                            transition:all 600ms ease;
                                                                                            -webkit-transition:all 600ms ease;
                                                                                            -moz-transition:all 600ms ease;
                                                                                            -o-transition:all 600ms ease;
                                                                                            -ms-transition:all 600ms ease;

                                                                                        `

                                                                                        createNavBarMainMobilePanelCloseButtonIconLineTwo.style = `
                                                                                        
                                                                                            width:15px;
                                                                                            height:3px;
                                                                                            top:0;
                                                                                            left:0;
                                                                                            right:0;
                                                                                            bottom:0;
                                                                                            margin:auto auto;
                                                                                            position:absolute;
                                                                                            transform:rotateZ(-45deg);
                                                                                            background:#2C2C2C;
                                                                                            border-radius:1000px;
                                                                                            transition:all 600ms ease;
                                                                                            -webkit-transition:all 600ms ease;
                                                                                            -moz-transition:all 600ms ease;
                                                                                            -o-transition:all 600ms ease;
                                                                                            -ms-transition:all 600ms ease;

                                                                                        `


                                                                                            // APPEND ELEMNTS TO PARENT 
                                                                                            // ////////////////////////

                                                                                                createNavBarMainMobilePanelLogoAndCloseButtonContainer.appendChild(createNavBarMainMobilePanelCloseButtonShifter)

                                                                                                    createNavBarMainMobilePanelCloseButtonShifter.appendChild(createNavBarMainMobilePanelCloseButtonActual)

                                                                                                        createNavBarMainMobilePanelCloseButtonActual.appendChild(createNavBarMainMobilePanelCloseButtonIconContainer)

                                                                                                            createNavBarMainMobilePanelCloseButtonIconContainer.appendChild(createNavBarMainMobilePanelCloseButtonIconLineOne)

                                                                                                            createNavBarMainMobilePanelCloseButtonIconContainer.appendChild(createNavBarMainMobilePanelCloseButtonIconLineTwo)







                                            // CONTENT CONTAINER CONTROL
                                            // //////////////

                                                var createNavBarMainMobilePanelContentContainer = document.createElement("div")
                                                createNavBarMainMobilePanelContentContainer.className = `navBar${navBarClassNameNumberSelector}MainMobilePanelContentContainer`


                                                    // STYLE EMENTS
                                                    // //////////////

                                                        createNavBarMainMobilePanelContentContainer.style = `
                                                        
                                                            width:90%;
                                                            top:60px;
                                                            clear:both;
                                                            left:0px;
                                                            right:0px;
                                                            margin:0px auto;
                                                            padding:20px 0px;
                                                            position:relative;
                                                            font-size:20px;
                                                            font-family:arial, sans-serif;
                                                            font-weight:500;
                                                            letter-spacing:1px;
                                                            transition:all 600ms ease;
                                                            -webkit-transition:all 600ms ease;
                                                            -moz-transition:all 600ms ease;
                                                            -o-transition:all 600ms ease;
                                                            -ms-transition:all 600ms ease;

                                                        `

                                                            // APPEND ELEMNTS TO PARENT 
                                                            // ////////////////////////

                                                                createNavBarMainMobilePanelResizer.appendChild(createNavBarMainMobilePanelContentContainer)












                                            // RUN LOOP FOR ITEMS POPULATE
                                            // //////////////

                                                for ( sidePanelItemsPopoulateCounter = 0; sidePanelItemsPopoulateCounter < navBarItemsCounter; sidePanelItemsPopoulateCounter++ ) {

                                                        storeNavBarMobileMenuItemsPopulates[navBarItemFunctionSelect](sidePanelItemsPopoulateCounter)

                                                }












                                            // RUN LOOP FOR ITEMS LINKS MERGE
                                            // //////////////





                                                

                                        }







                                        function makeMobileSidePanelTwo () {


                                            // DECLARE VARIABLES ----
                                            // //////////////////////

                                                var getSelectedNavBar = document.querySelector(`.navBar${navBarClassNameNumberSelector}`)





                                            // ELEMENT CREATIONS ----
                                            // //////////////////////

                                                // CREATE SIDE PANEL 
                                                // //////////////////



                                                    // NAV BAR MAIN MOBILE SIDE PANNEL
                                                    // //////////////

                                                        var createNavBarMainMobilePanelContainer = document.createElement("div")
                                                        createNavBarMainMobilePanelContainer.className = `navBar${navBarClassNameNumberSelector}MainMobilePanelContainer`

                                                            var createNavBarMainMobilePanelResizer = document.createElement("div")
                                                            createNavBarMainMobilePanelResizer.className = `navBar${navBarClassNameNumberSelector}MainMobilePanelResizer`


                                                                // STYLE ELEMENTS 
                                                                // //////////////

                                                                    createNavBarMainMobilePanelContainer.style = `
                                                                    
                                                                        width:100%;
                                                                        height:100%;
                                                                        top:0;
                                                                        left:0%;
                                                                        right:0;
                                                                        bottom:0;
                                                                        z-index:2;
                                                                        position:fixed;
                                                                        background:rgba(255, 255, 255, 0.2);
                                                                        backdrop-filter:blur(10px);
                                                                        transition:all 600ms ease;
                                                                        -webkit-transition:all 600ms ease;
                                                                        -moz-transition:all 600ms ease;
                                                                        -o-transition:all 600ms ease;
                                                                        -ms-transition:all 600ms ease;

                                                                    `

                                                                        createNavBarMainMobilePanelResizer.style = `
                                                                        
                                                                            width:300px;
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

                                                                            // APPEND ELEMNTS TO PARENT 
                                                                            // ////////////////////////

                                                                                getSelectedNavBar.appendChild(createNavBarMainMobilePanelContainer)
                                                                                createNavBarMainMobilePanelContainer.appendChild(createNavBarMainMobilePanelResizer)
            
                                                                            





                                                    // CLOSE BUTTON CONTAINER
                                                    // //////////////

                                                        var createNavBarMainMobilePanelCloseButtonContainer = document.createElement("div")
                                                        createNavBarMainMobilePanelCloseButtonContainer.className = `navBar${navBarClassNameNumberSelector}MainMobilePanelCloseButtonContainer`

                                                            var createNavBarMainMobilePanelCLoseButtonBlock = document.createElement("div")
                                                            createNavBarMainMobilePanelCLoseButtonBlock.className = `navBar${navBarClassNameNumberSelector}MainMobilePanelCLoseButtonBlock`

                                                                var createNavBarMainMobilePanelCLoseButtonActual = document.createElement("div")
                                                                createNavBarMainMobilePanelCLoseButtonActual.className = `navBar${navBarClassNameNumberSelector}MainMobilePanelCLoseButtonActual`







                                                                    var createNavBarMainMobilePanelCloseButtonClickerContainer = document.createElement("div")
                                                                    createNavBarMainMobilePanelCloseButtonClickerContainer.className = `navBar${navBarClassNameNumberSelector}MainMobilePanelCloseButtonClickerContainer`

                                                                        var createNavBarMainMobilePanelCLoseButtonClickerClose = document.createElement("div")
                                                                        createNavBarMainMobilePanelCLoseButtonClickerClose.className = `navBar${navBarClassNameNumberSelector}MainMobilePanelCLoseButtonClickerClose`





                                                                

                                                                    var createNavBarMainMainMobilePanelCLoseButtonIconContainer = document.createElement("div")
                                                                    createNavBarMainMainMobilePanelCLoseButtonIconContainer.className = `navBar${navBarClassNameNumberSelector}MainMobilePanelCLoseButtonIconContainer`

                                                                        var createNavBarMainMobilePanelCLoseButtonIconMover = document.createElement("div")
                                                                        createNavBarMainMobilePanelCLoseButtonIconMover.className = `navBar${navBarClassNameNumberSelector}MainMobilePanelCLoseButtonIconMover`

                                                                            var createNavBarMainMobilePanelCLoseButtonIconLineOne = document.createElement("div")
                                                                            createNavBarMainMobilePanelCLoseButtonIconLineOne.className = `navBar${navBarClassNameNumberSelector}MainMobilePanelCLoseButtonIconLineOne`

                                                                            var createNavBarMainMobilePanelCLoseButtonIconLineTwo = document.createElement("div")
                                                                            createNavBarMainMobilePanelCLoseButtonIconLineTwo.className = `navBar${navBarClassNameNumberSelector}MainMobilePanelCLoseButtonIconLineTwo`

                                                                            var createNavBarMainMobilePanelCLoseButtonIconLineThree = document.createElement("div")
                                                                            createNavBarMainMobilePanelCLoseButtonIconLineThree.className = `navBar${navBarClassNameNumberSelector}MainMobilePanelCLoseButtonIconLineThree`





                                                            // STYLE EMENTS
                                                            // //////////////

                                                                createNavBarMainMobilePanelCloseButtonContainer.style = `
                                                                
                                                                    width:100%;
                                                                    height:40px;
                                                                    top:0;
                                                                    position:absolute;
                                                                    transition:all 600ms ease;
                                                                    -webkit-transition:all 600ms ease;
                                                                    -moz-transition:all 600ms ease;
                                                                    -o-transition:all 600ms ease;
                                                                    -ms-transition:all 600ms ease;

                                                                `

                                                                    createNavBarMainMobilePanelCLoseButtonBlock.style = `
                                                                    
                                                                        width:40px;
                                                                        height:40px;
                                                                        z-index:2;
                                                                        float:right;
                                                                        position:relative;
                                                                        transition:all 600ms ease;
                                                                        -webkit-transition:all 600ms ease;
                                                                        -moz-transition:all 600ms ease;
                                                                        -o-transition:all 600ms ease;
                                                                        -ms-transition:all 600ms ease;

                                                                    `

                                                                        createNavBarMainMobilePanelCLoseButtonActual.style = `
                                                                        
                                                                            width:30px;
                                                                            height:30px;
                                                                            top:0;
                                                                            left:0;
                                                                            right:0;
                                                                            bottom:0;
                                                                            margin:auto;
                                                                            position:absolute;
                                                                            background:#d1e751;
                                                                            border-radius:1000px;
                                                                            transition:all 600ms ease;
                                                                            -webkit-transition:all 600ms ease;
                                                                            -moz-transition:all 600ms ease;
                                                                            -o-transition:all 600ms ease;
                                                                            -ms-transition:all 600ms ease;

                                                                        `







                                                                            createNavBarMainMobilePanelCloseButtonClickerContainer.style = `
                                                                            
                                                                                width:100%;
                                                                                height:100%;
                                                                                z-index:1;
                                                                                position:absolute;
                                                                                border-radius:1000px;
                                                                                transition:all 600ms ease;
                                                                                -webkit-transition:all 600ms ease;
                                                                                -moz-transition:all 600ms ease;
                                                                                -o-transition:all 600ms ease;
                                                                                -ms-transition:all 600ms ease;

                                                                            `

                                                                                createNavBarMainMobilePanelCLoseButtonClickerClose.style = `
                                                                                
                                                                                    width:100%;
                                                                                    height:100%;
                                                                                    cursor:pointer;
                                                                                    z-index:0;
                                                                                    position:absolute;
                                                                                    background:#d8a5ec;
                                                                                    border-radius:1000px;
                                                                                    transition:all 600ms ease;
                                                                                    -webkit-transition:all 600ms ease;
                                                                                    -moz-transition:all 600ms ease;
                                                                                    -o-transition:all 600ms ease;
                                                                                    -ms-transition:all 600ms ease;

                                                                                `



                                                                            createNavBarMainMainMobilePanelCLoseButtonIconContainer.style = `
                                                                            
                                                                                width:100%;
                                                                                height:100%;
                                                                                z-index:0;
                                                                                left:0;
                                                                                right:0;
                                                                                margin:0px auto;
                                                                                position:absolute;
                                                                                border-radius:1000px;
                                                                                transition:all 600ms ease;
                                                                                -webkit-transition:all 600ms ease;
                                                                                -moz-transition:all 600ms ease;
                                                                                -o-transition:all 600ms ease;
                                                                                -ms-transition:all 600ms ease;

                                                                            `

                                                                                createNavBarMainMobilePanelCLoseButtonIconMover.style = `
                                                                                
                                                                                    width:15px;
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

                                                                                    createNavBarMainMobilePanelCLoseButtonIconLineOne.style = `
                                                                                
                                                                                        width:100%;
                                                                                        height:3px;
                                                                                        /* top:2px; */
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

                                                                                    createNavBarMainMobilePanelCLoseButtonIconLineTwo.style = `
                                                                                
                                                                                        width:100%;
                                                                                        height:3px;
                                                                                        top:0;
                                                                                        left:0;
                                                                                        right:0;
                                                                                        bottom:0;
                                                                                        margin:auto;
                                                                                        opacity:0;
                                                                                        position:absolute;
                                                                                        background:#2C2C2C;
                                                                                        transition:all 600ms ease;
                                                                                        -webkit-transition:all 600ms ease;
                                                                                        -moz-transition:all 600ms ease;
                                                                                        -o-transition:all 600ms ease;
                                                                                        -ms-transition:all 600ms ease;

                                                                                    `

                                                                                    createNavBarMainMobilePanelCLoseButtonIconLineThree.style = `
                                                                                
                                                                                        width:100%;
                                                                                        height:3px;
                                                                                        /* top:14px; */
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







                                                                    // APPEND ELEMNTS TO PARENT 
                                                                    // ////////////////////////

                                                                        createNavBarMainMobilePanelResizer.appendChild(createNavBarMainMobilePanelCloseButtonContainer)

                                                                            createNavBarMainMobilePanelCloseButtonContainer.appendChild(createNavBarMainMobilePanelCLoseButtonBlock)

                                                                                createNavBarMainMobilePanelCLoseButtonBlock.appendChild(createNavBarMainMobilePanelCLoseButtonActual)






                                                                                    createNavBarMainMobilePanelCLoseButtonActual.appendChild(createNavBarMainMobilePanelCloseButtonClickerContainer)

                                                                                        createNavBarMainMobilePanelCloseButtonClickerContainer.appendChild(createNavBarMainMobilePanelCLoseButtonClickerClose)






                                                                                    createNavBarMainMobilePanelCLoseButtonActual.appendChild(createNavBarMainMainMobilePanelCLoseButtonIconContainer)

                                                                                        createNavBarMainMainMobilePanelCLoseButtonIconContainer.appendChild(createNavBarMainMobilePanelCLoseButtonIconMover)

                                                                                            createNavBarMainMobilePanelCLoseButtonIconMover.appendChild(createNavBarMainMobilePanelCLoseButtonIconLineOne)

                                                                                            createNavBarMainMobilePanelCLoseButtonIconMover.appendChild(createNavBarMainMobilePanelCLoseButtonIconLineTwo)

                                                                                            createNavBarMainMobilePanelCLoseButtonIconMover.appendChild(createNavBarMainMobilePanelCLoseButtonIconLineThree)







                                                    // HEADLINE CONTAINER
                                                    // //////////////

                                                        var createNavBarMainMobileMenuItemsContentContainer = document.createElement("div")
                                                        createNavBarMainMobileMenuItemsContentContainer.className = `navBar${navBarClassNameNumberSelector}MainMobileMenuItemsContentContainer`



                                                            // STYLE EMENTS
                                                            // //////////////

                                                                createNavBarMainMobileMenuItemsContentContainer.style = `
                                                                
                                                                    width:100%;
                                                                    height:100%;
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



                                                                    // APPEND ELEMNTS TO PARENT 
                                                                    // ////////////////////////

                                                                        createNavBarMainMobilePanelCloseButtonContainer.appendChild(createNavBarMainMobileMenuItemsContentContainer)



                                                                        

                                                    // HEADLINE BLOCK
                                                    // //////////////

                                                        var createNavBarMainMobileMenuItemsHeadlineContentContainer = document.createElement("div")
                                                        createNavBarMainMobileMenuItemsHeadlineContentContainer.className = `navBar${navBarClassNameNumberSelector}MainMobileMenuItemsHeadlineContentContainer`

                                                            var createNavBarMainMobileMenuItemsHeadlineContentActual = document.createElement("div")
                                                            createNavBarMainMobileMenuItemsHeadlineContentActual.className = `navBar${navBarClassNameNumberSelector}MainMobileMenuItemsHeadlineContentActual`



                                                                    // STYLE EMENTS
                                                                    // //////////////

                                                                        createNavBarMainMobileMenuItemsHeadlineContentContainer.style = `
                                                                        
                                                                            width:100%;
                                                                            z-index:1;
                                                                            display:block;
                                                                            position:relative;
                                                                            transition:all 600ms ease;
                                                                            -webkit-transition:all 600ms ease;
                                                                            -moz-transition:all 600ms ease;
                                                                            -o-transition:all 600ms ease;
                                                                            -ms-transition:all 600ms ease;

                                                                        `

                                                                            createNavBarMainMobileMenuItemsHeadlineContentActual.style = `
                                                                            
                                                                                width:100%;
                                                                                color:#FFFFFF;
                                                                                font-size:40px;
                                                                                text-align:left;
                                                                                font-weight:700;
                                                                                font-family:Arial, Helvetica, sans-serif;
                                                                                letter-spacing:2px;
                                                                                transition:all 600ms ease;
                                                                                -webkit-transition:all 600ms ease;
                                                                                -moz-transition:all 600ms ease;
                                                                                -o-transition:all 600ms ease;
                                                                                -ms-transition:all 600ms ease;

                                                                            `



                                                                                // APPEND TEXT TO BLOCK
                                                                                // ////////////////////////

                                                                                    createNavBarMainMobileMenuItemsHeadlineContentActual.textContent = "MENU"



                                                                                // APPEND ELEMNTS TO PARENT 
                                                                                // ////////////////////////

                                                                                    createNavBarMainMobileMenuItemsContentContainer.appendChild(createNavBarMainMobileMenuItemsHeadlineContentContainer)

                                                                                        createNavBarMainMobileMenuItemsHeadlineContentContainer.appendChild(createNavBarMainMobileMenuItemsHeadlineContentActual)



                                                                        

                                                    // ITEMS CONTAINER
                                                    // //////////////

                                                        var createNavBarMainMobileSidePanelMenuItemsContentContainer = document.createElement("div")
                                                        createNavBarMainMobileSidePanelMenuItemsContentContainer.className = `navBar${navBarClassNameNumberSelector}MainMobileSidePanelMenuItemsContentContainer`

                                                            var createNavBarMainMobileMenuItemsContentResizer = document.createElement("div")
                                                            createNavBarMainMobileMenuItemsContentResizer.className = `navBar${navBarClassNameNumberSelector}MainMobileMenuItemsContentResizer`



                                                                // STYLE EMENTS
                                                                // //////////////

                                                                    createNavBarMainMobileSidePanelMenuItemsContentContainer.style = `
                                                                    
                                                                        width:100%;
                                                                        height:100%;
                                                                        top:0;
                                                                        left:0;
                                                                        right:0;
                                                                        bottom:0;
                                                                        margin:auto;
                                                                        display:block;
                                                                        position:100%;
                                                                        transition:all 600ms ease;
                                                                        -webkit-transition:all 600ms ease;
                                                                        -moz-transition:all 600ms ease;
                                                                        -o-transition:all 600ms ease;
                                                                        -ms-transition:all 600ms ease;

                                                                    `

                                                                        createNavBarMainMobileMenuItemsContentResizer.style = `
                                                                        
                                                                            width:100%;
                                                                            margin-top:80px;
                                                                            position:relative;
                                                                            transition:all 600ms ease;
                                                                            -webkit-transition:all 600ms ease;
                                                                            -moz-transition:all 600ms ease;
                                                                            -o-transition:all 600ms ease;
                                                                            -ms-transition:all 600ms ease;

                                                                        `



                                                                                // APPEND ELEMNTS TO PARENT 
                                                                                // ////////////////////////

                                                                                    createNavBarMainMobileMenuItemsContentContainer.appendChild(createNavBarMainMobileSidePanelMenuItemsContentContainer)
                                                                                        createNavBarMainMobileSidePanelMenuItemsContentContainer.appendChild(createNavBarMainMobileMenuItemsContentResizer)





                                                        












                                            // RUN LOOP FOR ITEMS POPULATE
                                            // //////////////

                                                for ( sidePanelItemsPopoulateCounter = 0; sidePanelItemsPopoulateCounter < navBarItemsCounter; sidePanelItemsPopoulateCounter++ ) {

                                                        storeNavBarMobileMenuItemsPopulates[navBarItemFunctionSelect](sidePanelItemsPopoulateCounter)

                                                }












                                            // RUN LOOP FOR ITEMS EVENTS
                                            // //////////////


                                                var getAllMobileMenuNames = []

                                                var getAllMobileMenuItems = []

                                                var getAllMobileMenuItemsUnderliners = []




                                                var getMenuItemsMainNumberCounter = document.querySelector(`.navBar${navBarClassNameNumberSelector}MainMobileMenuItemsContentResizer`).children.length



                                                    // RUN LOOP FOR ARRAY POPULATE
                                                    // ////////////////////

                                                        for ( populateCounter = 0; populateCounter < getMenuItemsMainNumberCounter; populateCounter++ ) {

                                                            var getMenuItemsNamesMainBlocks = document.querySelector(`.navBar${navBarClassNameNumberSelector}MainMobilePanelMenuItemBlock${classNumberMapper[populateCounter]}Container`)

                                                            var getMenuItemsNamesItems = document.querySelector(`.navBar${navBarClassNameNumberSelector}MainMobilePanelMenuItemText${classNumberMapper[populateCounter]}Actual`)

                                                            var getMenuItemsNamesItemsUnderliners = document.querySelector(`.navBar${navBarClassNameNumberSelector}MainMobileMenuItemText${classNumberMapper[populateCounter]}UnderlinerActual`)



                                                                getAllMobileMenuNames.push(getMenuItemsNamesMainBlocks)

                                                                getAllMobileMenuItems.push(getMenuItemsNamesItems)

                                                                getAllMobileMenuItemsUnderliners.push(getMenuItemsNamesItemsUnderliners)

                                                        }












                                            // RUN LOOP FOR ITEMS EVENT LISTENER ASSIGNS
                                            // //////////////

                                                getAllMobileMenuNames.forEach(function (mobileItemsSkipper) {

                                                    // HOVERS EFFECTS ====================
                                                    // ///////////////////////////////////

                                                        mobileItemsSkipper.addEventListener("mouseover", function () {

                                                            var getClickerIndex = getAllMobileMenuNames.indexOf(mobileItemsSkipper)

                                                            var getTextActual = document.querySelector(`.navBar${navBarClassNameNumberSelector}MainMobilePanelMenuItemText${classNumberMapper[getClickerIndex]}Actual`)



                                                                getTextActual.style = `
                                                                
                                                                    width:100%;
                                                                    opacity:1;
                                                                    font-size:15px;
                                                                    text-align:left;
                                                                    padding-left:20px;
                                                                    text-transform:uppercase;
                                                                    transition:all 600ms ease;
                                                                    -webkit-transition:all 600ms ease;
                                                                    -moz-transition:all 600ms ease;
                                                                    -o-transition:all 600ms ease;
                                                                    -ms-transition:all 600ms ease;

                                                                `



                                                            console.log("IN")

                                                            console.log("NUMBER: " + getAllMobileMenuNames.indexOf(mobileItemsSkipper))

                                                        })

                                                        mobileItemsSkipper.addEventListener("mouseleave", function () {

                                                            var getClickerIndex = getAllMobileMenuNames.indexOf(mobileItemsSkipper)

                                                            var getTextActual = document.querySelector(`.navBar${navBarClassNameNumberSelector}MainMobilePanelMenuItemText${classNumberMapper[getClickerIndex]}Actual`)



                                                                getTextActual.style = `
                                                                
                                                                    width:100%;
                                                                    opacity:0.3;
                                                                    font-size:15px;
                                                                    text-align:left;
                                                                    padding-left:0px;
                                                                    text-transform:uppercase;
                                                                    transition:all 600ms ease;
                                                                    -webkit-transition:all 600ms ease;
                                                                    -moz-transition:all 600ms ease;
                                                                    -o-transition:all 600ms ease;
                                                                    -ms-transition:all 600ms ease;

                                                                `
                                                                


                                                            console.log("OUT")

                                                            console.log("NUMBER: " + getAllMobileMenuNames.indexOf(mobileItemsSkipper))

                                                        })

                                                    // CLICKERS EFFECTS ==================
                                                    // ///////////////////////////////////

                                                })












                                            // RUN LOOP FOR ITEMS LINKS MERGE
                                            // //////////////





                                                

                                        }



                                            // MAKE MOBILE MENU ITEMS POPULATE
                                            // //////////////////

                                                function populateMobileMenuItemsOne (populateLoopNumber) {
        
        
                                                    // DECLARE VARIABLES ----
                                                    // //////////////////////
        
                                                        var getSelectedMobileMenuNavBar = document.querySelector(`.navBar${navBarClassNameNumberSelector}MainMobilePanelContentContainer`)
        
        
        
        
        
                                                    // ELEMENT CREATIONS ----
                                                    // //////////////////////
                                                    

                                                        // SIDE PANEL ITEM ONE
                                                        // //////////////

                                                            var createNavBarMainMobilePanelContentItemLineOneContainer = document.createElement("div")
                                                            createNavBarMainMobilePanelContentItemLineOneContainer.className = `navBar${navBarClassNameNumberSelector}MainMobilePanelContentItemLine${classNumberMapper[populateLoopNumber]}Container`


                                                                // STYLE ELEMENTS
                                                                // //////////////

                                                                    createNavBarMainMobilePanelContentItemLineOneContainer.style = `
                                                                    
                                                                        width:100%;
                                                                        height:100%;
                                                                        margin:0px auto;
                                                                        padding:20px 0px;
                                                                        position:relative;
                                                                        display:inline-table;
                                                                        border-bottom:3px solid #2C2C2C;
                                                                        transition:all 600ms ease;
                                                                        -webkit-transition:all 600ms ease;
                                                                        -moz-transition:all 600ms ease;
                                                                        -o-transition:all 600ms ease;
                                                                        -ms-transition:all 600ms ease;

                                                                    `

                                                                        // APPEND ELEMNTS TO PARENT
                                                                        // ////////////////////////

                                                                            getSelectedMobileMenuNavBar.appendChild(createNavBarMainMobilePanelContentItemLineOneContainer)






                                                        // TEXT SIDE CONTAINER
                                                        // //////////////

                                                            var createNavBarMainMobilePanelContentItemLineOneTextSideContainer = document.createElement("div")
                                                            createNavBarMainMobilePanelContentItemLineOneTextSideContainer.className = `navBar${navBarClassNameNumberSelector}MainMobilePanelContentItemLine${classNumberMapper[populateLoopNumber]}TextSideContainer`

                                                                var createNavBarMainMobilePanelContentItemLineOneTextSideActual = document.createElement("div")
                                                                createNavBarMainMobilePanelContentItemLineOneTextSideActual.className = `navBar${navBarClassNameNumberSelector}MainMobilePanelContentItemLine${classNumberMapper[populateLoopNumber]}TextSideActual`


                                                                    // STYLE EMENTS
                                                                    // //////////////

                                                                        createNavBarMainMobilePanelContentItemLineOneTextSideContainer.style = `
                                                                        
                                                                            width:50%;
                                                                            height:100%;
                                                                            top:0;
                                                                            left:0;
                                                                            float:left;
                                                                            position:relative;
                                                                            transition:all 600ms ease;
                                                                            -webkit-transition:all 600ms ease;
                                                                            -moz-transition:all 600ms ease;
                                                                            -o-transition:all 600ms ease;
                                                                            -ms-transition:all 600ms ease;

                                                                        `

                                                                            createNavBarMainMobilePanelContentItemLineOneTextSideActual.style = `
                                                                            
                                                                                width:100%;
                                                                                height:100%;
                                                                                top:0;
                                                                                bottom:0;
                                                                                margin:auto;
                                                                                position:relative;
                                                                                text-align:left;
                                                                                transition:all 600ms ease;
                                                                                -webkit-transition:all 600ms ease;
                                                                                -moz-transition:all 600ms ease;
                                                                                -o-transition:all 600ms ease;
                                                                                -ms-transition:all 600ms ease;

                                                                            `

                                                                                // APPEND TEXT TO BLOCK
                                                                                // ////////////////////////

                                                                                    createNavBarMainMobilePanelContentItemLineOneTextSideActual.textContent = storeNavBarSplits[populateLoopNumber]

                                                                                // APPEND ELEMNTS TO PARENT
                                                                                // ////////////////////////
        
                                                                                    createNavBarMainMobilePanelContentItemLineOneContainer.appendChild(createNavBarMainMobilePanelContentItemLineOneTextSideContainer)

                                                                                        createNavBarMainMobilePanelContentItemLineOneTextSideContainer.appendChild(createNavBarMainMobilePanelContentItemLineOneTextSideActual)






                                                        // ICON SIDE CONTAINER
                                                        // //////////////

                                                            var createNavBarMainMobilePanelContentItemLineOneIconSideContainer = document.createElement("div")
                                                            createNavBarMainMobilePanelContentItemLineOneIconSideContainer.className = `navBar${navBarClassNameNumberSelector}MainMobilePanelContentItemLine${classNumberMapper[populateLoopNumber]}IconSideContainer`

                                                                var createNavBarMainMobilePanelContentItemLineOneIconSideIconButton = document.createElement("div")
                                                                createNavBarMainMobilePanelContentItemLineOneIconSideIconButton.className = `navBar${navBarClassNameNumberSelector}MainMobilePanelContentItemLine${classNumberMapper[populateLoopNumber]}IconSideIconButton`

                                                                    var createNavBarMainMobilePanelContentItemLineOneIconSideIconMover = document.createElement("div")
                                                                    createNavBarMainMobilePanelContentItemLineOneIconSideIconMover.className = `navBar${navBarClassNameNumberSelector}MainMobilePanelContentItemLine${classNumberMapper[populateLoopNumber]}IconSideIconMover`


                                                                        // STYLE EMENTS
                                                                        // //////////////

                                                                            createNavBarMainMobilePanelContentItemLineOneIconSideContainer.style = `
                                                                            
                                                                                width:50%;
                                                                                height:100%;
                                                                                right:0;
                                                                                float:right;
                                                                                display:inline-table;
                                                                                transition:all 600ms ease;
                                                                                -webkit-transition:all 600ms ease;
                                                                                -moz-transition:all 600ms ease;
                                                                                -o-transition:all 600ms ease;
                                                                                -ms-transition:all 600ms ease;

                                                                            `

                                                                                createNavBarMainMobilePanelContentItemLineOneIconSideIconButton.style = `
                                                                                
                                                                                    width:40px;
                                                                                    height:40px;
                                                                                    top:0;
                                                                                    right:0;
                                                                                    bottom:0;
                                                                                    cursor:pointer;
                                                                                    margin:auto auto;
                                                                                    border:3px solid #2C2C2C;
                                                                                    position:absolute;
                                                                                    border-radius:1000px;
                                                                                    transition:all 600ms ease;
                                                                                    -webkit-transition:all 600ms ease;
                                                                                    -moz-transition:all 600ms ease;
                                                                                    -o-transition:all 600ms ease;
                                                                                    -ms-transition:all 600ms ease;

                                                                                `

                                                                                    createNavBarMainMobilePanelContentItemLineOneIconSideIconMover.style = `
                                                                                    
                                                                                        width:25px;
                                                                                        height:25px;
                                                                                        top:0;
                                                                                        left:0;
                                                                                        right:0;
                                                                                        bottom:0;
                                                                                        margin:auto auto;
                                                                                        position:absolute;
                                                                                        transition:all 600ms ease;
                                                                                        -webkit-transition:all 600ms ease;
                                                                                        -moz-transition:all 600ms ease;
                                                                                        -o-transition:all 600ms ease;
                                                                                        -ms-transition:all 600ms ease;

                                                                                    `

                                                                                        // APPEND ELEMNTS TO PARENT
                                                                                        // ////////////////////////

                                                                                            createNavBarMainMobilePanelContentItemLineOneContainer.appendChild(createNavBarMainMobilePanelContentItemLineOneIconSideContainer)

                                                                                                createNavBarMainMobilePanelContentItemLineOneIconSideContainer.appendChild(createNavBarMainMobilePanelContentItemLineOneIconSideIconButton)

                                                                                                    createNavBarMainMobilePanelContentItemLineOneIconSideIconButton.appendChild(createNavBarMainMobilePanelContentItemLineOneIconSideIconMover)








                                                            var createNavBarMainMobilePanelContentItemLineOneIconSideIconLineOne = document.createElement("div")
                                                            createNavBarMainMobilePanelContentItemLineOneIconSideIconLineOne.className = `navBar${navBarClassNameNumberSelector}MainMobilePanelContentItemLine${classNumberMapper[populateLoopNumber]}IconSideIconLineOne`

                                                            var createNavBarMainMobilePanelContentItemLineOneIconSideIconLineTwo = document.createElement("div")
                                                            createNavBarMainMobilePanelContentItemLineOneIconSideIconLineTwo.className = `navBar${navBarClassNameNumberSelector}MainMobilePanelContentItemLine${classNumberMapper[populateLoopNumber]}IconSideIconLineTwo`

                                                            var createNavBarMainMobilePanelContentItemLineOneIconSideIconLineThree = document.createElement("div")
                                                            createNavBarMainMobilePanelContentItemLineOneIconSideIconLineThree.className = `navBar${navBarClassNameNumberSelector}MainMobilePanelContentItemLine${classNumberMapper[populateLoopNumber]}IconSideIconLineThree`


                                                                // STYLE EMENTS
                                                                // //////////////

                                                                    createNavBarMainMobilePanelContentItemLineOneIconSideIconLineOne.style = `
                                                                    
                                                                        width:7.5px;
                                                                        height:3px;
                                                                        top:-6px;
                                                                        left:10px;
                                                                        right:0;
                                                                        bottom:0;
                                                                        margin:auto auto;
                                                                        position:absolute;
                                                                        transform:rotateZ(45deg);
                                                                        background:#2C2C2C;
                                                                        border-radius:1000px;
                                                                        transition:all 600ms ease;
                                                                        -webkit-transition:all 600ms ease;
                                                                        -moz-transition:all 600ms ease;
                                                                        -o-transition:all 600ms ease;
                                                                        -ms-transition:all 600ms ease;

                                                                    `

                                                                    createNavBarMainMobilePanelContentItemLineOneIconSideIconLineTwo.style = `
                                                                    
                                                                        width:12px;
                                                                        height:3px;
                                                                        top:0;
                                                                        left:0;
                                                                        right:0;
                                                                        bottom:0;
                                                                        margin:auto auto;
                                                                        position:absolute;
                                                                        transform:rotateZ(0deg);
                                                                        background:#2C2C2C;
                                                                        border-radius:1000px;
                                                                        transition:all 600ms ease;
                                                                        -webkit-transition:all 600ms ease;
                                                                        -moz-transition:all 600ms ease;
                                                                        -o-transition:all 600ms ease;
                                                                        -ms-transition:all 600ms ease;

                                                                    `

                                                                    createNavBarMainMobilePanelContentItemLineOneIconSideIconLineThree.style = `
                                                                    
                                                                        width:7.5px;
                                                                        height:3px;
                                                                        top:6px;
                                                                        left:10px;
                                                                        right:0;
                                                                        bottom:0;
                                                                        margin:auto auto;
                                                                        position:absolute;
                                                                        transform:rotateZ(-45deg);
                                                                        background:#2C2C2C;
                                                                        border-radius:1000px;
                                                                        transition:all 600ms ease;
                                                                        -webkit-transition:all 600ms ease;
                                                                        -moz-transition:all 600ms ease;
                                                                        -o-transition:all 600ms ease;
                                                                        -ms-transition:all 600ms ease;

                                                                    `

                                                                        // APPEND ELEMNTS TO PARENT
                                                                        // ////////////////////////

                                                                            createNavBarMainMobilePanelContentItemLineOneIconSideIconMover.appendChild(createNavBarMainMobilePanelContentItemLineOneIconSideIconLineOne)

                                                                            createNavBarMainMobilePanelContentItemLineOneIconSideIconMover.appendChild(createNavBarMainMobilePanelContentItemLineOneIconSideIconLineTwo)

                                                                            createNavBarMainMobilePanelContentItemLineOneIconSideIconMover.appendChild(createNavBarMainMobilePanelContentItemLineOneIconSideIconLineThree)



                                                }





                                                function populateMobileMenuItemsTwo (populateLoopNumber) {
        
        
                                                    // DECLARE VARIABLES ----
                                                    // //////////////////////
        
                                                        var getSelectedMobilePanelMenuNavBar = document.querySelector(`.navBar${navBarClassNameNumberSelector}MainMobileMenuItemsContentResizer`)
        
        
        
        
        
                                                    // ELEMENT CREATIONS ----
                                                    // //////////////////////
                                                    

                                                        // SIDE PANEL ITEM ONE
                                                        // //////////////

                                                            var createNavBarMainMobilePanelMenuItemBlockOneContainer = document.createElement("div")
                                                            createNavBarMainMobilePanelMenuItemBlockOneContainer.className = `navBar${navBarClassNameNumberSelector}MainMobilePanelMenuItemBlock${classNumberMapper[populateLoopNumber]}Container`

                                                                var createNavBarMainMobilePanelMenuItemBlockOneActual = document.createElement("div")
                                                                createNavBarMainMobilePanelMenuItemBlockOneActual.className = `navBar${navBarClassNameNumberSelector}MainMobilePanelMenuItemText${classNumberMapper[populateLoopNumber]}Actual`

                                                                    var createNavBarMainMobilePanelMenuItemTextOneUnderliner = document.createElement("div")
                                                                    createNavBarMainMobilePanelMenuItemTextOneUnderliner.className = `navBar${navBarClassNameNumberSelector}MainMobilePanelMenuItemText${classNumberMapper[populateLoopNumber]}Underliner`

                                                                        var createNavBarMainMobileMenuItemTextOneUnderlinerActual = document.createElement("div")
                                                                        createNavBarMainMobileMenuItemTextOneUnderlinerActual.className = `navBar${navBarClassNameNumberSelector}MainMobileMenuItemText${classNumberMapper[populateLoopNumber]}UnderlinerActual`


                                                                // STYLE ELEMENTS
                                                                // //////////////

                                                                    createNavBarMainMobilePanelMenuItemBlockOneContainer.style = `
                                                                    
                                                                        width:100%;
                                                                        height:40px;
                                                                        color:#FFFFFF;
                                                                        cursor:pointer;
                                                                        position:relative;
                                                                        font-weight:700;
                                                                        padding-top:20px;
                                                                        font-family:Arial, Helvetica, sans-serif;
                                                                        letter-spacing:10px;
                                                                        transition:all 600ms ease;
                                                                        -webkit-transition:all 600ms ease;
                                                                        -moz-transition:all 600ms ease;
                                                                        -o-transition:all 600ms ease;
                                                                        -ms-transition:all 600ms ease;

                                                                    `

                                                                        createNavBarMainMobilePanelMenuItemBlockOneActual.style = `
                                                                        
                                                                            width:100%;
                                                                            opacity:0.3;
                                                                            font-size:15px;
                                                                            text-align:left;
                                                                            padding-left:0px;
                                                                            text-transform:uppercase;
                                                                            transition:all 600ms ease;
                                                                            -webkit-transition:all 600ms ease;
                                                                            -moz-transition:all 600ms ease;
                                                                            -o-transition:all 600ms ease;
                                                                            -ms-transition:all 600ms ease;

                                                                        `

                                                                            createNavBarMainMobilePanelMenuItemTextOneUnderliner.style = `
                                                                            
                                                                                width:100%;
                                                                                bottom:0;
                                                                                margin:auto;
                                                                                position:absolute;
                                                                                transition:all 600ms ease;
                                                                                -webkit-transition:all 600ms ease;
                                                                                -moz-transition:all 600ms ease;
                                                                                -o-transition:all 600ms ease;
                                                                                -ms-transition:all 600ms ease;

                                                                            `

                                                                                createNavBarMainMobileMenuItemTextOneUnderlinerActual.style = `
                                                                                
                                                                                    width:100%;
                                                                                    height:5px;
                                                                                    float:left;
                                                                                    background:#FFFFFF;
                                                                                    transition:all 600ms ease;
                                                                                    -webkit-transition:all 600ms ease;
                                                                                    -moz-transition:all 600ms ease;
                                                                                    -o-transition:all 600ms ease;
                                                                                    -ms-transition:all 600ms ease;

                                                                                `


                                                                        // APPEND TEXT TO BLOCK
                                                                        // //////////////

                                                                            createNavBarMainMobilePanelMenuItemBlockOneActual.textContent = storeNavBarSplits[populateLoopNumber]

                                                                        // APPEND ELEMNTS TO PARENT
                                                                        // ////////////////////////

                                                                            getSelectedMobilePanelMenuNavBar.appendChild(createNavBarMainMobilePanelMenuItemBlockOneContainer)

                                                                                createNavBarMainMobilePanelMenuItemBlockOneContainer.appendChild(createNavBarMainMobilePanelMenuItemBlockOneActual)

                                                                                createNavBarMainMobilePanelMenuItemBlockOneContainer.appendChild(createNavBarMainMobilePanelMenuItemTextOneUnderliner)

                                                                                    createNavBarMainMobilePanelMenuItemTextOneUnderliner.appendChild(createNavBarMainMobileMenuItemTextOneUnderlinerActual)






                                                        



                                                }










                // CREATE FUNCTION FOR POPULATE xxxxxxxxx
                // //////////////////////////////////////

                    function runCleanUpAndPopulateForNav (sizeChecker) {


                        // CLEAR OUT NAV BAR ITEMS COLLECTION
                        // //////////////////////////////

                            navBarItemsCounter = []


                        // DECLARE VARIABLES ////////////
                        // //////////////////////////////
    
                            var getBodyActualElement = document.body
                            var getBodyFirstChild = getBodyActualElement.children[0]
                        

                        // CHECK IF BODY CONTAINS NAV BAR CHILD AND RUN POPULATE
                        // //////////////////////////////

                            if ( 
                                
                                    ( getBodyFirstChild != null || 
                                    getBodyFirstChild != undefined ) &&

                                    ( getBodyFirstChild.tagName != "script" )
                                
                                ) 
                                
                            {

                                    // REMOVE CURRENT ELEMENTS FOR FRESH RESTART
                                    // //////////////////

                                        // CHECK IF IT DOESNT EXIST
                                        // //////////////

                                            if ( getBodyFirstChild.className.includes("navBar") ) 
                                                
                                            {

                                                // CAPTURE NAV BAR CLASSNAME 
                                                // //////

                                                    getNavBarClassName = getBodyFirstChild.className

                                                // DELETE CURRENT NAV BAR
                                                // //////

                                                    getBodyFirstChild.remove(getBodyFirstChild)

                                                // CREATE NEW NAV BAR FOR NAVIGATEION POPOULATE
                                                // //////

                                                    var createNavBarFirst = document.createElement(`div`)
                                                    createNavBarFirst.className = getNavBarClassName


                                                        // STYLE NAV BAR
                                                        // //

                                                            createNavBarFirst.style = `
                                                            
                                                                width:${sizeChecker}px;
                                                                margin:0px auto;
                                                                z-index:2;
                                                                position:fixed;
                                                                transition:all 600ms ease;
                                                                -webkit-transition:all 600ms ease;
                                                                -moz-transition:all 600ms ease;
                                                                -o-transition:all 600ms ease;
                                                                -ms-transition:all 600ms ease;

                                                            `


                                                        // APPEND NEW NAV BAR TO BODY
                                                        // //

                                                            getBodyActualElement.appendChild(createNavBarFirst)


                                                // EMPTY VARIATIONS ARRAY -
                                                // ////////////////////////

                                                    storeNavBarVariations = []

                                                // PUSH FIRST COPY OF NAV SELECT
                                                // ////////////////////////

                                                    storeNavBarVariations.push(getBodyFirstChild)

                                                // RUN POPULATE OF FRESH COPY
                                                // ////////////////////////

                                                    getLivingNavBar()

                                            }


                                        // IF DOESNT INCLUDE NAV BAR TEXT 
                                        // //////////////

                                            else {


                                                // CLEAR OUT NAV BAR ITEMS COLLECTION
                                                // //////////////////////////////
        
                                                    navBarItemsCounter = []

                                                // REMOVE CHILD FROM WHEREVER IT MAY BE PLACED
                                                // //////

                                                    var getNavBarSelector = document.querySelector(`.${getNavBarClassName}`)

                                                        getNavBarSelector.remove(getNavBarSelector)

                                                // CREATE NEW NAV BAR FOR NAVIGATEION POPOULATE
                                                // //////

                                                    var createNavBarFirst = document.createElement(`div`)
                                                    createNavBarFirst.className = getNavBarClassName


                                                        // STYLE NAV BAR
                                                        // //

                                                            createNavBarFirst.style = `
                                                            
                                                                width:${sizeChecker}px;
                                                                margin:0px auto;
                                                                z-index:2;
                                                                position:fixed;
                                                                transition:all 600ms ease;
                                                                -webkit-transition:all 600ms ease;
                                                                -moz-transition:all 600ms ease;
                                                                -o-transition:all 600ms ease;
                                                                -ms-transition:all 600ms ease;

                                                            `


                                                        // APPEND NEW NAV BAR TO BODY
                                                        // //

                                                            getBodyActualElement.appendChild(createNavBarFirst)


                                                // EMPTY VARIATIONS ARRAY -
                                                // ////////////////////////

                                                    storeNavBarVariations = []

                                                // PUSH FIRST COPY OF NAV SELECT
                                                // ////////////////////////

                                                    storeNavBarVariations.push(getBodyFirstChild)

                                                // RUN POPULATE OF FRESH COPY
                                                // ////////////////////////

                                                    getLivingNavBar()

                                            }

                            }

                    }







                // CHECK FOR SCREEN SIZE CURRENT ------------------------
                // //////////////////////////////////////////////////////

                    function detectCurrentWindowSize () {

                        var currentWindowSize = window.innerWidth

                            // FOR SCREEN SIZE 300 ------------------
                            // //////////////////////////////////////

                                if ( currentWindowSize > 0 && currentWindowSize < 300 ) {

                                    console.log("300 LOCKED IN...")

                                    if (document.body.children[0].className.includes("navBar") == false){

                                        console.log("NOT NAV")

                                    }

                                    else {

                                        // UPDATE WINDOW SIZE FOR COLLECTOR
                                        // //////////////////////////

                                            screenWidthSelector = 300

                                                // SWITCH TO MOBILE POPULATIONS
                                                // //////////////////

                                                    getNavBarMobileMenuItemsSetting = "block"
                                                    getNavBarDesktopMenuItemsSetting = "none"

                                                // SWITCH TO MOBILE SIZINGS
                                                // //////////////////

                                                    getNavBarDesktopTitleItemsSizing = "80%"
                                                    getNavBarDesktopMenuItemsSizing = "20%"

                                                // REMOVE ALL CONTENTS AND RUN REPOPULATE
                                                // //////////////////

                                                    var getBodyActualElement = document.body
                                                    var getBodyFirstChild = getBodyActualElement.children[0]

                                                        // CHECK IF BODY CONTAINS MORE THAN ONE CHILD
                                                        // //////

                                                            if ( 
                                                                
                                                                    ( getBodyFirstChild != null || 
                                                                    getBodyFirstChild != undefined ) &&

                                                                    ( getBodyFirstChild.tagName != "script" )
                                                                
                                                                ) 
                                                                
                                                            {

                                                                // EMPTY VARIATIONS ARRAY -
                                                                // ////////////////////////

                                                                    storeNavBarVariations = []

                                                                // PUSH FIRST COPY OF NAV SELECT
                                                                // ////////////////////////

                                                                    storeNavBarVariations.push(getBodyFirstChild)

                                                                // RUN POPULATE -----------
                                                                // ////////////////////////

                                                                    getLivingNavBar()

                                                            }


                                    }

                                                    

                                }

                            // FOR SCREEN SIZE 500 ------------------
                            // //////////////////////////////////////

                                else if ( currentWindowSize > 300 && currentWindowSize < 500 ) {

                                    console.log("300 LOCKED IN...")

                                    if (document.body.children[0].className.includes("navBar") == false){

                                        console.log("NOT NAV")

                                    }

                                    else {

                                        // UPDATE WINDOW SIZE FOR COLLECTOR
                                        // //////////////////////////

                                            screenWidthSelector = 300

                                                // SWITCH TO MOBILE POPULATIONS
                                                // //////////////////

                                                    getNavBarMobileMenuItemsSetting = "block"
                                                    getNavBarDesktopMenuItemsSetting = "none"

                                                // SWITCH TO MOBILE SIZINGS
                                                // //////////////////

                                                    getNavBarDesktopTitleItemsSizing = "80%"
                                                    getNavBarDesktopMenuItemsSizing = "20%"

                                                // REMOVE ALL CONTENTS AND RUN REPOPULATE
                                                // //////////////////

                                                    var getBodyActualElement = document.body
                                                    var getBodyFirstChild = getBodyActualElement.children[0]

                                                        // CHECK IF BODY CONTAINS MORE THAN ONE CHILD
                                                        // //////

                                                            if ( 
                                                                
                                                                    ( getBodyFirstChild != null || 
                                                                    getBodyFirstChild != undefined ) &&

                                                                    ( getBodyFirstChild.tagName != "script" )
                                                                
                                                                ) 
                                                                
                                                            {

                                                                // EMPTY VARIATIONS ARRAY -
                                                                // ////////////////////////

                                                                    storeNavBarVariations = []

                                                                // PUSH FIRST COPY OF NAV SELECT
                                                                // ////////////////////////

                                                                    storeNavBarVariations.push(getBodyFirstChild)

                                                                // RUN POPULATE -----------
                                                                // ////////////////////////

                                                                    getLivingNavBar()

                                                            }


                                    }

                                                    

                                }

                            // FOR SCREEN SIZE 800 ------------------
                            // //////////////////////////////////////

                                else if ( currentWindowSize > 500 && currentWindowSize < 800 ) {

                                    console.log("500 LOCKED IN...")

                                    if (document.body.children[0].className.includes("navBar") == false){

                                        console.log("NOT NAV")

                                    }

                                    else {

                                        // UPDATE WINDOW SIZE FOR COLLECTOR
                                        // //////////////////////////

                                            screenWidthSelector = 500

                                                // SWITCH TO MOBILE POPULATIONS
                                                // //////////////////

                                                    getNavBarMobileMenuItemsSetting = "block"
                                                    getNavBarDesktopMenuItemsSetting = "none"

                                                // SWITCH TO MOBILE SIZINGS
                                                // //////////////////

                                                    getNavBarDesktopTitleItemsSizing = "60%"
                                                    getNavBarDesktopMenuItemsSizing = "40%"

                                                // REMOVE ALL CONTENTS AND RUN REPOPULATE
                                                // //////////////////

                                                    var getBodyActualElement = document.body
                                                    var getBodyFirstChild = getBodyActualElement.children[0]

                                                        // CHECK IF BODY CONTAINS MORE THAN ONE CHILD
                                                        // //////

                                                            if ( 
                                                                
                                                                    ( getBodyFirstChild != null || 
                                                                    getBodyFirstChild != undefined ) &&

                                                                    ( getBodyFirstChild.tagName != "script" )
                                                                
                                                                ) 
                                                                
                                                            {

                                                                // EMPTY VARIATIONS ARRAY -
                                                                // ////////////////////////

                                                                    storeNavBarVariations = []

                                                                // PUSH FIRST COPY OF NAV SELECT
                                                                // ////////////////////////

                                                                    storeNavBarVariations.push(getBodyFirstChild)

                                                                // RUN POPULATE -----------
                                                                // ////////////////////////

                                                                    getLivingNavBar()

                                                            }


                                    }



                                                    

                                }

                            // FOR SCREEN SIZE 1000 -----------------
                            // //////////////////////////////////////

                                else if ( currentWindowSize > 800 && currentWindowSize < 1000 ) {

                                    console.log("800 LOCKED IN...")

                                    if (document.body.children[0].className.includes("navBar") == false){

                                        console.log("NOT NAV")

                                    }

                                    else {

                                        // UPDATE WINDOW SIZE FOR COLLECTOR
                                        // //////////////////////////

                                            screenWidthSelector = 800

                                                // SWITCH TO MOBILE POPULATIONS
                                                // //////////////////

                                                    getNavBarMobileMenuItemsSetting = "none"
                                                    getNavBarDesktopMenuItemsSetting = "inline-table"

                                                // SWITCH TO MOBILE SIZINGS
                                                // //////////////////

                                                    getNavBarDesktopTitleItemsSizing = "40%"
                                                    getNavBarDesktopMenuItemsSizing = "60%"

                                                // REMOVE ALL CONTENTS AND RUN REPOPULATE
                                                // //////////////////

                                                    var getBodyActualElement = document.body
                                                    var getBodyFirstChild = getBodyActualElement.children[0]

                                                        // CHECK IF BODY CONTAINS MORE THAN ONE CHILD
                                                        // //////

                                                            if ( 
                                                                
                                                                    ( getBodyFirstChild != null || 
                                                                    getBodyFirstChild != undefined ) &&

                                                                    ( getBodyFirstChild.tagName != "script" )
                                                                
                                                                ) 
                                                                
                                                            {

                                                                // EMPTY VARIATIONS ARRAY -
                                                                // ////////////////////////

                                                                    storeNavBarVariations = []

                                                                // PUSH FIRST COPY OF NAV SELECT
                                                                // ////////////////////////

                                                                    storeNavBarVariations.push(getBodyFirstChild)

                                                                // RUN POPULATE -----------
                                                                // ////////////////////////

                                                                    getLivingNavBar()

                                                            }


                                    }


                                }

                            // FOR SCREEN SIZE 1200 -----------------
                            // //////////////////////////////////////

                                else if ( currentWindowSize > 1000 && currentWindowSize < 1200 ) {

                                    console.log("1000 LOCKED IN...")

                                    if (document.body.children[0].className.includes("navBar") == false){

                                        console.log("NOT NAV")

                                    }

                                    else {

                                        // UPDATE WINDOW SIZE FOR COLLECTOR
                                        // //////////////////////////

                                            screenWidthSelector = 1000

                                                // SWITCH TO MOBILE POPULATIONS
                                                // //////////////////

                                                    getNavBarMobileMenuItemsSetting = "none"
                                                    getNavBarDesktopMenuItemsSetting = "inline-table"

                                                // SWITCH TO MOBILE SIZINGS
                                                // //////////////////

                                                    getNavBarDesktopTitleItemsSizing = "40%"
                                                    getNavBarDesktopMenuItemsSizing = "60%"

                                                // REMOVE ALL CONTENTS AND RUN REPOPULATE
                                                // //////////////////

                                                    var getBodyActualElement = document.body
                                                    var getBodyFirstChild = getBodyActualElement.children[0]

                                                        // CHECK IF BODY CONTAINS MORE THAN ONE CHILD
                                                        // //////

                                                            if ( 
                                                                
                                                                    ( getBodyFirstChild != null || 
                                                                    getBodyFirstChild != undefined ) &&

                                                                    ( getBodyFirstChild.tagName != "script" )
                                                                
                                                                ) 
                                                                
                                                            {

                                                                // EMPTY VARIATIONS ARRAY -
                                                                // ////////////////////////

                                                                    storeNavBarVariations = []

                                                                // PUSH FIRST COPY OF NAV SELECT
                                                                // ////////////////////////

                                                                    storeNavBarVariations.push(getBodyFirstChild)

                                                                // RUN POPULATE -----------
                                                                // ////////////////////////

                                                                    getLivingNavBar()

                                                            }


                                    }

                                                    

                                }

                            // FOR SCREEN SIZE 1200 + ---------------
                            // //////////////////////////////////////

                                else if ( currentWindowSize > 1200 ) {

                                    console.log("BEYOND LOCKED IN...")

                                    if (document.body.children[0].className.includes("navBar") == false){

                                        console.log("NOT NAV")

                                    }

                                    else {

                                        // UPDATE WINDOW SIZE FOR COLLECTOR
                                        // //////////////////////////

                                            screenWidthSelector = 1200

                                                // SWITCH TO MOBILE POPULATIONS
                                                // //////////////////

                                                    getNavBarMobileMenuItemsSetting = "none"
                                                    getNavBarDesktopMenuItemsSetting = "inline-table"

                                                // SWITCH TO MOBILE SIZINGS
                                                // //////////////////

                                                    getNavBarDesktopTitleItemsSizing = "40%"
                                                    getNavBarDesktopMenuItemsSizing = "60%"

                                                // REMOVE ALL CONTENTS AND RUN REPOPULATE
                                                // //////////////////

                                                    var getBodyActualElement = document.body
                                                    var getBodyFirstChild = getBodyActualElement.children[0]

                                                        // CHECK IF BODY CONTAINS MORE THAN ONE CHILD
                                                        // //////

                                                            if ( 
                                                                
                                                                    ( getBodyFirstChild != null || 
                                                                    getBodyFirstChild != undefined ) &&

                                                                    ( getBodyFirstChild.tagName != "script" )
                                                                
                                                                ) 
                                                                
                                                            {

                                                                // EMPTY VARIATIONS ARRAY -
                                                                // ////////////////////////

                                                                    storeNavBarVariations = []

                                                                // PUSH FIRST COPY OF NAV SELECT
                                                                // ////////////////////////

                                                                    storeNavBarVariations.push(getBodyFirstChild)

                                                                // RUN POPULATE -----------
                                                                // ////////////////////////

                                                                    getLivingNavBar()

                                                            }


                                    }

                                                    

                                }

                    }


















        


        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        // ///////////////////////////////////////////////////////////////////////////////////////////
        // INTRO HEADER CREATION SECTION =============================================================
        // ///////////////////////////////////////////////////////////////////////////////////////////
        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>









            















        // EVENTS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        // //////////////////////////////////////////////////////////////

            // EVENTS FOR NAV BARS --------------------------------------
            // //////////////////////////////////////////////////////////

                // CHECK FOR SCREEN SIZE CHANGE -------------------------
                // //////////////////////////////////////////////////////

                    window.addEventListener("resize", function () {

                        // DECLARE PRIMARY VARIABLES ////////////////////
                        // //////////////////////////////////////////////

                            var windowWidth = window.innerWidth




                            // CHECK IF WINDOW IS IN SIZE xxxxxxxxxxxxxxx
                            // //////////////////////////////////////////

                                // FOR SCREEN SIZE 300 ------------------
                                // //////////////////////////////////////

                                    if ( windowWidth > 0 && windowWidth < 300 ) {

                                        console.log("300 LOCKED IN...")

                                            // UPDATE WINDOW SIZE FOR COLLECTOR
                                            // //////////////////////////

                                                screenWidthSelector = 300

                                                    // SWITCH TO MOBILE POPULATIONS
                                                    // //////////////////

                                                        getNavBarMobileMenuItemsSetting = "block"
                                                        getNavBarDesktopMenuItemsSetting = "none"

                                                    // SWITCH TO MOBILE SIZINGS
                                                    // //////////////////

                                                        getNavBarDesktopTitleItemsSizing = "80%"
                                                        getNavBarDesktopMenuItemsSizing = "20%"

                                                    // RUN CLEANER AND POPULATE
                                                    // //////////////////

                                                        runCleanUpAndPopulateForNav(screenWidthSelector)

                                                        

                                                        

                                    }

                                // FOR SCREEN SIZE 500 ------------------
                                // //////////////////////////////////////

                                    else if ( windowWidth > 300 && windowWidth < 500 ) {

                                        console.log("300 LOCKED IN...")

                                            // UPDATE WINDOW SIZE FOR COLLECTOR
                                            // //////////////////////////

                                                screenWidthSelector = 300

                                                    // SWITCH TO MOBILE POPULATIONS
                                                    // //////////////////

                                                        getNavBarMobileMenuItemsSetting = "block"
                                                        getNavBarDesktopMenuItemsSetting = "none"

                                                    // SWITCH TO MOBILE SIZINGS
                                                    // //////////////////

                                                        getNavBarDesktopTitleItemsSizing = "80%"
                                                        getNavBarDesktopMenuItemsSizing = "20%"

                                                    // RUN CLEANER AND POPULATE
                                                    // //////////////////

                                                        runCleanUpAndPopulateForNav(screenWidthSelector)

                                                        

                                    }

                                // FOR SCREEN SIZE 800 ------------------
                                // //////////////////////////////////////

                                    else if ( windowWidth > 500 && windowWidth < 800 ) {

                                        console.log("500 LOCKED IN...")

                                            // UPDATE WINDOW SIZE FOR COLLECTOR
                                            // //////////////////////////

                                                screenWidthSelector = 500

                                                    // SWITCH TO MOBILE POPULATIONS
                                                    // //////////////////

                                                        getNavBarMobileMenuItemsSetting = "block"
                                                        getNavBarDesktopMenuItemsSetting = "none"

                                                    // SWITCH TO MOBILE SIZINGS
                                                    // //////////////////

                                                        getNavBarDesktopTitleItemsSizing = "60%"
                                                        getNavBarDesktopMenuItemsSizing = "40%"

                                                    // RUN CLEANER AND POPULATE
                                                    // //////////////////

                                                        runCleanUpAndPopulateForNav(screenWidthSelector)

                                                        

                                    }

                                // FOR SCREEN SIZE 1000 -----------------
                                // //////////////////////////////////////

                                    else if ( windowWidth > 800 && windowWidth < 1000 ) {

                                        console.log("800 LOCKED IN...")

                                            // UPDATE WINDOW SIZE FOR COLLECTOR
                                            // //////////////////////////

                                                screenWidthSelector = 800

                                                    // SWITCH TO MOBILE POPULATIONS
                                                    // //////////////////

                                                        getNavBarMobileMenuItemsSetting = "none"
                                                        getNavBarDesktopMenuItemsSetting = "inline-table"

                                                    // SWITCH TO MOBILE SIZINGS
                                                    // //////////////////

                                                        getNavBarDesktopTitleItemsSizing = "40%"
                                                        getNavBarDesktopMenuItemsSizing = "60%"

                                                    // RUN CLEANER AND POPULATE
                                                    // //////////////////

                                                        runCleanUpAndPopulateForNav(screenWidthSelector)

                                                        

                                    }

                                // FOR SCREEN SIZE 1200 -----------------
                                // //////////////////////////////////////

                                    else if ( windowWidth > 1000 && windowWidth < 1200 ) {

                                        console.log("1000 LOCKED IN...")

                                            // UPDATE WINDOW SIZE FOR COLLECTOR
                                            // //////////////////////////

                                                screenWidthSelector = 1000

                                                    // SWITCH TO MOBILE POPULATIONS
                                                    // //////////////////

                                                        getNavBarMobileMenuItemsSetting = "none"
                                                        getNavBarDesktopMenuItemsSetting = "inline-table"

                                                    // SWITCH TO MOBILE SIZINGS
                                                    // //////////////////

                                                        getNavBarDesktopTitleItemsSizing = "40%"
                                                        getNavBarDesktopMenuItemsSizing = "60%"

                                                    // RUN CLEANER AND POPULATE
                                                    // //////////////////

                                                        runCleanUpAndPopulateForNav(screenWidthSelector)

                                                        

                                    }

                                // FOR SCREEN SIZE 1200 + ---------------
                                // //////////////////////////////////////

                                    else if ( windowWidth > 1200 ) {

                                        console.log("BEYOND LOCKED IN...")

                                            // UPDATE WINDOW SIZE FOR COLLECTOR
                                            // //////////////////////////

                                                screenWidthSelector = 1200

                                                    // SWITCH TO MOBILE POPULATIONS
                                                    // //////////////////

                                                        getNavBarMobileMenuItemsSetting = "none"
                                                        getNavBarDesktopMenuItemsSetting = "inline-table"

                                                    // SWITCH TO MOBILE SIZINGS
                                                    // //////////////////

                                                        getNavBarDesktopTitleItemsSizing = "40%"
                                                        getNavBarDesktopMenuItemsSizing = "60%"

                                                    // RUN CLEANER AND POPULATE
                                                    // //////////////////

                                                        runCleanUpAndPopulateForNav(screenWidthSelector)

                                                        

                                    }

                    })