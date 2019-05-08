package szymki.dev;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import szymki.dev.Interfaces.NumberGenerator;
import szymki.dev.config.MaxNumber;
import szymki.dev.config.MinNumber;

import java.util.Random;
@Component
public class NumberGeneratorimpl implements NumberGenerator {
    private final Random random = new Random();
    private final int maxNumber;
    private final int minNumber;

    @Autowired
    public NumberGeneratorimpl(@MaxNumber int maxNumber, @MinNumber int minNumber) {
        this.maxNumber = maxNumber;
        this.minNumber = minNumber;
    }

    @Override
    public int next() {
        return random.nextInt((maxNumber-minNumber) +minNumber);
    }

    @Override
    public int getMinValue() {
        return minNumber;
    }

    @Override
    public int getMaxValue() {
        return maxNumber;
    }
}
