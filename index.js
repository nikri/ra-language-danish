module.exports = {
    ra: {
        action: {
            add_filter: 'Tilføj filter',
            add: 'Tilføj',
            back: 'Tilbage',
            bulk_actions: '%{smart_count} valgt',
            cancel: 'Annuller',
            clear_input_value: 'Ryd',
            clone: 'Klon',
            create: 'Opret',
            delete: 'Slet',
            edit: 'Rediger',
            export: 'Eksporter',
            list: 'Liste',
            refresh: 'Opdater',
            remove_filter: 'Slet filter',
            remove: 'Fjern',
            save: 'Gem',
            show: 'Vis',
            sort: 'Sorter',
            undo: 'Fortryd',
        },
        boolean: {
            true: 'Ja',
            false: 'Nej',
        },
        page: {
            create: 'Opret %{name}',
            dashboard: 'Dashboard',
            edit: '%{name} #%{id}',
            error: 'Noget gik galt',
            list: '%{name} liste',
            loading: 'Henter',
            not_found: 'Ikke fundet',
            show: '%{name} #%{id}',
        },
        input: {
            file: {
                upload_several:
                    'Træk og slip filer for at uploade, eller klik for at vælge filer.',
                upload_single: 'Træk og slip en fil for at uploade, eller klik for at vælge en fil.',
            },
            image: {
                upload_several:
                    'Træk og slip filer for at uploade, eller klik for at vælge filer.',
                upload_single:
                    'Træk og slip et billede for at uploade, eller klik for at vælge en fil.',
            },
            references: {
                all_missing: 'Kan ikke finde nogle referencedata.',
                many_missing:
                    'Mindst en af de tilknyttede referencer synes ikke længere at være tilgængelig.',
                single_missing:
                    'Tilknyttede referencer synes ikke længere at være tilgængelige.',
            },
        },
        message: {
            about: 'Om',
            are_you_sure: 'Er du sikker?',
            bulk_delete_content:
                'Er du sikker på du vil slette %{name}? |||| Er du sikker på du ville slette %{smart_count} poster?',
            bulk_delete_title:
                'Slet %{name} |||| Sletter %{smart_count} %{name} poster',
            delete_content: 'Er du sikker på du ville slette denne post?',
            delete_title: 'Slet %{name} #%{id}',
            details: 'Detaljer',
            error:
                "Der opstod en klientfejl, og din forespørgsel kunne ikke udføres.",
            invalid_form: 'Formularen er ikke gyldig. Kontroller for fejl',
            loading: 'Siden indlæses, Vent et øjeblik',
            no: 'Nej',
            not_found:
                'Enten har du skrevet en forkert URL eller du har fulgt et invalidt link.',
            yes: 'Ja',
        },
        navigation: {
            no_results: 'Ingen resultater fundet',
            no_more_results:
                'Sidenummeret %{page} eksistere ikke. Gå tilbage til forrige side.',
            page_out_of_boundaries: 'Sidenummeret %{page} eksistere ikke',
            page_out_from_end: 'Der findes ikke flere sider',
            page_out_from_begin: 'Der er ingen side før end side 1',
            page_range_info: '%{offsetBegin}-%{offsetEnd} af %{total}',
            next: 'Næste',
            prev: 'Forrige',
        },
        auth: {
            username: 'Brugernavn',
            password: 'Password',
            sign_in: 'Log ind',
            sign_in_error: 'Dit log ind fejlede, prøv igen',
            logout: 'Log ud',
        },
        notification: {
            updated: 'Objekt opdateret |||| %{smart_count} objekter opdateret',
            created: 'Objekt oprettet',
            deleted: 'Objekt slettet |||| %{smart_count} objekter slettet',
            bad_item: 'Incorrect element',
            item_doesnt_exist: 'Objektet findes ikke',
            http_error: 'Kommunikationsfejl med serveren',
            data_provider_error:
                'dataProvider fejl. Check din console for detaljer.',
            canceled: 'Handling blev annulleret',
        },
        validation: {
            required: 'Obligatorisk',
            minLength: 'Skal være mindst %{min} tegn',
            maxLength: 'Skal være max %{max} tegn',
            minValue: 'Skal være mindst %{min}',
            maxValue: 'Skal være max %{max}',
            number: 'Skal være et nummer',
            email: 'Skal være en gyldig e-mail-adresse',
            oneOf: 'Skal være en af: %{options}',
            regex: 'Skal matche et bestemt format (regexp): %{pattern}',
        },
    },
};