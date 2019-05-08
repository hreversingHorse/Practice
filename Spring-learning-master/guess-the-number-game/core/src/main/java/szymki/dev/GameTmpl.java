package szymki.dev;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import szymki.dev.Interfaces.Game;
import szymki.dev.Interfaces.NumberGenerator;
import szymki.dev.config.GuessCount;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
@Component
public class GameTmpl implements Game {
    // == constants ==
    private static final Logger log =
            LoggerFactory.getLogger(GameTmpl.class);

    // == fields ==

    private NumberGenerator numberGenerator;

    private int guessCount;
    private int number;
    private int guess;
    private int smallest;
    private int biggest;
    private int remainingGuesses;
    private boolean validNumberRange = true;

    @Autowired
    public GameTmpl(NumberGenerator numberGenerator, int guessCount) {
        this.numberGenerator = numberGenerator;
        this.guessCount = guessCount;
    }

    // == init methods ==
    @PostConstruct
    @Override
    public void reset() {
        smallest = numberGenerator.getMinValue();
        guess = numberGenerator.getMinValue();
        remainingGuesses = guessCount;
        biggest = numberGenerator.getMaxValue();
        number = numberGenerator.next();
        log.debug("the number is {}", number);
    }

    @PreDestroy
    public void preDestroy(){
        log.info("in Game preDestroy");
    }

    // == public methods ==
    @Override
    public int getNumber() {
        return number;
    }

    @Override
    public int getGuess() {
        return guess;
    }

    @Override
    public void setGuess(int guess) {
        this.guess = guess;
    }

    @Override
    public int getSmallest() {
        return smallest;
    }

    @Override
    public int getBiggest() {
        return biggest;
    }

    @Override
    public int getRemaining() {
        return remainingGuesses;
    }

    @Override
    public int getGuessCount() {
        return guessCount;
    }

    @Override
    public void check() {
        checkValidNumberRange();

        if (validNumberRange){
            if (guess > number){
                biggest = guess -1;
            }
            if (guess < number){
                smallest = guess +1;
            }
        }

        remainingGuesses--;
    }

    @Override
    public boolean isValidNumberRange() {
        return validNumberRange;
    }

    @Override
    public boolean isGameWon() {
        return guess == number;
    }

    @Override
    public boolean isGameLost() {
        return !isGameWon() && remainingGuesses <= 0;
    }

    // == private methods ==
    private void checkValidNumberRange(){
        validNumberRange = (guess>= smallest) && (guess <= biggest);
    }



}
