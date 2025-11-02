import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\MixedModeController::words
* @see app/Http/Controllers/MixedModeController.php:12
* @route '/learn-new-words'
*/
export const words = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: words.url(options),
    method: 'get',
})

words.definition = {
    methods: ["get","head"],
    url: '/learn-new-words',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MixedModeController::words
* @see app/Http/Controllers/MixedModeController.php:12
* @route '/learn-new-words'
*/
words.url = (options?: RouteQueryOptions) => {
    return words.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MixedModeController::words
* @see app/Http/Controllers/MixedModeController.php:12
* @route '/learn-new-words'
*/
words.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: words.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MixedModeController::words
* @see app/Http/Controllers/MixedModeController.php:12
* @route '/learn-new-words'
*/
words.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: words.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MixedModeController::words
* @see app/Http/Controllers/MixedModeController.php:12
* @route '/learn-new-words'
*/
const wordsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: words.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MixedModeController::words
* @see app/Http/Controllers/MixedModeController.php:12
* @route '/learn-new-words'
*/
wordsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: words.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MixedModeController::words
* @see app/Http/Controllers/MixedModeController.php:12
* @route '/learn-new-words'
*/
wordsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: words.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

words.form = wordsForm

const learn = {
    words: Object.assign(words, words),
}

export default learn