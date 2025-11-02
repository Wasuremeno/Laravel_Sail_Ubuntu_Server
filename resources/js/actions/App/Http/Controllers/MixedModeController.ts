import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\MixedModeController::index
* @see app/Http/Controllers/MixedModeController.php:12
* @route '/learn-new-words'
*/
const index982dbef9aff48b18270e7f143aeb38a4 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index982dbef9aff48b18270e7f143aeb38a4.url(options),
    method: 'get',
})

index982dbef9aff48b18270e7f143aeb38a4.definition = {
    methods: ["get","head"],
    url: '/learn-new-words',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MixedModeController::index
* @see app/Http/Controllers/MixedModeController.php:12
* @route '/learn-new-words'
*/
index982dbef9aff48b18270e7f143aeb38a4.url = (options?: RouteQueryOptions) => {
    return index982dbef9aff48b18270e7f143aeb38a4.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MixedModeController::index
* @see app/Http/Controllers/MixedModeController.php:12
* @route '/learn-new-words'
*/
index982dbef9aff48b18270e7f143aeb38a4.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index982dbef9aff48b18270e7f143aeb38a4.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MixedModeController::index
* @see app/Http/Controllers/MixedModeController.php:12
* @route '/learn-new-words'
*/
index982dbef9aff48b18270e7f143aeb38a4.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index982dbef9aff48b18270e7f143aeb38a4.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MixedModeController::index
* @see app/Http/Controllers/MixedModeController.php:12
* @route '/learn-new-words'
*/
const index982dbef9aff48b18270e7f143aeb38a4Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index982dbef9aff48b18270e7f143aeb38a4.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MixedModeController::index
* @see app/Http/Controllers/MixedModeController.php:12
* @route '/learn-new-words'
*/
index982dbef9aff48b18270e7f143aeb38a4Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index982dbef9aff48b18270e7f143aeb38a4.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MixedModeController::index
* @see app/Http/Controllers/MixedModeController.php:12
* @route '/learn-new-words'
*/
index982dbef9aff48b18270e7f143aeb38a4Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index982dbef9aff48b18270e7f143aeb38a4.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index982dbef9aff48b18270e7f143aeb38a4.form = index982dbef9aff48b18270e7f143aeb38a4Form
/**
* @see \App\Http\Controllers\MixedModeController::index
* @see app/Http/Controllers/MixedModeController.php:12
* @route '/review-words'
*/
const indexaafc4650d978858afb878c7e60262ad3 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexaafc4650d978858afb878c7e60262ad3.url(options),
    method: 'get',
})

indexaafc4650d978858afb878c7e60262ad3.definition = {
    methods: ["get","head"],
    url: '/review-words',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MixedModeController::index
* @see app/Http/Controllers/MixedModeController.php:12
* @route '/review-words'
*/
indexaafc4650d978858afb878c7e60262ad3.url = (options?: RouteQueryOptions) => {
    return indexaafc4650d978858afb878c7e60262ad3.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MixedModeController::index
* @see app/Http/Controllers/MixedModeController.php:12
* @route '/review-words'
*/
indexaafc4650d978858afb878c7e60262ad3.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexaafc4650d978858afb878c7e60262ad3.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MixedModeController::index
* @see app/Http/Controllers/MixedModeController.php:12
* @route '/review-words'
*/
indexaafc4650d978858afb878c7e60262ad3.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexaafc4650d978858afb878c7e60262ad3.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MixedModeController::index
* @see app/Http/Controllers/MixedModeController.php:12
* @route '/review-words'
*/
const indexaafc4650d978858afb878c7e60262ad3Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexaafc4650d978858afb878c7e60262ad3.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MixedModeController::index
* @see app/Http/Controllers/MixedModeController.php:12
* @route '/review-words'
*/
indexaafc4650d978858afb878c7e60262ad3Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexaafc4650d978858afb878c7e60262ad3.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MixedModeController::index
* @see app/Http/Controllers/MixedModeController.php:12
* @route '/review-words'
*/
indexaafc4650d978858afb878c7e60262ad3Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexaafc4650d978858afb878c7e60262ad3.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

indexaafc4650d978858afb878c7e60262ad3.form = indexaafc4650d978858afb878c7e60262ad3Form
/**
* @see \App\Http\Controllers\MixedModeController::index
* @see app/Http/Controllers/MixedModeController.php:12
* @route '/mixed-mode'
*/
const index91031f99ca6f66e6eba5647162d29adb = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index91031f99ca6f66e6eba5647162d29adb.url(options),
    method: 'get',
})

index91031f99ca6f66e6eba5647162d29adb.definition = {
    methods: ["get","head"],
    url: '/mixed-mode',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MixedModeController::index
* @see app/Http/Controllers/MixedModeController.php:12
* @route '/mixed-mode'
*/
index91031f99ca6f66e6eba5647162d29adb.url = (options?: RouteQueryOptions) => {
    return index91031f99ca6f66e6eba5647162d29adb.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MixedModeController::index
* @see app/Http/Controllers/MixedModeController.php:12
* @route '/mixed-mode'
*/
index91031f99ca6f66e6eba5647162d29adb.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index91031f99ca6f66e6eba5647162d29adb.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MixedModeController::index
* @see app/Http/Controllers/MixedModeController.php:12
* @route '/mixed-mode'
*/
index91031f99ca6f66e6eba5647162d29adb.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index91031f99ca6f66e6eba5647162d29adb.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MixedModeController::index
* @see app/Http/Controllers/MixedModeController.php:12
* @route '/mixed-mode'
*/
const index91031f99ca6f66e6eba5647162d29adbForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index91031f99ca6f66e6eba5647162d29adb.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MixedModeController::index
* @see app/Http/Controllers/MixedModeController.php:12
* @route '/mixed-mode'
*/
index91031f99ca6f66e6eba5647162d29adbForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index91031f99ca6f66e6eba5647162d29adb.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MixedModeController::index
* @see app/Http/Controllers/MixedModeController.php:12
* @route '/mixed-mode'
*/
index91031f99ca6f66e6eba5647162d29adbForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index91031f99ca6f66e6eba5647162d29adb.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index91031f99ca6f66e6eba5647162d29adb.form = index91031f99ca6f66e6eba5647162d29adbForm

export const index = {
    '/learn-new-words': index982dbef9aff48b18270e7f143aeb38a4,
    '/review-words': indexaafc4650d978858afb878c7e60262ad3,
    '/mixed-mode': index91031f99ca6f66e6eba5647162d29adb,
}

/**
* @see \App\Http\Controllers\MixedModeController::markWord
* @see app/Http/Controllers/MixedModeController.php:84
* @route '/mark-word/{wordId}/{status}'
*/
export const markWord = (args: { wordId: string | number, status: string | number } | [wordId: string | number, status: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markWord.url(args, options),
    method: 'post',
})

markWord.definition = {
    methods: ["post"],
    url: '/mark-word/{wordId}/{status}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MixedModeController::markWord
* @see app/Http/Controllers/MixedModeController.php:84
* @route '/mark-word/{wordId}/{status}'
*/
markWord.url = (args: { wordId: string | number, status: string | number } | [wordId: string | number, status: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            wordId: args[0],
            status: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        wordId: args.wordId,
        status: args.status,
    }

    return markWord.definition.url
            .replace('{wordId}', parsedArgs.wordId.toString())
            .replace('{status}', parsedArgs.status.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MixedModeController::markWord
* @see app/Http/Controllers/MixedModeController.php:84
* @route '/mark-word/{wordId}/{status}'
*/
markWord.post = (args: { wordId: string | number, status: string | number } | [wordId: string | number, status: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markWord.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MixedModeController::markWord
* @see app/Http/Controllers/MixedModeController.php:84
* @route '/mark-word/{wordId}/{status}'
*/
const markWordForm = (args: { wordId: string | number, status: string | number } | [wordId: string | number, status: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: markWord.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MixedModeController::markWord
* @see app/Http/Controllers/MixedModeController.php:84
* @route '/mark-word/{wordId}/{status}'
*/
markWordForm.post = (args: { wordId: string | number, status: string | number } | [wordId: string | number, status: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: markWord.url(args, options),
    method: 'post',
})

markWord.form = markWordForm

const MixedModeController = { index, markWord }

export default MixedModeController