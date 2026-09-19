

function isStrongPassword(given){
    if(given.length < 8){
        console.log(given + " is too short. It must be longer than 8 characters.")
        return false
    }
    if(given.indexOf("password") > -1){
        console.log(given + " contains password. We cannot support this.")
        return false
    }
    if(given.indexOf("1234") > -1){
        console.log(given +" contains 1234. Bad.")
        return false
    }

    let has_number = false
    for (const char of given) {
        digit = char.charCodeAt(0)
        if (digit >= 48 && digit <= 57){
            has_number = true
        }
    }

    if(has_number=== false){
        console.log("No number detected in " + given)
        return false
    }

    console.log(given + " is a good enough password!")
    return true

}

isStrongPassword("beans")
isStrongPassword("youtube5")
isStrongPassword("givens56l")
isStrongPassword("1password")
isStrongPassword("1234this")
isStrongPassword("dfghujygfvcbhnj")