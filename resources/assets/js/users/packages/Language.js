import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {


    /* English language
     *****************/
    en: {
        app_name: 'R2H-Live',
        nav: {
            logout: "Logout"
        },
        home: {
            // Menu
            my_list: "My List",
            home: "BROWSE TITLES",
            play: "Play",
            movies: "MOVIES",
            series: "SHOWS",
            kids: "KIDS",
            tv: "LIVE TV",
            browser: 'Browser',
            collection: 'MY COLLLECTION',
            // Trending
            trending: "Trending",
            year: "Year",
            rating: "Rating",
            likes: "Likes",
            recenlty_watched: 'Recently watched',
            // Genre
            genre: "Genre",
            all: "All",
            action: "Action",
            adventure: "Adventure",
            animation: "Animation",
            biography: "Biography",
            comedy: "Comedy",
            crime: "Crime",
            documentary: "Documentary",
            drama: "Drama",
            family: "Family",
            fantasy: "Fantasy",
            history: "History",
            horror: "Horror",
            music: "Music",
            mystery: "Mystery",
            romance: "Romance",
            sci_fi: "Sci-Fi",
            sport: "Sport",
            thriller: "Thriller",
            war: "War",
            sorry_no_result: "SORRY NO RESULT WERE FOUND",
            search: "Search",
            filmography: "filmography"
        },
        setting: {
            user_setting: "User Settings",
            biling: "Billing",
            app_setting: "App setting",
            language: "Language",
            profile: "Profile",
            security: "Security",
            update_payment: "Update payment",
            billing_details: "Billing details",
            change_plan: "Change plan",
            viewing_history: "Viewing history",
            description: "Description",
            next_plan: "Next months plan",
            start_period: "Start period",
            end_period: "End period",
            total: "Total",
            update_profile_picture: "Update Profile Picture",
            name: "Name",
            mail: "E-mail",
            successful_update: "Successful update",
            update: "Update",
            current: "Current",
            password: "Password",
            password_confirm: "Re-enter password ",
            credit_card_or_debit: "Credit card or debit",
            cancel_your_memebrship: "Cancel your memebrship",
            resume_your_memebrship: "Resume your memebrship",
            cancel_memebrship: "Cancel memebrship",
            resume_memebrship: "Resume memebrship",
            cancel_note: "Cancellation will be effective at the end of your current billing",
            change_streaming_plan: "Change Streaming Plan",
            monthly: "Monthly",
            first_week_free: "First week free",
            annual: "Annual",
            mo: "mo",
            y: "y",
            m_price: "15.99",
            y_price: "59.99",
            select_language: "Select language",
            adjust_subtitles: "Adjust captions",
            email_already: "Email has already been taken",
            watch_date: 'Date of view',

            support: "Support Inbox",
            submit_request: "Submit Request",
            submit: 'Submit',
            cancel: 'Cancel',
            open: 'Open',
            close: 'Close',
            status: 'Status',
            subject: 'Subject',
            date: 'Date',
            support_desc: 'Provide a detailed description',
            support_tell: 'Tell us what your enquiry is about',
            reply: 'Send Reply',

            device_activity: 'Device Activity',

            security_message_header: "Please Re-enter Your Password",
            security_message_body: "For your security, you must re-enter your password to continue",
            font_size: "Font Size",
            font_weight: "Font Weight",
            font_color: "Font color",
            font_backgrond: "Background color"

        },


        register: {
            login: "Login",
            signup: "Signup",
            forget_password: "Forget Password ?",
            create_accont: "Don't have an account?",
            agree_role: "By clicking on Sign up, you agree to",
            and: "and",
            stepone: "Just one step!",
            steptwo: "Just two more steps and you're done!",
            payment: "Payment",
            payment_message: "Set up your payment",
            support: "Support",
            choose_plan: "Choose Plan",
            change_plan: "Change Plan",
            choose_plan_message: "Choose a plan that's right for you",
            cancel_anytime: "No commitments, Cancel online at anytime",
            day_free: "Day free",
            loading: "Loading",
            password_reset: "Password Reset",
            password_message: "Please enter your email address, We'll send you an email with a link to reset your password",
            password_help: "If you still need help, contact",
            start_membership: "START MEMBERSHIP",
            finish: "Finish",
            continue: "Continue",
            welcome_to: "Welcome To",
            your: "Your ",
            message_one:   "membership, which begins with a free trial",
            cancel_before: "Cancel anytime before",
            message_two: "and will not be charged, to cancel go to your account setting  and Cancel Membership",
            account_details: "Your account details",
            payment_info: "Payment Information",
            discover: "Discover",
            privacy: "Privacy",
            aboutus: "About us",
            contactus: "Contact us"

        },

        show: {
            summary: "Summary",
            edit: "Edit",
            delete: "Delete",
            season: "Season ",
            episode: "Episode",
            cast: "Cast",
            trailer: 'Trailer',
            similar: 'Similar',
            like: 'Like',
            no_series: 'Coming soon',
            my_collection: 'My Collection',
            soon: "SOON",

        },
        footer: {
            privacy: "Privacy Policy",
            terms: "Terms Of Service",
            contactus: "Contact Us",
            aboutus: "About Us",
            phone_number: "Phone number",
            first_name: "First name",
            last_name: "Last name",
            email: "E-mail",
            message: "Message",
            address: "address",
            tryanothertime: "Try in another time",
            success_send: "Successful send, we will contact you soon"
        },
        report: {
            what_happening: "What's Happening",
            labeling_problem: "Labeling Problem",
            video_problem: "Video Problem",
            sound_problem: "Sound Problem",
            caption_problem: "Captions Problem",
            more_details: "More Details ?",
            send: "SEND",
        }
    },

    /* Hindi language
     *****************/
    // in: {
    //     app_name: 'CinemaRex',

    //     nav: {
    //         logout: "लोग आउट"
    //     },
    //     home: {
    //         // Menu
    //         my_list: "मेरी सूची",
    //         home: "का पता लगाने",
    //         play: "प्ले",
    //         movies: "चलचित्र",
    //         series: "शृंखला",
    //         kids: "बच्चे",
    //         tv: "लाइव टीवी",
    //         browser: 'ब्राउज़र',
    //         collection: 'संग्रह',
    //         // Trending
    //         trending: "रुझान",
    //         year: "साल",
    //         rating: "रेटिंग",
    //         likes: "को यह पसंद है",
    //         recenlty_watched: 'हाल ही में देखा',
    //         // Genre
    //         genre: "शैली",
    //         all: "सब",
    //         action: "कार्य",
    //         adventure: "साहसिक",
    //         animation: "एनीमेशन",
    //         biography: "जीवनी",
    //         comedy: "कॉमेडी",
    //         crime: "अपराध",
    //         documentary: "दस्तावेज़ी",
    //         drama: "नाटक",
    //         family: "परिवार",
    //         fantasy: "कपोल कल्पित",
    //         history: "इतिहास",
    //         horror: "डरावनी",
    //         music: "संगीत",
    //         mystery: "रहस्य",
    //         romance: "रोमांस",
    //         sci_fi: "विज्ञान-कथा",
    //         sport: "खेल",
    //         thriller: "थ्रिलर",
    //         war: "युद्ध",
    //         sorry_no_result: "क्षमा करें कोई परिणाम नहीं मिला",
    //         search: "खोज",
    //         filmography: "फिल्मोग्राफी"
    //     },
    //     setting: {
    //         user_setting: "उपयोगकर्ता सेटिंग",
    //         biling: "बिलिंग",
    //         app_setting: "ऐप सेटिंग",
    //         language: "भाषा",
    //         profile: "प्रोफ़ाइल",
    //         security: "सुरक्षा",
    //         update_payment: "भुगतान को अपडेट करें",
    //         billing_details: "बिलिंग विवरण",
    //         change_plan: "योजना बदलें",
    //         viewing_history: "इतिहास देखना",
    //         description: "विवरण",
    //         next_plan: "अगले महीने की योजना",
    //         start_period: "प्रारंभ अवधि",
    //         end_period: "समाप्ति अवधि",
    //         total: "कुल",
    //         update_profile_picture: "प्रोफाइल चित्र अपडेट करें",
    //         name: "नाम",
    //         mail: "ईमेल",
    //         successful_update: "सफल अपडेट",
    //         update: "अद्यतन",
    //         current: "वर्तमान",
    //         password: "पासवर्ड",
    //         password_confirm: "पासवर्ड की पुष्टि",
    //         credit_card_or_debit: "क्रेडिट कार्ड या डेबिट",
    //         cancel_your_memebrship: "अपने memebrhip रद्द करें",
    //         resume_your_memebrship: "अपनी यादें फिर से शुरू करें",
    //         cancel_memebrship: "सदस्यता रद्द करें",
    //         resume_memebrship: "मेमिब्रिज फिर से शुरू करें",
    //         cancel_note: "रद्दीकरण आपके वर्तमान बिलिंग के अंत में प्रभावी होगा",
    //         change_streaming_plan: "स्ट्रीमिंग प्लान बदलें",
    //         monthly: "महीने के",
    //         first_week_free: "पहला सप्ताह मुफ्त",
    //         annual: "वार्षिक",
    //         mo: "महीना",
    //         y: "साल",
    //         m_price: "15.99",
    //         y_price: "59.99",
    //         select_language: "भाषा चुनिए",
    //         adjust_subtitles: "कैप्शन समायोजित करें", //new
    //         email_already: "ईमेल पहले से ही लिया जा चुका है", // new
    //         watch_date: "खने की तिथि",

    //         support: "इनबॉक्स का समर्थन करें",
    //         submit_request: 'अनुरोध प्रस्तुत करें',
    //         submit: 'जमा करें',
    //         cancel: 'रद्द करना',
    //         open: 'खुला',
    //         close: 'बंद करे',
    //         status: 'स्थिति',
    //         subject: 'विषय',
    //         date: 'तारीख',
    //         support_desc: 'विस्तृत विवरण प्रदान करें',
    //         support_tell: 'हमें बताएं कि आपकी जांच क्या है',
    //         reply: 'उत्तर भेजें',
    //         device_activity: 'डिवाइस गतिविधि',
    //         security_message_header: "अपना पासवर्ड दोबारा दर्ज करें",
    //         security_message_body: "आपकी सुरक्षा के लिए, आपको जारी रखने के लिए अपना पासवर्ड दोबारा दर्ज करना होगा",
    //         font_size: "फ़ॉन्ट आकार",
    //         font_weight: "फ़ॉन्ट वजन",
    //         font_color: "लिपि का रंग",
    //         font_backgrond: "पीछे का रंग"
    //     },

    //     register: {
    //         login: "लॉग इन करें",
    //         signup: "साइन अप करें",
    //         forget_password: "पासवर्ड भूल गए ?",
    //         create_accont: "खाता नहीं है?",
    //         agree_role: "साइन अप पर क्लिक करके, आप सहमत हैं",
    //         and: "तथा",
    //         stepone: "बस एक कदम!",
    //         steptwo: "बस दो और कदम और आप कर रहे हैं!",
    //         payment: "भुगतान",
    //         payment_message: "अपना भुगतान सेट करें",
    //         support: "समर्थन",
    //         choose_plan: "योजना चुनें",
    //         change_plan: "योजना बदलें",
    //         choose_plan_message: "एक योजना चुनें जो आपके लिए सही है",
    //         cancel_anytime: "कोई प्रतिबद्धता नहीं, किसी भी समय ऑनलाइन रद्द करें",
    //         day_free: "दिन मुफ़्त",
    //         loading: "लोड हो रहा है",
    //         password_reset: "पासवर्ड रीसेट",
    //         password_message: "कृपया अपना ईमेल पता दर्ज करें, हम आपको अपना पासवर्ड रीसेट करने के लिए एक लिंक के साथ एक ईमेल भेजेंगे",
    //         password_help: "अगर आपको अभी भी मदद की ज़रूरत है, तो संपर्क करें",
    //         start_membership: "सदस्यता शुरू करें",
    //         finish: "समाप्त",
    //         continue: "जारी रहना",
    //         welcome_to: "आपका स्वागत है",
    //         your: "तुंहारे",
    //         message_one:   "सदस्यता, जो एक नि: शुल्क परीक्षण के साथ शुरू होता है",
    //         cancel_before: "पहले कभी भी रद्द करें",
    //         message_two: "और आपके खाते की सेटिंग में जाने और सदस्यता रद्द करने के लिए रद्द नहीं किया जाएगा",
    //         account_details: "आपका खाता विवरण",
    //         payment_info: "भुगतान की जानकारी",
    //         discover: "डिस्कवर",
    //         privacy: "एकांत",
    //         aboutus: "हमारे बारे में",
    //         contactus: "हमसे संपर्क करें"
    //     },

    //     show: {
    //         summary: "सारांश",
    //         edit: "संपादित करें",
    //         delete: "हटाना",
    //         season: "ऋतु ",
    //         cast: "देना",
    //         trailer: 'ट्रेलर',
    //         similar: 'समान',
    //         like: 'पसंद',
    //         no_series: 'जल्द आ रहा है',
    //         my_collection: 'मेरा संग्रह',
    //         soon: "शीघ्र",
    //     },
    //     footer: {
    //         privacy: "एकांत",
    //         terms: "शर्तें और उपयोग करें",
    //         contactus: "हमसे संपर्क करें",
    //         aboutus: "हमारे बारे में",
    //         phone_number: "फ़ोन नंबर",
    //         first_name: "पहला नाम",
    //         last_name: "अंतिम नाम",
    //         email: "ईमेल",
    //         message: "संदेश",
    //         address: "पता",
    //         tryanothertime: "किसी अन्य समय में प्रयास करें",
    //         success_send: "सफल भेजें, हम जल्द ही आपसे संपर्क करेंगे"
    //     },
    //     report: {
    //         what_happening: "क्या हो रहा है",
    //         labeling_problem: "लेबलिंग समस्या",
    //         video_problem: "वीडियो समस्या",
    //         sound_problem: "ध्वनि समस्या",
    //         caption_problem: "कैप्शन समस्या",
    //         more_details: "अधिक जानकारी ?",
    //         send: "भेजें",

    //     }
    // },
};
// Create VueI18n instance with options
export default new VueI18n({
    locale: "en", // set locale
    messages, // set locale messages
})