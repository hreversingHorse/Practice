package szymki.dev.console;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;
import szymki.dev.Interfaces.Game;
import szymki.dev.Interfaces.MessageGenerator;

import java.util.Scanner;

@Component
public class ConsoleNumberGuess  {
    // == constants ==
    private static final Logger log =
            LoggerFactory.getLogger(ConsoleNumberGuess.class);

    // == fields ==
    private Game game;

    private MessageGenerator msgGenerator;

    @Autowired
    public ConsoleNumberGuess(Game game, MessageGenerator msgGenerator) {
        this.game = game;
        this.msgGenerator = msgGenerator;
    }

    // == events ==
    @EventListener(ContextRefreshedEvent.class)
    public void start() {
        log.info(" start () ->> Container ready for use.");

        Scanner scanner = new Scanner(System.in);

        while (true){
            System.out.println(msgGenerator.getMainMessage());
            System.out.println(msgGenerator.getResultMessage());

            int guess= scanner.nextInt();
            scanner.nextLine();
            game.setGuess(guess);
            game.check();

            if (game.isGameWon() || game.isGameLost()){
                System.out.println(msgGenerator.getResultMessage());
                System.out.println("Play again y/n");

                String playAgainString = scanner.nextLine().trim();
                if(!playAgainString.equalsIgnoreCase("y")){
                    break;
                }
                game.reset();
            }
        }
    }
}
