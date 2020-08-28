export default function (context, options) {
    return "Helper '" + options.name + "' not found. "
        + "Printing block: " + options.fn(context);
};
