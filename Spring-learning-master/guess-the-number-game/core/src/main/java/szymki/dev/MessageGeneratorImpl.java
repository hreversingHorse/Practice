package szymki.dev;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import szymki.dev.Interfaces.Game;
import szymki.dev.Interfaces.MessageGenerator;

import javax.annotation.PostConstruct;
@Component
public class MessageGeneratorImpl implements MessageGenerator {

    // == fields ===
    private Game game;
    private static final Logger log =
            LoggerFactory.getLogger(MessageGeneratorImpl.class);

    @Autowired
    public MessageGeneratorImpl(Game game) {
        this.game = game;
    }

    // == public methods ==
    @PostConstruct
    public void logGame (){
        log.info(game.toString() + " Game field init success");
    }

    @Override
    public String getMainMessage() {
        return "Number is between " + game.getSmallest() + " and " +
                game.getBiggest() + ". Can u guess it ?";
    }

    @Override
    public String getResultMessage() {
        if (game.isGameWon()){
            return "You guessed it number was : " + game.getNumber();
        }else if (game.isGameLost()) {
            return "You lost. The number was " + game.getNumber();
        }else if (!game.isValidNumberRange()){
            return "Invalid number range";
        }else if (game.getRemaining()==game.getGuessCount()){
            return "What is your first guess? ";
        }else {
            String direction = "Lower";

            if(game.getGuess()<game.getNumber()){
                direction = "Higher";
            }
            return direction + " ! You have " + game.getRemaining() + " guesses left";
        }
    }
}
