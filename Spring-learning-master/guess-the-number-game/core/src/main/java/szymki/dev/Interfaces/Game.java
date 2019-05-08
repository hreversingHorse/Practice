package szymki.dev.Interfaces;

public interface Game {

    int getNumber();

    int getGuess();

    void setGuess(int guess);

    int getSmallest();

    int getBiggest();

    int getRemaining();

    int getGuessCount();

    void reset();

    void check();

    boolean isValidNumberRange();

    boolean isGameWon ();

    boolean isGameLost();


}
