from piximind.princo import princo, print_pdf


def verify_credit():
    apiKey = "09758375-0673-4cdf-92a7-2e95188ed401"
    userId = "65f441d039fe887470fd2b26"
    ticket = print_pdf("ticket")
    url = princo(apiKey, userId, ticket)
    print(url)
    return url


result = verify_credit()
if result:
    print("Verification result:", result)
else:
    print("Verification failed")
